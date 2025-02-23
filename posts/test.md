---
title: "HTTP 상태코드와 ResponseEntity, 전역 예외 처리 방법"
date: "2025-02-07"
description: "HTTP 상태코드와 ResponseEntity, 전역 예외 처리 방법에 대해 알아봅니다."
tags: ["HTTP", "Spring", "Java"]
---

# HTTP 상태코드와 ResponseEntity, 전역 예외 처리 방법

![img.png](/images/img.png)

# **ResponseEntity**

## **ResponseEntity란?**

- Spring Boot에서 **HTTP 응답**을 좀 더 유연하고 명시적으로 다루기 위해 제공되는 **제네릭 클래스**입니다.
- ResponseEntity<T>는 **HTTP 헤더(Headers)**, **HTTP 바디(Body)**, HTTP 상태 코드(Status Code)를 **포함**해서 **직접 제어**할 수 있게 합니다.

`예제코드`

```java
// ResponseEntity를 이용해 200 OK와 함께 객체(List<User>)를 반환
return ResponseEntity.ok(userList);
```

```java
// ResponseEntity를 이용해 201 Created와 함께 생성된 엔티티를 반환
return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
```

## 왜 **ResponseEntity를 쓰는가?**

1. **상태 코드 설정**
   - **단순히 Contoller 메서드에서 객체만 리턴**하면, 스프링의 기본 규칙에 따라 `200 OK` 를 반환합니다.
   - 그러나, 실제로는 `201 Created`, `204 No Content`, `400 Bad Request`등 상황에 맞는
     상태 코드를 세밀하게 지정해야 할 때가 많습니다.
   - **ResponseEntity**를 사용하면 status(HttpStatus.CREATED)처럼 명시적으로
     상태 코드를 지정할 수 있습니다.
2. **헤더(Headers) 제어**
   - ResponseEntity.headers(...)를 통해 **커스텀 헤더**를 추가하거나, **Location 헤더** 등을 설정할 수 있습니다.
   - 예를 들어, POST 요청으로 생성된 리소스 URI를 Location 헤더에 담아주기도 합니다.
3. **응답 바디(Body) 설정**
   - body(객체)를 통해 JSON, XML, 문자열 등 다양한 타입의 데이터를 직접 담아 응답할 수 있습니다.
   - 스프링이 내부적으로 HttpMessageConverter를 통해 객체를 JSON/XML 등으로 변환합니다.

## 사용 방법

- **Builder 패턴 스타일**

```java
ResponseEntity.status(HttpStatus.CREATED)
              .header("Custom-Header", "ABC123")
              .body(newUser);
```

- **단축 메서드**

```java
ResponseEntity.ok(...) // → 200 OK에 바디 포함
ResponseEntity.noContent().build() // → 204 No Content 응답
ResponseEntity.notFound().build() // → 404 Not Found 응답
```

- **생성자 사용**

```java
return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
```

## 예시코드로 확인하기

```java
// 1) 사용자 생성
@PostMapping("/users")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User savedUser = userService.createUser(user);
    // 201 Created + 저장된 사용자 정보 반환
    return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
}

// 2) 사용자 조회
@GetMapping("/users/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    User user = userService.getUserById(id);
    // 200 OK + 해당 사용자 정보 반환
    return ResponseEntity.ok(user);
}

// 3) 사용자 삭제
@DeleteMapping("/users/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
    // 204 No Content(바디 없음)
    return ResponseEntity.noContent().build();
}
```

1. **createUser**
   - 새 사용자를 DB에 저장 → **201 Created** + 저장된 User 정보.
   - REST 표준에서 **POST로 리소스를 생성**할 때는 201 Created가 권장.
2. **getUser**
   - 사용자 조회 성공 → **200 OK** + 조회된 User 정보.
   - 사용자 없을 시? → UserNotFoundException 발생 → 전역 예외 처리에서 **404 Not Found**로 처리.
3. **deleteUser**
   - 성공 시 → **204 No Content** 응답(바디 없이).
   - 존재하지 않는 사용자를 삭제하려고 하면? → UserNotFoundException 발생 → 전역 예외 처리에서 404로 처리.

## 정리

“**무조건 200 OK**”가 아니라, 상황에 맞는 다양한 상태 코드를 **의도적**으로 반환해야 합니다.

**ResponseEntity**를 사용함으로서 상태 코드 반환을 수행합니다.

# 전역 예외 처리 방법

**ResponseEntity** 설명에서 **‘전역 예외 처리에서’** 라는 설명이 있었습니다.
아래 내용에서는 **커스텀 예외, 전역 예외 처리, RestControllerAdvice**에 대해 알아보고,
이를 통해, **전역 예외 처리**를 어떠한 방식으로 수행하는지 설명합니다.

## **Custom Exception(커스텀 예외)**

### **Custom Exception이란?**

- Custom Exception은 **개발자가 직접 정의한 예외 클래스**를 의미합니다.
- 기존 표준 예외(예: NullPointerException, IllegalArgumentException 등)로는 상황을 구체적으로
  표현하기 어려울 때, **해당 애플리케이션만의 비즈니스 로직에 맞는 예외**를 만들기 위해 사용합니다.

예를 들어, 사용자 정보가 없을 때 발생할 수 있는 **UserNotFoundException**, 특정 권한이 없을 때 발생하는 **AccessDeniedException** 등을 정의하면 비즈니스 시나리오에 맞는 예외 처리가 가능합니다.

### **Custom Exception 작성 시 고려사항**

- **클래스명**
  - 예외 상황을 잘 나타낼 수 있도록 **직관적인 이름** 사용.
    예: UserNotFoundException, InvalidOrderException, UnauthorizedAccessException 등.
- **상속할 클래스**
  - **RuntimeException**을 상속받는 것이 일반적입니다. (Unchecked Exception)
  - Checked Exception으로 만들고 싶다면 Exception을 상속받을 수도 있지만, 보통 Spring 프레임워크에서는 **Unchecked 예외**(RuntimeException)를 쓰는 편이 자연스럽습니다.
- **생성자**
  - **메시지(String message)**를 파라미터로 받는 생성자를 정의해서, 발생 시점에 예외 메시지를 명시할 수 있게 합니다.

```java
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

- **예외 정보 추가(선택 사항)**
  - 필요하다면 **에러 코드**, **추가 정보**(필드 값, 상황별 코드 등)를 필드에 담아 함께 전달할 수도 있습니다.

```java
public class UserNotFoundException extends RuntimeException {
    private String errorCode;

    public UserNotFoundException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
    // getter...
}
```

## **Global Exception Handler(전역 예외 처리) & RestControllerAdvice**

### **Global Exception Handler란?**

- Spring에서 발생하는 예외들을 **한 곳**에서 모아 처리할 수 있도록 제공되는 기능입니다.
- **@ControllerAdvice** 또는 **@RestControllerAdvice**를 사용하면,
  애플리케이션 전역에서 발생하는 예외를 잡아낼 수 있습니다. - @ControllerAdvice는 뷰 기반의 응답(HTML, JSP 등)을 주로 다룰 때 사용. - @RestControllerAdvice는 @ControllerAdvice + @ResponseBody 조합으로, **JSON 형태**의 응답을 주로 다룰 때 사용.

`예시 코드`

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body(ex.getMessage());
    }
    // 그 외 예외 처리 ...
}
```

### 전역 예외 처리의 과정…

1. **애플리케이션 동작 중 예외 발생**
   - 예) UserNotFoundException이 컨트롤러/서비스 계층에서 발생.
2. **예외 던짐**
   - 예외가 던져져서 호출 스택을 타고 올라감.
3. **전역 예외 처리기(**@RestControllerAdvice**) 탐색**
   - Spring은 **@ExceptionHandler가 붙어 있는 메서드를 찾아** UserNotFoundException을 처리할 수 있는지 확인.
4. **해당 Handler 메서드 실행**
   - handleUserNotFoundException(UserNotFoundException ex) 메서드 실행.
   - 해당 메서드가 응답(ResponseEntity)을 구성하여 클라이언트에게 반환.

이 과정을 통해, **클라이언트는 세부적인 에러 상황**(예: 404 Not Found, User with id 10 not found)을
알 수 있게 됩니다.

### **예외 처리 우선순위 & 범위**

- **특정 예외**를 처리하는 @ExceptionHandler가 여러 개일 수 있습니다. (클래스 레벨, 전역 레벨 등)
- Spring은 더 **구체적인 예외**가 일치하는 핸들러를 우선 적용합니다.
- @RestControllerAdvice에 @Order 어노테이션을 부여해 우선순위를 조절할 수도 있습니다.

```java
@RestControllerAdvice
@Order(1) // 우선순위를 높게 지정
public class GlobalExceptionHandlerOne {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        ...
    }
}

@RestControllerAdvice
@Order(2)
public class GlobalExceptionHandlerTwo {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundExceptionOther(UserNotFoundException ex) {
        ...
    }
}
```

⇒ GlobalExceptionHandlerOne의 @Order(1)이 더 높은 우선순위이므로, 먼저 호출되어 처리됩니다.

### **예외 처리 전략**

1. **적절한 HTTP 상태 코드 매핑**
   - 비즈니스 로직에서 발생한 예외에 대해, 의미 있는 HTTP 상태 코드를 매핑해야 합니다.
   - 예: UserNotFoundException → **404**, UnauthorizedAccessException → **403** 등.
2. **예외 메시지, 에러 코드, 에러 객체**
   - 단순 문자열 메시지뿐만 아니라, **JSON 형태**로 응답을 구성해줄 수 있습니다.

```java
@ExceptionHandler(UserNotFoundException.class)
public ResponseEntity<Map<String, String>> handleUserNotFoundException(UserNotFoundException ex) {
    Map<String, String> response = new HashMap<>();
    response.put("error", "NOT_FOUND");
    response.put("message", ex.getMessage());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
}
```

클라이언트에서 처리하기 쉽게 **에러 코드**, **발생 시각**, **추가 정보** 등을 포함하는 POJO를 만들어서 ResponseEntity로 내려주면 훨씬 좋습니다.

1. **로깅(logging)**
   - 예외를 처리하면서 **로그**도 남겨야 합니다.
   - 로그를 남길 때는 @Slf4j(Lombok) 또는 LoggerFactory를 사용해 ex.getMessage()와 스택 트레이스를 기록하는 것이 일반적입니다.
   - 예외 상세 정보와 함께, **중요한 요청 파라미터**나 **사용자 ID** 등을 함께 기록해두면 향후 디버깅/이슈 트래킹에 도움이 됩니다.
2. **안전한 예외 메시지**
   - 보안 취약점 방지를 위해, **개발 환경에서만** 디테일한 예외 메시지(스택 트레이스 등)를 노출하고, 운영 환경에서는 고객에게 노출해선 안 될 민감한 정보를 포함시키지 않도록 주의해야 합니다.
   - application.properties에서 프로파일에 따라 예외 메시지를 달리 응답하거나, 상세 정보를 숨길 수 있습니다.

## 간단한 예제 시나리오

1. **사용자 조회 기능**을 개발했다고 가정
   - DB에 없는 ID를 조회하면 UserNotFoundException 발생
2. **Custom Exception**: UserNotFoundException 구현

```java
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

1. **서비스 계층**에서 조건 검증 후 예외를 던짐

```java
public User getUserById(Long id) {
    return userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("사용자가 존재하지 않습니다. (id: " + id + ")"));
}
```

1. **Global Exception Handler**에서 처리

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleUserNotFoundException(UserNotFoundException ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", "USER_NOT_FOUND");
        response.put("message", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    // 그 외 예외들...
}
```

1. **결과**
   - 클라이언트가 /api/users/9999 같은 없는 유저를 조회하면,

```json
{
  "error": "USER_NOT_FOUND",
  "message": "사용자가 존재하지 않습니다. (id: 9999)"
}
```

를 바디로 하고, HTTP status code가 **404**인 응답을 받게 됩니다.

# Spring Security + JWT 환경에서의 예외처리

### Q. Spring Security에서 토큰을 검증할 경우, 예외가 발생한다면 기존에 사용 중이던 Custom Exception으로 처리가 될까?

A. 가능하다면 좋겠지만 불가능하다!

> spring security와 spring boot 예외 처리구간이 다르다고 생각해보면 간단하다.
>
> `Filter`는 `Dispatcher Servlet` 보다 앞단에 존재하며 `Handler Intercepter`는 뒷단에 존재하기 때문에 `Filter` 에서 보낸 예외는 `Exception Handler`로 처리를 못한다.

![image.png](HTTP%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8B%E1%85%AA%20ResponseEntity,%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%A8%20%E1%84%8B%E1%85%A8%E1%84%8B%E1%85%AC%20%E1%84%8E%E1%85%A5%E1%84%85%E1%85%B5%20%207cdfdf65e8424e93bcb86d4fd2e67793/image%201.png)

## How to do?

“JWT 필터”라고 불리는 커스텀 필터(OncePerRequestFilter를 상속받은 필터) 내부에서 직접 response를 조작할 수도 있지만,
Spring Security의 **인증/인가 예외 처리 규칙**을 잘 활용하면 더 일관적이고 유지보수하기 쉬운 구조를 만들 수 있습니다.

### **AuthenticationEntryPoint & AccessDeniedHandler 활용**

Spring Security에서 보안과 관련된 두 가지 중요한 인터페이스

**AuthenticationEntryPoint 란?**

- **개념**:
  `AccessDeniedHandler`는 인증된 사용자(authenticated user)가 **허가되지 않은 자원**에 접근하려고 할 때 호출됩니다.
  즉, 사용자가 로그인은 되어 있지만, 해당 리소스를 사용할 권한이 없는 경우에 발생하는 상황을 처리합니다.
- **주요 상황**:
  - 사용자가 특정 URL에 접근하려고 할 때, 해당 URL에 필요한 권한(예: ROLE_ADMIN)이 없을 경우.
  - 예: 로그인한 사용자가 `/admin` 페이지에 접근하려고 하지만 `ROLE_USER`만 가지고 있을 때.
- **동작 흐름**:

  1. 사용자 인증은 성공했으나 권한이 부족한 경우.
  2. Spring Security는 `AccessDeniedHandler`를 호출.
  3. `AccessDeniedHandler`는 적절한 응답(예: 403 Forbidden)을 반환하거나 사용자 정의 에러 페이지로 리다이렉트.
     **구현 예**:

  ```java
  java
  코드 복사
  @Component
  public class CustomAccessDeniedHandler implements AccessDeniedHandler {
      @Override
      public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
          response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied!");
      }
  }

  ```

**AccessDeniedHandler 란?**

- **개념**:
  `AuthenticationEntryPoint`는 **인증되지 않은 사용자(unauthenticated user)**가 보호된 자원에 접근하려고 할 때 호출됩니다.
  즉, 사용자가 로그인을 하지 않고 보호된 페이지에 접근하려고 하면 발생하는 상황을 처리합니다.
- **주요 상황**:
  - 사용자가 인증되지 않은 상태에서 `/profile`과 같은 인증이 필요한 페이지에 접근할 경우.
  - 로그인 페이지로 리다이렉트하거나, 401 Unauthorized 응답을 반환해야 할 때.
- **동작 흐름**:
  1. 사용자가 인증이 필요한 자원에 접근했지만, 인증되지 않은 경우.
  2. Spring Security는 `AuthenticationEntryPoint`를 호출.
  3. `AuthenticationEntryPoint`는 로그인 페이지로 리다이렉트하거나, 401 Unauthorized 상태 코드를 반환.

**구현 예**:

```java
java
코드 복사
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized!");
    }
}

```

### 예외처리 예제 코드

```java
@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

    private final ObjectMapper objectMapper;

    // ObjectMapper를 DI받거나, Bean을 주입해 사용
    public JwtAccessDeniedHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    // 접근 거부 시 호출되는 메서드
    @Override
    public void handle(
        // 요청 객체
        HttpServletRequest request,
        // 응답 객체
        HttpServletResponse response,
        // 접근 거부 예외
        AccessDeniedException accessDeniedException)
            throws
            // 예외 처리
            IOException, ServletException {

        // 1. ErrorResponse 생성
        String requestUri = request.getRequestURI();
        ErrorResponse errorResponse = ErrorResponse.makeError("access is denied", HttpStatus.FORBIDDEN, requestUri);

        // 2. JSON 변환
        String responseJson = objectMapper.writeValueAsString(errorResponse);

        // 3. HTTP 응답 설정
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");

        // 4. response 바디에 JSON 쓰기
        response.getWriter().write(responseJson);
    }
}
```

```java
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {


    private final ObjectMapper objectMapper;

    // ObjectMapper를 DI받거나, Bean을 주입해 사용
    public JwtAuthenticationEntryPoint(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    // 인증 실패 시 호출되는 메서드
    @Override
    public void commence(
            // 요청 객체
            HttpServletRequest request,
            // 응답 객체
            HttpServletResponse response,
            // 인증 실패 예외
            AuthenticationException authException)
            throws
            // 예외 처리
            IOException, ServletException {

        // 예: "JWT 토큰이 없거나 만료되어서 인증 실패" 상황

        // 1. ErrorResponse 생성
        String requestUri = request.getRequestURI();
        ErrorResponse errorResponse = ErrorResponse.makeError("Invalid or missing JWT token", HttpStatus.UNAUTHORIZED,
                requestUri);

        // 2. JSON 변환
        String responseJson = objectMapper.writeValueAsString(errorResponse);

        // 3. HTTP 헤더 세팅
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");

        // 4. JSON 응답 전송
        response.getWriter().write(responseJson);
    }
}

```

**API 예시**

![image.png](HTTP%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8B%E1%85%AA%20ResponseEntity,%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%A8%20%E1%84%8B%E1%85%A8%E1%84%8B%E1%85%AC%20%E1%84%8E%E1%85%A5%E1%84%85%E1%85%B5%20%207cdfdf65e8424e93bcb86d4fd2e67793/image%202.png)

⇒ 만료된 토큰으로 요청시
