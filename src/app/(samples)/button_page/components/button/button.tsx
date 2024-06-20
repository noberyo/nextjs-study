import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof buttonSize;
  variant?: keyof typeof buttonVariant;
}

const buttonVariant = {
  default: "bg-slate-600 text-white-300 rounded-md hover:bg-slate-400",
  primary: "bg-green-600 text-white-300 rounded-md hover:bg-green-400",
  secondary: "bg-blue-600 text-white-300 rounded-md hover:bg-blue-400",
  danger: "bg-red-600 text-white-300 rounded-md hover:bg-red-400",
} as const; // ネストしたものもすべてをreadonlyにする

const buttonSize = {
  xs: "px-1 py-1 text-xs",
  sm: "px-2 py-2 text-sm",
  md: "px-4 py-4 text-md",
  lg: "px-6 py-5 text-lg",
  xl: "px-8 py-6 text-xl",
} as const;

export default function Button({
  size = "md",
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`duration-150 ${buttonVariant[variant]} ${buttonSize[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
