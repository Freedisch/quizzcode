import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/Button";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Link as link2 } from "react-router-dom";
const navigation = [
  { title: "Home", path: "/home", disabled: false },
  { title: "Add Oppotunities", path: "/opportunity", disabled: false },
  { title: "FaQS", path: "/support" },
  { title: "Contact us", path: "/contactUs", disabled: true },
];

function Navbar() {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 shadow-sm flex items-center justify-between">
      <div className="container max max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={buttonVariants({ variant: "link", size: "lg" })}
        >
          Quizzcode v1.0
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.path}>
                  <Button variant="ghost" size="lg">
                    {item.title}
                  </Button>
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
