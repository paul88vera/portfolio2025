import { Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex row flex-nowrap w-full">
      <ScrollRestoration />
      {/* <div className="sidebar w-[500px] h-[100svh] bg-slate-800 p-4"></div> */}
      {/* <div className="main_container w-full h-[100svh] bg-slate-600"> */}
      {/* <div className="topnav bg-slate-800 w-full h-[90px] p-2">
        </div> */}
      <div className={`main-content w-full`}>
        <div className="main-content-bg"></div>
        <Outlet />
      </div>
      {/* </div> */}
      {/* <div></div> */}
    </div>
  );
}
