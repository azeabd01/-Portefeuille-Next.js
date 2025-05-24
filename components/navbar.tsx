"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Code2, Home, Mail, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: Code2, label: "Projects" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Abdelaali AZERGUI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <>
                  <div className="w-[240px] sm:w-[280px]">
                    <div className="flex flex-col gap-4 mt-6">
                      {navItems.map((item) => (
                        <Link
                          href={item.href}
                          key={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <Button
                            variant={isActive(item.href) ? "default" : "ghost"}
                            className="w-full justify-start"
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}