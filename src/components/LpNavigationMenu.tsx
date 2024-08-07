"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const navigation = [
  { name: "about", href: "/about" },
  { name: "models", href: "/models" },
  { name: "jobs", href: "/jobs" },
];

export default function LpNavigationMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="hover:no-underline hover:text-gray-400">
          <span className="uppercase text-7xl font-bold">fine</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-gray-400/10 bg-transparent backdrop-blur-sm">
        <DialogHeader>
          <div className="grid grid-cols-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-5xl text-center font-bold uppercase hover:text-slate-400">
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-44 grid">
            <Button
              variant="link"
              className="text-xl hover:text-gray-400 hover:animate-spin">
              <a href="/">login</a>
            </Button>
            <Button
              variant="link"
              className="text-xl hover:text-gray-400 hover:animate-spin">
              <a href="/">register</a>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
