import React from "react";

export default function AppIcon(src, href, alt) {
  return (
    <a href={href}>
      <img className="app_icon" src={src} alt={alt} />
    </a>
  );
}
