import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <img
          className="scrollToTop"
          onClick={scrollUp}
          src="./img/scroll.png"
          alt="scroll"
          width="3%"
        />
      )}
    </div>
  );
}
