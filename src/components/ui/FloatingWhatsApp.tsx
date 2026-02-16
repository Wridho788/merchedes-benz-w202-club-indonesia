"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
        className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-full shadow-2xl transition transform hover:-translate-y-0.5"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
          <FaWhatsapp className="w-5 h-5 text-white" />
        </span>
        <span className="ml-1 text-sm sm:text-base font-semibold">Live Chat</span>
      </a>
    </div>
  );
}
