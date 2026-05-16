import { Link } from "@tanstack/react-router";
import { Lock, ChevronRight } from "lucide-react";
import { type Mission, tierColor } from "@/lib/missions";

export function MissionCard({ m }: { m: Mission }) {
  const locked = m.status === "locked";
  const color = tierColor(m.tier);

  const inner = (
    <div
      className={`relative panel rounded-xl pl-4 pr-3 py-4 flex items-start gap-3 transition-all ${
        locked ? "opacity-60" : "hover:translate-x-0.5"
      } ${m.tier === "Expert" && !locked ? "animate-glow" : ""}`}
    >
      <span
        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
      <div className="flex-1 min-w-0 pl-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
            style={{ color, background: `color-mix(in oklab, ${color} 14%, transparent)` }}
          >
            {m.tier}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground">+{m.points} PTS</span>
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70 ml-auto">
            {m.pillar}
          </span>
        </div>
        <h3 className="text-sm font-semibold leading-tight text-balance">{m.title}</h3>
        <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">{m.deadline}</p>
      </div>
      <div className="self-center">
        {locked ? (
          <div className="size-9 rounded-lg bg-surface-2 grid place-items-center border border-border">
            <Lock className="size-4 text-muted-foreground" />
          </div>
        ) : (
          <div className="size-9 rounded-lg bg-surface-2 grid place-items-center border border-border text-primary">
            <ChevronRight className="size-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (locked) return inner;
  return (
    <Link to="/missions/$id" params={{ id: m.id }} className="block">
      {inner}
    </Link>
  );
}
