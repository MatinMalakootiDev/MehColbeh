import { useSidebar } from "../hooks/useSidebar";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  return (
    <aside
      className={`bg-neutral-0 px-[0.4rem] border-l border-l-neutral-100 row-span-full flex flex-col gap-2 fixed lg:static inset-y-0 right-0 z-2 w-full transform transition-transform duration-500 ease-in-out lg:translate-x-0 max-lg:mt-16 max-lg:py-10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
