"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  CameraIcon,
  FilePen,
  HomeIcon,
  InfoIcon,
  MapPinIcon,
  Menu,
  PhoneIcon,
  X,
} from "lucide-react";
import { scrollToElement } from "@/lib/utils";
import { useState } from "react";
import { FlowerLotusIcon } from "@phosphor-icons/react";

export const navItems = [
  { label: "Trang chủ", href: "/", icon: <HomeIcon className="size-5" /> },
  { label: "Bài viết", href: "/bai-viet", icon: <FilePen className="size-5" /> },
  { label: "Thư viện", href: "/thu-vien", icon: <BookOpenIcon className="size-5" /> },
  
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FlowerLotusIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Không Gian Văn Hoá HCM</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            {/* <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href="/auth/login">Book Now</Link>
            </Button> */}
          </div>
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`${item.href}`}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                >
                  {item.label}
                </Link>
              ))}
              {/* <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                asChild
              >
                <Link href="/auth/login">Book Now</Link>
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
