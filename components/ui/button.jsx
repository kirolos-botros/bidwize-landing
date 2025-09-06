import React from "react";

const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 ring-offset-black";
const variants = {
  default: "bg-white text-black hover:bg-neutral-200",
  outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent text-white hover:bg-white/10"
};
const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-11 px-5 text-base",
  icon: "h-10 w-10 p-0"
};

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "md", asChild = false, children, ...props },
  ref
) {
  const cls = [base, variants[variant] || variants.default, sizes[size] || sizes.md, className].join(" ");
  const Comp = asChild ? "span" : "button";
  return <Comp ref={ref} className={cls} {...props}>{children}</Comp>;
});
