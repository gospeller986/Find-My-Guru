import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  label: string;
}

export const Links = (props: LinkProps) => {
  return (
    <Link className="font-[family-name:var(--font-geist-sans)]" style={{ textDecoration: "none" }} href={props.href}>
      {props.label}
    </Link>
  );
};
