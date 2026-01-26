"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useEventById } from "@/lib/hooks/useEvent";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.slug as string;

  const { data, isLoading, error } = useEventById(eventId);
  const event = data?.content;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <Section>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-32 mb-8" />
                <div className="h-10 bg-gray-300 rounded w-3/4 mb-6" />
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="h-16 bg-gray-300 rounded" />
                  <div className="h-16 bg-gray-300 rounded" />
                  <div className="h-16 bg-gray-300 rounded" />
                </div>
                <div className="aspect-video bg-gray-300 rounded mb-8" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="page-wrapper">
        <Section>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-gray-700 mb-2">
                Event Tidak Ditemukan
              </h1>
              <p className="text-gray-500 mb-6">
                Event yang Anda cari tidak tersedia atau telah dihapus.
              </p>
              <Link
                href="/event"
                className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition"
              >
                ← Kembali ke Event
              </Link>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/event"
              className="inline-flex items-center text-sm text-brand-gray hover:text-brand-dark transition-colors mb-8"
            >
              ← Kembali ke Event
            </Link>

            <article>
              <header className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                      event.done === 0
                        ? "bg-green-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {event.done_desc}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                      event.type === 1
                        ? "bg-gray-600 text-white"
                        : "bg-brand-accent text-white"
                    }`}
                  >
                    {event.type_desc}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading uppercase tracking-wide text-brand-dark mb-6">
                  {event.name}
                </h1>

                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>📅</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Tanggal
                      </div>
                      <div>{event.dates}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>⏰</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Waktu
                      </div>
                      <div>{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>👥</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Min. Peserta
                      </div>
                      <div>{event.minimum_participants} orang</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>💰</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Biaya
                      </div>
                      <div className="font-semibold text-brand-primary">
                        {event.fee > 0 ? formatCurrency(event.fee) : "Gratis"}
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {event.image && (
                <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                    unoptimized={event.image.startsWith("http")}
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Deskripsi Event
                </h3>
                <p className="text-gray-600 whitespace-pre-wrap">{event.desc}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">
                  Informasi Tambahan
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Chapter</span>
                    <span className="font-medium">{event.chapter}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Kode Event</span>
                    <span className="font-medium">{event.code}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Tipe Event</span>
                    <span className="font-medium">{event.type_desc}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium">{event.done_desc}</span>
                  </div>
                </div>
              </div>

              {event.done === 0 && (
                <div className="border-t border-border pt-8 text-center">
                  <h3 className="font-heading text-xl uppercase tracking-wide mb-4">
                    Tertarik Mengikuti Event Ini?
                  </h3>
                  <Button variant="primary" size="lg" href="/contact">
                    Hubungi Kami
                  </Button>
                </div>
              )}
            </article>
          </div>
        </div>
      </Section>
    </div>
  );
}
