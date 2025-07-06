import { Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <div className="main_container">
        <Outlet />
      </div>
    </>
  );
}
