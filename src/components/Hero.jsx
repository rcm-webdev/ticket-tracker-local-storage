import LoginButton from "./Button";

export default function Hero() {
  return (
    <div className="bg-base-200">
      <div className="hero bg-base-200 min-h-screen max-w-5xl mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl ">
              Ticket Tracker powered by{" "}
              <span className="text-primary font-extrabold">Rabbit</span>
            </h1>
            <p className="py-6">
              <span className="font-bold">Rabbit</span>, is a local-first ticket
              tracker built for fast, no-fuss issue management.
            </p>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
