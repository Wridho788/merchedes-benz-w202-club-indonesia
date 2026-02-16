"use client";

import Link from "next/link";
import { useChapterById } from "@/lib/hooks/useChapterById";
import { CHAPTER_ID } from "@/lib/constants/api";

function formatPhoneForWhatsApp(phone?: string) {
  if (!phone) return "";
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("8")) return `62${digits}`;
  return digits;
}

export default function HomeCTA() {
  const { data: chapterData } = useChapterById(CHAPTER_ID);
  const phoneRaw = chapterData?.content?.result?.phone;
  const email = chapterData?.content?.result?.email || "info@w202clubindonesia.org";
  const phone = formatPhoneForWhatsApp(phoneRaw);

  const waHref = phone ? `https://wa.me/${phone}` : "#";

  return (
    <section className="py-16 bg-brand-dark border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">
              Bergabung dengan W202 Club Indonesia
            </h2>
            <p className="text-gray-300">
              Jadilah bagian dari komunitas pecinta Mercedes-Benz W202 terbesar
              di Indonesia.
            </p>
            <div className="mt-3 text-gray-300 text-sm">
              {email && <div>Email: <a href={`mailto:${email}`} className="underline">{email}</a></div>}
              {phoneRaw && <div>Phone: <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline">{phoneRaw}</a></div>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/member"
              className="px-6 py-3 bg-brand-accent text-white font-sans font-medium rounded hover:bg-opacity-90 transition duration-300 text-center min-w-[150px]"
            >
              Daftar Sekarang
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white text-white font-sans font-medium rounded hover:bg-white hover:text-brand-primary transition duration-300 text-center min-w-[150px]"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
