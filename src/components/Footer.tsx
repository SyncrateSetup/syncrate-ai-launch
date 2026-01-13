import syncrateLogo from "@/assets/syncrate-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={syncrateLogo} alt="Syncrate" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-semibold text-lg text-foreground">Syncrate</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Inteligência aplicada ao atendimento.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syncrate. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
