export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950",

    secondary:
      "border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400",

    dark:
      "bg-slate-800 hover:bg-slate-700 text-white",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}