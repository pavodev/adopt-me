import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  /*
    useRef:
        Returns a mutable ref object whose '.current' property is initialized
        to the passed argument(initialValue). The returned object will persist
        for the full lifetime of the component.
        It is used to refer to the same object

    We don't want to create a new modal every time, we want to create one and 
    destroy the same one.
  */
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
