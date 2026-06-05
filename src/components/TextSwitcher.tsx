import { useEffect, useState } from "react";

type TextSwitcherProps = {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
};

export const TextSwitcher = ({
  texts,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2200,
}: TextSwitcherProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const fullText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing mode
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Word is fully typed, pause, then trigger deletion phase
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting mode
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Word is fully deleted, transition to the next text in the list after a brief pause
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`${className} inline-flex items-center select-none`}>
      {/* Cool gray/slate color text as in the image */}
      <span className="text-[#8a8f98]">
        {displayText || "\u200b"}
      </span>
      {/* Blinking vertical cursor matching the text color */}
      <span
        className="ml-1.5 w-[2px] h-[0.95em] bg-[#8a8f98]/80 shadow-[0_0_8px_rgba(138,143,152,0.4)] inline-block align-middle animate-[pulse_1.2s_infinite]"
      />
    </span>
  );
};

export default TextSwitcher;
