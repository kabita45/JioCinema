import { useState, useEffect, useRef } from "react";

const useToggleComponent = (initialState) => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(initialState);

  const handleOutSideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return [isOpen, setIsOpen, ref];
};
export default useToggleComponent;
