"use client";

import { useEffect, useState } from "react";
import { useChapterById } from "@/lib/hooks/useChapterById";
import { CHAPTER_ID } from "@/lib/constants/api";

function formatPhoneForWhatsApp(phone?: string) {
  if (!phone) return "";
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("8")) return `62${digits}`;
  return digits;
}

export default function FloatingWhatsApp({ className = "" }: { className?: string }) {
  const { data: chapterData } = useChapterById(CHAPTER_ID);
  const phoneRaw = chapterData?.content?.result?.phone;
  const phone = formatPhoneForWhatsApp(phoneRaw);
  const href = phone ? `https://wa.me/${phone}` : "#";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`fixed right-4 bottom-6 z-50 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 15a2 2 0 0 1-2 2h-1l-1 1-1-1H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8l4 4v6z"></path>
          <path d="M16 11.37a4 4 0 1 1-2.63-2.63"></path>
        </svg>
        <span className="hidden sm:inline-block font-medium">Hubungi via WhatsApp</span>
      </a>
    </div>
  );
}
