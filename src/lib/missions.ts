export type Tier = "Easy" | "Medium" | "Hard" | "Expert";
export type Pillar = "Physical" | "Mental" | "Social";

export interface Mission {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  points: number;
  pillar: Pillar;
  deadline: string;
  status?: "active" | "done" | "locked";
}

export const TIER_POINTS: Record<Tier, number> = {
  Easy: 5,
  Medium: 10,
  Hard: 20,
  Expert: 50,
};

export const tierColor = (t: Tier) =>
  ({
    Easy: "var(--tier-easy)",
    Medium: "var(--tier-medium)",
    Hard: "var(--tier-hard)",
    Expert: "var(--tier-expert)",
  })[t];

export const pillarColor = (p: Pillar) =>
  ({
    Physical: "var(--pillar-physical)",
    Mental: "var(--pillar-mental)",
    Social: "var(--pillar-social)",
  })[p];

export const missions: Mission[] = [
  {
    id: "hydrate-8",
    title: "Minum 8 gelas air hari ini",
    description:
      "Hidrasi adalah pondasi pemulihan stamina. Catat tiap gelas di aplikasi dan rasakan fokus kembali jernih.",
    tier: "Easy",
    points: 5,
    pillar: "Physical",
    deadline: "Berakhir 23:59 hari ini",
    status: "active",
  },
  {
    id: "old-friend",
    title: "Ajak ngobrol 1 teman lama",
    description:
      "Hubungi satu teman yang sudah lama tidak kamu sapa. Tanyakan kabar mereka dengan tulus selama minimal 10 menit.",
    tier: "Medium",
    points: 10,
    pillar: "Social",
    deadline: "Berakhir 8 jam lagi",
    status: "active",
  },
  {
    id: "sleep-11",
    title: "Tidur sebelum jam 11 malam",
    description:
      "Regenerasi sel tubuh mencapai puncaknya di malam hari. Matikan layar 30 menit sebelum tidur untuk hasil terbaik.",
    tier: "Hard",
    points: 20,
    pillar: "Physical",
    deadline: "Berakhir 22:45",
    status: "active",
  },
  {
    id: "meditate-10",
    title: "Meditasi tanpa gangguan 10 menit",
    description:
      "Luangkan 10 menit duduk tenang, tutup mata, fokus pada pernapasan. Matikan semua notifikasi sebelum memulai.",
    tier: "Expert",
    points: 50,
    pillar: "Mental",
    deadline: "Berakhir 14 jam lagi",
    status: "active",
  },
  {
    id: "morning-run",
    title: "Lari pagi 2 km sebelum jam 7",
    description:
      "Bangun lebih awal, gerakkan tubuh, dan biarkan udara pagi mengisi paru-parumu. Foto rute sebagai bukti.",
    tier: "Hard",
    points: 20,
    pillar: "Physical",
    deadline: "Berakhir besok 07:00",
    status: "locked",
  },
];

export const getMission = (id: string) => missions.find((m) => m.id === id);
