import { Button } from "@/components/ui/button";
import { APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Top 10", href: "/top-10" },
    { name: "Tools", href: "/tools" },
    { name: "Comparisons", href: "/comparisons" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Resources", href: "/prompts-to-profits" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
            {APP_TITLE}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/subscribe">
            <Button variant="default" size="sm">
              Get Weekly AI Updates
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`block text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/subscribe">
              <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Weekly AI Updates
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
