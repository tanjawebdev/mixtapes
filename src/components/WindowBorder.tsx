import { type ReactNode } from "react";

import cross from "../../public/Icons/Closing-Icon.png";
import idleBg from "../assets/idle-bg.png";
import "./WindowBorder.css";

interface WindowBorderProps {
  title: string;
  children?: ReactNode;
}

export default function WindowBorder({ title, children }: WindowBorderProps) {
  return (
    <div className="window-border-wrapper">
      <div className="top-bar">
        <p>{title}</p>
        <div className="cross-image-wrapper">
          <img src={cross} alt="Cross Icon" className="cross-icon" />
        </div>
      </div>
      <div className="content-wrapper">{children}</div>
      <div className="window-bg-img-wrapper">
        <img src={idleBg} className="idle-bg-img" />
      </div>
    </div>
  );
}
