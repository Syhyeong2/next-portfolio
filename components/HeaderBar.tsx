import ThemeBtn from "./themeBtn";

export default function HeaderBar() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        A
      </div>
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        あ
      </div>
      <div className="btn btn-outline text-xl font-extrabold border-2 rounded-xl btn-sm">
        가
      </div>
      <ThemeBtn />
    </div>
  );
}
