import { KLogo } from "@/components/ui/KLogo";
import { getDictionary } from "@/lib/get-dictionary";
import { postsServiceMiddle } from "@/lib/services/utils/posts-utils";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const divVariants = cva(
  "relative min-h-screen flex-col shadow-2xl w-screen max-w-80",
  {
    variants: {
      variant: {
        default: "hidden md:flex",
        destructive: "bg-secondary flex",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface DivProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  asChild?: boolean;
  closeDrawer?: () => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const KSideBarMenu = React.forwardRef<HTMLDivElement, DivProps>(
  (
    {
      className,
      variant,
      dictionary,
      children,
      asChild = false,
      closeDrawer,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(divVariants({ variant, className }))}
        {...props}
      >
        <div
          onClick={closeDrawer}
          className="flex flex-shrink-0 items-center justify-between mt-2 ml-1"
        >
          <KLogo />
        </div>
        <hr className="border-primary mb-4 md:hidden" />
        <ul className="space-y-2 font-medium">
        </ul>
      </Comp>
    );
  }
);

KSideBarMenu.displayName = "KSideBarMenu";

export { KSideBarMenu, divVariants };
