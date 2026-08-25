import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSidebar } from "../hooks/useSidebar";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="bg-neutral-0 py-5 px-10 border-b border-b-neutral-100 flex items-center justify-between max-lg:z-3">
      <button onClick={toggleSidebar} className="lg:hidden outline-none">
        {isOpen ? <HiOutlineX className="hamburger-icon" /> : <HiOutlineMenu className="hamburger-icon" />}
      </button>
      <div>هدر</div>
    </header>
  );
};

export default Header;
