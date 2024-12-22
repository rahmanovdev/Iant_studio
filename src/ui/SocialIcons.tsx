import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./SocialIcons.module.scss";
import { SiGmail } from "react-icons/si";


const SocialIcons: React.FC = () => {
  return (
    <div className={styles.fixedIcons}>
      <a
        href="https://www.instagram.com/iantstudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover-target"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/i-ant-it-company/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover-target"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:abdibaitovabdurahman@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover-target"
      >
        <SiGmail/>
      </a>

      <div className={styles.line}></div>
    </div>
  );
};

export default SocialIcons;
