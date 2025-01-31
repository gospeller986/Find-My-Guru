import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  children : React.ReactNode
}

export const Links = (props: LinkProps) => {
  return (
    <Link className="font-[family-name:var(--font-geist-sans)] flex flex-row gap-2" style={{ textDecoration: "none" }} href={props.href}>
      {props.children}
    </Link>
  );
};
