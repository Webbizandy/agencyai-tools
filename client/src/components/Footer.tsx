import { APP_TITLE } from "@/const";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">{APP_TITLE}</h3>
            <p className="text-sm text-muted-foreground">
              Curated AI tools for agencies and marketers. No fluff. Just tools that work.
            </p>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Browse All Tools
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/submit">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Submit a Tool
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/40 space-y-3">
          <p className="text-sm text-muted-foreground text-center">
            To keep our site free, we may receive compensation when you click some links on our site.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {APP_TITLE}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
