"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Build Better Habits",
  "Stay Consistent",
  "Track Your Progress",
  "Achieve Your Goals",
  "Form Lasting Routines",
];

export default function TypewriterEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Speed of typing
    const deleteSpeed = 50; // Speed of deleting
    const pauseBeforeDelete = 2000; // How long to pause before deleting
    const pauseBeforeNextPhrase = 500; // How long to pause before next phrase

    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (!isDeleting) {
          // Typing
          if (currentText !== currentPhrase) {
            setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          } else {
            // Finished typing, pause before deleting
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
            return;
          }
        } else {
          // Deleting
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
            return;
          }
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-[40px] text-center">
      <span className="inline-block text-white text-4xl font-light">
        {currentText}
        <span className="animate-blink">|</span>
      </span>
    </div>
  );
}
