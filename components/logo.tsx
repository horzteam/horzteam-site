interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img src="/images/horzteam-logo.png" alt="HoRzTeam Logo" className={`${sizeClasses[size]} w-auto`} />
      {showText && (
        <span className={`font-bold ${size === "lg" ? "text-2xl" : size === "sm" ? "text-lg" : "text-xl"}`}>
          HoRzTeam
        </span>
      )}
    </div>
  )
}
