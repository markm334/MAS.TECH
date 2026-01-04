import masLogo from "@/assets/mas-logo-new.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light" | "compact";
}

const Logo = ({ className = "h-12", showText = true, variant = "default" }: LogoProps) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const subtextColor = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground";
  
  return (
    <div className="flex items-center gap-3">
      <img 
        src={masLogo} 
        alt="MAS Healthcare Technology Logo" 
        className={`${className} object-contain`}
      />
      {showText && variant !== "compact" && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-xl ${textColor} leading-tight tracking-wide`}>
            MAS
          </span>
          <span className={`text-[9px] ${subtextColor} leading-tight tracking-widest uppercase`}>
            Healthcare Technology
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
