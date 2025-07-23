import vid from "../assets/bg_pressmaster.webm";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* video background */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          src={vid}
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none saturate-0 contrast-100 brightness-75"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="z-10 text-white text-7xl border-4 border-white absolute h-dvh w-dvw top-0 left-0 scale-95 flex flex-col justify-center align-middle ">
        <div className="text-white clear z-40">
          <div className="relative flex flex-col gap-0">
            <span className="text-5xl md:text-8xl flex flex-row flex-nowrap m-auto">
              <p className="load-ani ease-in-out">I'm a</p>

              <Nav />
            </span>

            <span className="aboslute text-7xl md:text-9xl font-black text-center text-emerald-400 load-ani-zoomIn pointer-none:">
              FRONT-END
            </span>

            <span className="text-5xl md:text-8xl line-clamp-2 text-center load-ani">
              WEB DEVELOPER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
