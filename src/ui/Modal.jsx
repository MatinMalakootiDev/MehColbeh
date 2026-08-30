import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--backdrop-color) p-4 backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className="relative p-2 max-h-[90vh] w-full max-w-240 overflow-y-auto rounded-lg bg-neutral-0 shadow-lg transition-all duration-500"
      >
        <button
          onClick={close}
          className="absolute top-3 left-4 z-10 rounded-sm bg-neutral-0 p-1.5 transition-all duration-200 hover:bg-neutral-100"
        >
          <HiXMark className="h-6 w-6 text-neutral-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
