import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/Button";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Link as link2 } from "react-router-dom";
const navigation = [
  { title: "Dashboard", path: "/home", disabled: false },
  { title: "Quizzes", path: "/opportunity", disabled: false },
  { title: "⭐ Give a star", path: "/support" },
];

export default function Navbar() {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between">
      <div className="items-center space-x2 md:flex">
        <Link
          href="/"
          className={buttonVariants({ variant: "link", size: "lg" })}
        >
          Quizzcode v1.0
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                )}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
