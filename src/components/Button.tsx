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
      className={`bg-[#C8DBCB]/60 text-emerald-800 px-6 py-2 rounded-2xl shadow-md 
                  hover:bg-[#C8DBCB]/80 hover:cursor-pointer transition-colors duration-200`}
    >
      {children}
    </button>
  );
}
