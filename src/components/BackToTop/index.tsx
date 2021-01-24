import { IconButton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "react-feather";

const BackToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    buttonRef.current?.blur();
  };

  useEffect(() => {
    const toogleScroll = () => {
      const threshold = 400;

      setShowScroll(window.pageYOffset > threshold);
    };

    window.addEventListener("scroll", toogleScroll);

    return () => window.removeEventListener("scroll", toogleScroll);
  }, [setShowScroll]);

  return (
    <IconButton
      colorScheme="teal"
      aria-label="Volver al inicio"
      icon={<ArrowUp />}
      position="fixed"
      boxShadow="lg"
      right={[4, 4, 8]}
      bottom={[4, 4, 8]}
      size="lg"
      onClick={scrollTop}
      opacity={+showScroll}
      ref={buttonRef}
    />
  );
};

export default BackToTop;
