import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-pixel uppercase tracking-wider transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-4 border-primary hover:translate-y-[-6px] hover:scale-105 active:translate-y-0 active:scale-100 shadow-[6px_6px_0_hsl(220,15%,5%)] hover:shadow-[8px_8px_0_hsl(220,15%,5%),0_0_40px_rgba(255,0,255,0.6)] active:shadow-[6px_6px_0_hsl(220,15%,5%)] hover:brightness-110",
        destructive: "bg-destructive text-destructive-foreground border-4 border-destructive hover:translate-y-[-6px] hover:scale-105 active:translate-y-0 active:scale-100 shadow-[6px_6px_0_hsl(220,15%,5%)] hover:shadow-[8px_8px_0_hsl(220,15%,5%),0_0_40px_rgba(255,0,0,0.6)] active:shadow-[6px_6px_0_hsl(220,15%,5%)]",
        outline: "border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background hover:scale-105 shadow-[6px_6px_0_hsl(220,15%,5%)] hover:shadow-[8px_8px_0_hsl(220,15%,5%),0_0_30px_rgba(255,255,255,0.5)]",
        secondary: "bg-secondary text-secondary-foreground border-4 border-secondary hover:translate-y-[-6px] hover:scale-105 active:translate-y-0 active:scale-100 shadow-[6px_6px_0_hsl(220,15%,5%)] hover:shadow-[8px_8px_0_hsl(220,15%,5%),0_0_40px_rgba(0,255,255,0.6)] active:shadow-[6px_6px_0_hsl(220,15%,5%)]",
        ghost: "border-2 border-transparent hover:border-primary hover:bg-primary/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,255,0.4)]",
        link: "text-primary underline-offset-4 hover:underline hover:brightness-125",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props} 
      >
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
