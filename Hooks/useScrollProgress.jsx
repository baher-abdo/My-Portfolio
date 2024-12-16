import React, { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const UpdateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll",UpdateScrollCompletion);
    return () => {
      window.removeEventListener("scroll", UpdateScrollCompletion);
    };
  }, []);

  return completion;
}
