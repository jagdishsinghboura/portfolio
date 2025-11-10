"use client";
import { useState, useEffect } from "react";

const texts = [
  "FULL STACK DEVELOPER 🚀",
  "Frontend Developer 🚀",
  "Backend Developer 🚀",
  "Tech Explorer"
];

export default function TypingText() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText !== texts[index]) {
        timer = setTimeout(() => {
          setDisplayText(texts[index].slice(0, displayText.length + 1));
        }, 120);
      } else {
        setTimeout(() => setIsDeleting(true), 1400);
      }
    } else {
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 60);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <div className="text-2xl sm:text-3xl font-bold p-2">
      {displayText}|
    </div>
  );
}
