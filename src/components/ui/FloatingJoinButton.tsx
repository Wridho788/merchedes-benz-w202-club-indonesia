"use client";

import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

export default function FloatingJoinButton() {
  return (
    <div className="fixed right-4 bottom-24 z-50">
      <Link
        href="/register"
        aria-label="Bergabung dengan kami"
        className="flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:from-brand-primary/90 hover:to-brand-primary text-white px-4 py-3 rounded-full shadow-2xl transition transform hover:-translate-y-0.5"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
          <FaUserPlus className="w-5 h-5 text-white" />
        </span>
        <span className="mr-2 text-sm sm:text-base font-semibold">Bergabung</span>
      </Link>
    </div>
  );
}
