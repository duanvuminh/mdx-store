import { useEffect, useState } from "react";

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const useHook = ()=>{
    useEffect(() => {
      return () => {};
    },[]);
  }
  return {  useHook, isOpen, setIsOpen }
}
