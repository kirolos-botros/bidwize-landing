"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";

export function Accordion({ type = "single", collapsible = true, children }) {
  return <AccordionPrimitive.Root type={type} collapsible={collapsible}>{children}</AccordionPrimitive.Root>;
}
export function AccordionItem({ value, children }) {
  return <AccordionPrimitive.Item value={value} className="border-b border-white/10">{children}</AccordionPrimitive.Item>;
}
export function AccordionTrigger({ children, className = "" }) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger className={`flex w-full items-center justify-between py-3 text-sm ${className}`}>
        {children}
        <span className="ml-2 text-xs opacity-60">▾</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
export function AccordionContent({ children, className = "" }) {
  return (
    <AccordionPrimitive.Content className={`pb-4 text-sm ${className}`}>
      {children}
    </AccordionPrimitive.Content>
  );
}
