import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleReSzie = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleReSzie();

    window.addEventListener("resize",handleReSzie) 

    const cleanUp = () => {
        console.log("Run If UseEffect dep Changing...");
        window.removeEventListener("resize",handleReSzie)
    }
    return cleanUp;
  }, []);
  return windowSize;
};
export default useWindowSize;
