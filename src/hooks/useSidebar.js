import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar باید داخل SidebarProvider استفاده بشه");
  }
  return context;
}
