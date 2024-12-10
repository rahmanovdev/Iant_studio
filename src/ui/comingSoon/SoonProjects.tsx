"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./SoonProjects.module.scss";

const SoonProjects = () => {
  const [typedText, setTypedText] = useState("");
  const [percentage, setPercentage] = useState(31);

  const text = "Coming soon";
  const typingSpeed = 100;

  const textIndexRef = useRef(0); 

  useEffect(() => {
    const typeWriter = () => {
      if (textIndexRef.current < text.length) {
        const currentIndex = textIndexRef.current;
        setTypedText((prev) => prev + text.charAt(currentIndex));
        textIndexRef.current += 1; 
        setTimeout(typeWriter, typingSpeed);
      }
    };
    typeWriter();
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 99) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(progressInterval); 
  }, []);

  const greenBlocks = Math.floor(percentage / 10);
  const blackBlocks = 10 - greenBlocks;

  const loadingBar = "█ ".repeat(greenBlocks).trim();
  const progressBar = "█ ".repeat(blackBlocks).trim();

  return (
    <div className={styles.container}>
      <div className={styles.typewriterText}>{typedText}</div>
      <span className={styles.loadingBar}>{loadingBar}</span>
      <span className={styles.progressBar}>{progressBar}</span>
      <span className={styles.percentage}>{percentage}%</span>
      <br />
      &gt; 01/01/25<span className={styles.cursor}></span>
    </div>
  );
};

export default SoonProjects;
