import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import syncrateLogo from "@/assets/syncrate-logo.jpg";

const WHATSAPP_URL = "https://wa.me/5519992346425?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20automa%C3%A7%C3%B5es%21";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#plans", label: "Planos" },
    { href: "#workflows", label: "Soluções" },
    { href: "#demo", label: "Demo" },
    { href: WHATSAPP_URL, label: "Contato", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={syncrateLogo} alt="Syncrate" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-semibold text-lg text-foreground">Syncrate</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-2" onClick={handleWhatsApp}>
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
