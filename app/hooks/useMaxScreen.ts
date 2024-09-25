import { useEffect, useState } from "react";

export function useMaxScreen(width: number) {
  const [isMaxScreen, setIsMaxScreen] = useState(true);

  useEffect(() => {
    const handleMinScreen = () => {
      setIsMaxScreen(window.innerWidth <= width);
    };

    // Check initial size on mount
    handleMinScreen();

    window.addEventListener("resize", handleMinScreen);

    return () => {
      window.removeEventListener("resize", handleMinScreen);
    };
  }, [width]); // Make sure to include `width` as a dependency

  return isMaxScreen;
}
