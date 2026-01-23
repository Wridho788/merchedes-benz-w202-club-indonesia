import type { Metadata } from "next";
import EventContent from "@/components/sections/EventContent";

export const metadata: Metadata = {
  title: "Event MBW202CI | Kegiatan & Acara Mercedes Benz W202 Club Indonesia",
  description:
    "Jadwal event, touring, kopdar, dan berbagai kegiatan Mercedes Benz W202 Club Indonesia. Ikuti event internal dan eksternal bersama komunitas pecinta W202.",
  keywords: [
    "Event MBW202CI",
    "Event W202 Club",
    "Touring Mercedes W202",
    "Kopdar W202",
    "Jambore Nasional MBW202CI",
    "Kegiatan Mercedes Club",
  ],
  openGraph: {
    title: "Event MBW202CI | Kegiatan & Acara Mercedes Benz W202 Club Indonesia",
    description:
      "Jadwal event, touring, kopdar, dan berbagai kegiatan Mercedes Benz W202 Club Indonesia",
    url: "https://mbw202clubindonesia.vercel.app/event",
    siteName: "Mercedes Benz W202 Club Indonesia",
    images: [
      {
        url: "/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Event Mercedes Benz W202 Club Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event MBW202CI | Kegiatan & Acara Mercedes Benz W202 Club Indonesia",
    description:
      "Jadwal event, touring, kopdar, dan berbagai kegiatan Mercedes Benz W202 Club Indonesia",
    images: ["/hero-1.jpg"],
  },
};

export default function EventPage() {
  return (
    <div className="page-wrapper">
      <EventContent />
    </div>
  );
}
