export interface EventItem {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  location: string
  time: string
  image?: string
}

export const eventData: EventItem[] = [
  {
    slug: 'gathering-monthly-feb-2026',
    title: 'Monthly Gathering Februari 2026',
    excerpt: 'Gathering rutin bulanan untuk sharing dan ngopi bareng sesama pecinta W202',
    content: `
      <p>Monthly Gathering MB W202 Club Indonesia kembali hadir di bulan Februari 2026. Acara ini merupakan agenda rutin yang diadakan setiap bulan untuk mempertemukan para anggota dalam suasana santai dan kekeluargaan.</p>
      
      <p>Agenda acara meliputi:</p>
      <ul>
        <li>Coffee morning dan breakfast bersama</li>
        <li>Technical sharing session</li>
        <li>Diskusi rencana acara besar di 2026</li>
        <li>Photo session dengan W202 kesayangan</li>
        <li>Lucky draw untuk peserta yang hadir</li>
      </ul>
      
      <p>Acara ini terbuka untuk seluruh anggota dan calon anggota yang tertarik untuk bergabung. Tidak ada biaya pendaftaran, cukup hadir tepat waktu dan bawa semangat untuk berbagi cerita seputar W202.</p>
      
      <p>Harap konfirmasi kehadiran melalui WhatsApp grup agar kami bisa mempersiapkan tempat dengan baik. See you there!</p>
    `,
    date: '2026-02-15',
    location: 'Plaza Indonesia Parking Area',
    time: '08:00 - 12:00 WIB',
  },
  {
    slug: 'touring-bali-2026',
    title: 'Touring Bali 2026: Island Paradise Drive',
    excerpt: 'Touring spesial ke Pulau Dewata bersama W202, nikmati keindahan Bali dengan style',
    content: `
      <p>MB W202 Club Indonesia dengan bangga mempersembahkan event spesial: Touring Bali 2026! Ini adalah kesempatan langka untuk menjelajahi keindahan Pulau Dewata bersama komunitas W202 terbesar di Indonesia.</p>
      
      <h2>Itinerary</h2>
      <p><strong>Hari 1:</strong></p>
      <ul>
        <li>Keberangkatan dari Jakarta via cargo</li>
        <li>Meeting point di Bali: Garuda Wisnu Kencana</li>
        <li>Check-in hotel dan istirahat</li>
        <li>Welcome dinner di Jimbaran Beach</li>
      </ul>
      
      <p><strong>Hari 2:</strong></p>
      <ul>
        <li>Touring ke Ubud (Tegalalang Rice Terrace, Monkey Forest)</li>
        <li>Lunch di Ubud</li>
        <li>Visit Tanah Lot untuk sunset</li>
        <li>Dinner bersama</li>
      </ul>
      
      <p><strong>Hari 3:</strong></p>
      <ul>
        <li>Sunrise di Sanur Beach</li>
        <li>Explore Nusa Dua area</li>
        <li>Farewell lunch</li>
        <li>Persiapan kepulangan</li>
      </ul>
      
      <h2>Investasi</h2>
      <p>Paket all-inclusive sudah termasuk akomodasi hotel bintang 4, meals, dokumentasi profesional, dan tour guide. Harga spesial untuk anggota: IDR 5.500.000/orang (2 orang per kamar).</p>
      
      <p>Kuota terbatas hanya 20 mobil! Daftarkan diri Anda segera.</p>
    `,
    date: '2026-03-20',
    location: 'Bali, Indonesia',
    time: '3 Hari 2 Malam',
  },
  {
    slug: 'charity-drive-2026',
    title: 'Charity Drive: Berbagi untuk Sesama',
    excerpt: 'Konvoi amal untuk berbagi kebahagiaan dengan anak-anak di panti asuhan',
    content: `
      <p>MB W202 Club Indonesia percaya bahwa berkendara bukan hanya tentang passion, tetapi juga tentang memberikan dampak positif kepada masyarakat. Oleh karena itu, kami mengadakan Charity Drive 2026.</p>
      
      <h2>Tujuan</h2>
      <p>Acara ini bertujuan untuk memberikan bantuan dan berbagi kebahagiaan dengan anak-anak di Panti Asuhan Kasih Bunda, Depok. Kami akan mengumpulkan donasi berupa:</p>
      <ul>
        <li>Alat tulis dan buku pelajaran</li>
        <li>Pakaian layak pakai</li>
        <li>Mainan edukatif</li>
        <li>Kebutuhan pokok</li>
      </ul>
      
      <h2>Rundown Acara</h2>
      <ul>
        <li>07:00 - Meeting point di Rest Area KM 47</li>
        <li>08:00 - Departure menuju Depok</li>
        <li>09:30 - Tiba di panti asuhan</li>
        <li>10:00 - Serah terima bantuan dan games bersama anak-anak</li>
        <li>12:00 - Makan siang bersama</li>
        <li>14:00 - Penutupan dan photo session</li>
        <li>15:00 - Kembali ke Jakarta</li>
      </ul>
      
      <p>Mari bergabung dan menjadi bagian dari kebaikan ini. Kontribusi terkecil Anda sangat berarti bagi mereka.</p>
    `,
    date: '2026-04-05',
    location: 'Panti Asuhan Kasih Bunda, Depok',
    time: '07:00 - 16:00 WIB',
  },
]
