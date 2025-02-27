import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer flex justify-between  items-center p-2 mt-40">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <FaGithub
            className="size-8 hover:bg-base-300 cursor-pointer p-1 rounded-lg"
            onClick={() => window.open("https://github.com/Syhyeong2")}
          />
        </a>
      </nav>
    </footer>
  );
}
