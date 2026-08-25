import { Outlet } from "react-router-dom";

import { SidebarProvider } from "../context/SidebarProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] max-lg:flex max-lg:flex-col h-screen">
        <Header />
        <Sidebar />
        <main className="bg-neutral-50 pt-12 px-14 pb-20 overflow-scroll">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
