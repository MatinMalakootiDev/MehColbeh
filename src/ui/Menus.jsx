import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const MenusContext = createContext();

const Menus = ({ children }) => {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
};

const Menu = ({ children }) => {
  return <div className="flex items-center justify-end">{children}</div>;
};

const Toggle = ({ id }) => {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-3 rounded-sm p-1.5 transition-all duration-300 hover:bg-neutral-100">
      <HiEllipsisVertical className="h-6 w-6 text-neutral-700" />
    </button>
  );
};

const List = ({ id, children }) => {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      className="fixed z-10 rounded-md bg-neutral-0 shadow-md">
      {children}
    </ul>,
    document.body,
  );
};

const Button = ({ children, icon, onClick }) => {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-4 px-6 py-3 text-sm transition-all duration-300 hover:bg-neutral-100">
        {icon && (
          <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-neutral-400 [&>svg]:transition-all [&>svg]:duration-300">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </button>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
