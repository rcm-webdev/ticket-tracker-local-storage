import LoginButton from "./Button";

export default function Navbar() {
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-5xl mx-auto bg-base-300 justify-between">
        <button className="btn btn-ghost text-xl font-extrabold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-8 h-8 text-primary"
          >
            <path
              fill="currentColor"
              d="m18.05 21l-2.73-4.74c0-1.73-1.07-2.84-2.37-2.84c-.9 0-1.68.5-2.08 1.24c.33-.19.72-.29 1.13-.29c1.3 0 2.36 1.06 2.36 2.36c0 1.31-1.05 2.38-2.36 2.38h3.3V21H6.79c-.24 0-.49-.09-.67-.28a.95.95 0 0 1 0-1.34l.5-.5c-.34-.15-.62-.38-.9-.62c-.22.5-.72.85-1.3.85a1.425 1.425 0 0 1 0-2.85l.47.08v-1.97a4.73 4.73 0 0 1 4.74-4.74h.02c2.12.01 3.77.84 3.77-.47c0-.93.2-1.3.54-1.82c-.73-.34-1.56-.55-2.43-.55c-.53 0-.95-.42-.95-.95c0-.43.28-.79.67-.91l-.67-.04c-.52 0-.95-.42-.95-.94c0-.53.43-.95.95-.95h.95c2.1 0 3.94 1.15 4.93 2.85l.28-.01c.71 0 1.37.23 1.91.61l.45.38c2.17 1.95 1.9 3.27 1.9 3.28c0 1.28-1.06 2.33-2.35 2.33l-.49-.05v.08c0 1.11-.48 2.1-1.23 2.8L20.24 21zm.11-13.26c-.53 0-.95.42-.95.94c0 .53.42.95.95.95c.52 0 .95-.42.95-.95c0-.52-.43-.94-.95-.94"
            ></path>
          </svg>
          <span className="">Rabbit</span>
        </button>
        <LoginButton size={"sm"} />
      </div>
    </div>
  );
}
