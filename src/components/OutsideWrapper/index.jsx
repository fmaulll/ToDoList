import { useRef } from "react";
import { useOutside } from "../../hooks/useOutside";

export function OutsideWrapper({ children, callback }) {
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, callback)

  return <div ref={wrapperRef}>{children}</div>;
}
