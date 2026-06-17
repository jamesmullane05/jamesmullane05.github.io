"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  title?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  ariaCurrent?: "page" | "step" | "location" | "date" | "time" | true | false;
};

export default function AnimatedLink({
  href,
  children,
  className,
  ariaLabel,
  title,
  onClick,
  ariaCurrent,
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      title={title}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
