import { Link, useLocation } from "@tanstack/react-router";
import { Home, Swords, Trophy, User } from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/missions", label: "Misi", icon: Swords },
  { to: "/leaderboard", label: "Peringkat", icon: Trophy },
  { to: "/profile", label: "Avatar", icon: User },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[440px]">
      <div className="mx-3 mb-3 panel rounded-2xl px-2 py-2 flex items-center justify-between">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || (to !== "/" && pathname.startsWith(to));
          return (
            <Link
              key={to}
              to={to}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`size-5 ${active ? "drop-shadow-[0_0_6px_var(--primary)]" : ""}`} />
              <span className="text-[10px] font-mono uppercase tracking-wider">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
