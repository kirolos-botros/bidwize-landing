import React from "react";

export function Card({ className = "", children }) {
  return <div className={"rounded-2xl border border-white/10 bg-neutral-900/60 " + className}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={"p-4 " + className}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <div className={"text-lg font-semibold " + className}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={"p-4 " + className}>{children}</div>;
}
