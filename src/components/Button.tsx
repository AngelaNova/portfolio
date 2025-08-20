// components/ui/Button.tsx
"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
