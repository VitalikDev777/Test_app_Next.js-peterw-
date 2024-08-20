import * as React from "react";

import { cn } from "@/lib/utils";
import { memo } from "react";

interface CardProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Card: React.FC<CardProps> = memo(
  ({ className, children, onClick }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn(
        `rounded-lg border bg-card text-card-foreground shadow-sm max-h-[220px] box-border ${className}`
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";

export { Card };
