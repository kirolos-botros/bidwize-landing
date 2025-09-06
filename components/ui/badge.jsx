import React from "react";

export function Badge({ className = "", variant = "secondary", children }) {
  const styles = variant === "secondary"
    ? "border border-white/20 bg-white/10 text-white"
    : "border border-white/20 bg-white text-black";
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${styles} ${className}`}>{children}</span>;
}
