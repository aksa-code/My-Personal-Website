export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string[]; // <--- UBAH INI (tambahkan [])
  image: string;
  gallery?: string[];
  link: string;
  github?: string;
  
  // ... field lainnya tetap sama
  description?: string;
  features?: string[];
  challenge?: string;
  techStack?: string[];
  role?: string;
  year?: string;
}

export interface HeroData {
  status: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  socials: { name: string; url: string }[];
}

export const portfolioData: { hero: HeroData; projects: Project[] } = {

  hero: {
    status: "Open for Freelance",
    name: "Danadyaksa Morello Hisyam Prayata",
    title: "Crafting Visuals",
    subtitle: "That Tell Stories",
    desc: "Seorang Graphic Designer dengan pengalaman lebih dari dua tahun dalam bidang desain visual. Terampil menggunakan Figma serta memiliki pemahaman dasar terhadap Adobe Illustrator, After Effects, dan DaVinci Resolve. Berfokus pada pembuatan konten visual yang menarik untuk kebutuhan media sosial dan proyek branding, serta terbiasa bekerja secara kolaboratif dalam berbagai proyek kreatif.",
    socials: [
      { name: "GitHub", url: "https://github.com/aksa-code" },
      { name: "Instagram", url: "https://www.instagram.com/danady_aksaa/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/danadyaksa-morello/" },
      { name: "Behance", url: "https://www.behance.net/danadyamorello" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "BacaYuk: Smart Online Reading UI Design.",
      subtitle: "Membangun kebiasaan literasi yang konsisten dan sehat di era digital.",
      category: ["UI Design"], 
      
      image: "/images/Cover/Baca Yuk.png",
      link: "https://www.canva.com/design/DAG_P9mhKIQ/uC2A09XiWwiRJz-_vX5qJA/edit?utm_content=DAG_P9mhKIQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      github: "", 
      gallery: [
        "/images/Gallery/BacaYuk/BacaYuk - 1.png",
        "/images/Gallery/BacaYuk/BacaYuk - 2.png",
        "/images/Gallery/BacaYuk/BacaYuk - 3.png",
        "/images/Gallery/BacaYuk/BacaYuk - 4.png",
        "/images/Gallery/BacaYuk/BacaYuk - 5.png"
      ],
      role: "Hipster (UI/UX Designer)",
      year: "Juni 2025",
      techStack: ["Figma", "Canva"],
      description: "Perancangan desain UI/UX aplikasi literasi digital dengan pendekatan gamifikasi untuk membangun kebiasaan membaca yang konsisten dan sehat.",
      features: [
        "Daily Streak: Target baca harian dengan sistem gamifikasi agar pengguna konsisten.",
        "Eye Protection: Fitur pengingat istirahat & batas durasi demi kesehatan mata.",
        "Reading Analytics: Visualisasi grafik untuk memantau progres durasi membaca.",
        "Digital Library: Sistem pencarian dan pengelolaan koleksi buku yang praktis."
      ],
      challenge: "Manajemen waktu dan fokus ganda; menyelesaikan pengembangan produk tim di tengah tanggung jawab mendesak sebagai panitia divisi desain untuk acara puncak (Demo Day)."
    },
    {
      id: 2,
      title: "BerUang: Building Consistent Saving Habits",
      subtitle: "Kelola keuangan lebih cerdas dan bangun kebiasaan menabung sejak dini.",
      category: ["UI Design"], 
      
      image: "/images/Cover/BerUang.png",
      link: "https://www.figma.com/design/KQwNFpSOiRxAvhkOvuPYj0/BerUang-App?node-id=350-5976&t=wO0PgC2OQGW53kM9-1",
      github: "", 
      gallery: ["/images/Gallery/BerUang/BerUang - 1.png",
        "/images/Gallery/BerUang/BerUang - 2.png",
        "/images/Gallery/BerUang/BerUang - 3.png",
        "/images/Gallery/BerUang/BerUang - 4.png",
        "/images/Gallery/BerUang/BerUang - 5.png"],
      role: "Hipster (UI/UX Designer)",
      year: "Agustus 2025",
      techStack: ["Figma"],
      description: "Perancangan UI aplikasi manajemen keuangan dengan pendekatan gamifikasi untuk membangun kebiasaan menabung yang konsisten dan menyenangkan.",
      features: [
        "Daily Streak: Gamifikasi harian untuk menjaga konsistensi menabung.",
        "Saving Challenges: Tantangan interaktif untuk mengurangi pengeluaran impulsif.",
        "Smart Goals: Visualisasi target tabungan untuk kebutuhan masa depan.",
        "Expense Tracker: Monitoring arus kas untuk meminimalkan pengeluaran tak perlu."
      ],
      challenge: "Menciptakan pengalaman pengguna (UX) yang mengubah persepsi pengelolaan keuangan yang rumit dan membosankan menjadi aktivitas yang ringan, adiktif, dan mudah dipahami."
    },
    {
      id: 3,
      title: "Dies Natalis Ke-32: Lets Innovate",
      subtitle: "Celebration of 32 years of innovation and creativity.",
      role: "Visual Designer & Audio Operator",
      category: ["Event Branding", "Motion Design", "Audio Production"],
      image: "/images/Cover/DiesNat.png",
      link: "https://drive.google.com/drive/folders/1TZ4z2Whseqd4-hSwZOr-i-cawQ8kBy-w?usp=sharing", 
      gallery: [
        "/images/Gallery/Diesnat/Diesnat - 1.png",
        "/images/Gallery/Diesnat/Diesnat - 2.png",
        "/images/Gallery/Diesnat/Diesnat - 3.png",
        "/images/Gallery/Diesnat/Diesnat - 4.png",
      ],
      year: "Oktober 2024",
      techStack: ["Adobe Illustrator", "After Effects", "vMix / Spotify for Artists"],
      description: "Berkontribusi dalam perayaan ulang tahun ke-32 SMK Telkom Malang melalui peran ganda: sebagai desainer visual pada masa pra-acara dan operator audio di Front of House (FOH) pada hari puncak. \n\nSaya bertanggung jawab menciptakan identitas visual seperti design pengumuman Mystery Guest Star, serta memastikan audio tetap terjaga selama acara berlangsung",
      features: [
        "Stage Backdrop: Desain visual untuk background kegiatan sebagian acara di panggung",
        "Guest Star Reveal: Aset desain untuk pengumuman 'Mystery Guest Star' yang membangun antusiasme peserta.",
        "Motion Graphics: Membuat animasi backdrop untuk suatu band guru yang tampil dipanggung menggunakan After Effects.",
        "Audio Management (FOH): Mengelola urutan putar audio dan bgm agar sinkron dengan rundown panggung."
      ],
      challenge: "Tantangan terbesar adalah kurva pembelajaran yang tajam; ini merupakan pertama kalinya saya menggunakan Adobe Illustrator untuk aset cetak skala besar dan After Effects untuk animasi panggung. \n\nSelain itu, transisi peran dari desainer menjadi operator audio di FOH menuntut ketelitian tinggi dalam sinkronisasi waktu antara visual yang tampil di layar dan audio yang didengar audiens walaupun masih ada beberapa yang miss namun saya masih belajar."
    },
    {
      id: 4,
      title: "MoBi: Moklet Bilingual Week 2024",
      subtitle: "Kegiatan tahun Ke-dua Bulan Bahasa Inggris di SMK Telkom Malang dengan tema karnaval dan maskot 'Mobi'.",
      category: ["Visual Branding"], 
      image: "/images/Cover/Mobi.png", 
      link: "https://www.instagram.com/stories/highlights/17870365740253517/", 
      gallery: [
        "/images/Gallery/Mobi/Mobi - 1.png",
        "/images/Gallery/Mobi/Mobi - 2.png",
        "/images/Gallery/Mobi/Mobi - 3.png",
        "/images/Gallery/Mobi/Mobi - 4.png",
        "/images/Gallery/Mobi/Mobi - 5.png",
        "/images/Gallery/Mobi/Mobi - 6.png",
        "/images/Gallery/Mobi/Mobi - 7.png"
      ],
      role: "Design Team Member",
      year: "Desember 2024",
      techStack: ["Figma"],
      description: "Berkontribusi dalam tim desain untuk 'Moklet Bilingual Week', acara tahunan Bulan Bahasa Inggris yang diselenggarakan oleh English Language Prefect. Dengan mengusung tema karnaval dan maskot 'Mobi', tugas utama saya adalah memastikan seluruh materi visual tampil kohesif dan sesuai dengan arahan branding yang telah ditentukan.",
      features: [
        "Mascot Integration: Mengaplikasikan maskot 'Mobi' ke dalam berbagai media promosi.",
        "Merchandise Design: Menyusun desain untuk kaos acara, lanyard, dan pernak-pernik merchandise lainnya.",
        "Event Collaterals: Membuat bingkai photobooth dan aset visual pendukung suasana karnaval.",
        "Digital Presence: Mendesain konten feed Instagram sebagai media informasi utama peserta."
      ],
      challenge: "Tantangan dalam proyek ini adalah manajemen tugas terhadap permintaan desain tambahan yang sering kali muncul secara mendadak. Hal ini menuntut tim untuk tetap menjaga fokus dan konsistensi kualitas desain di tengah jadwal produksi yang padat. Selain itu, hasil design feed IG yang telah saya buat belum sepenuhnya terpublish oleh tim Sosmed"
    },
    {
      id: 5,
      title: "Demo Day MGIP: Innovation Showcase",
      subtitle: "Dukungan visual untuk rangkaian acara puncak MGIP di Malang Creative Center.",
      category: ["Visual Branding"], 
      image: "/images/Cover/DemoDay.png", 
      link: "https://www.instagram.com/p/DKXPiOzz1i5/", 
      gallery: [
        "/images/Gallery/DemoDay/DemoDay - 1.png",
        "/images/Gallery/DemoDay/DemoDay - 2.png",
        "/images/Gallery/DemoDay/DemoDay - 3.png",
      ],
      role: "Design & Konten Team Member",
      year: "Juni 2025",
      techStack: ["Figma"],
      description: "Terpilih menjadi bagian dari tim desain dan konten untuk 'Demo Day', sebuah acara pameran inovasi berskala sekolah di Malang Creative Center (MCC). Program ini menghadirkan guest star seperti Idgitaf, Arumi Bachsin, dan Anjas Maradita. \n\nPenugasan ini diberikan langsung oleh guru saat saya tengah mengembangkan proyek 'BacaYuk', mengajak saya untuk berkontribusi dalam pembuatan materi visual pendukung mulai dari publikasi digital hingga media fisik.",
      features: [
        "Event Collaterals: Mendesain photobooth banner fisik di MCC.",
        "Digital Visual Design: Membuat design frame untuk video yang berisikan inovasi peserta.",
        "Dresscode Design: Membuat desain kaos resmi untuk panitia dan peserta acara.",
        "Team Coordination: Berkolaborasi aktif guna memastikan seluruh aset selesai tepat waktu sebelum hari-H."
      ],
      challenge: "Tantangan utama dalam proyek ini adalah manajemen waktu yang sangat intens, di mana saya harus menangani tiga rangkaian acara dalam dua hari berturut-turut. \n\nSelain itu, proyek ini memberikan pelajaran berharga mengenai dinamika produksi di lapangan, di mana terjadi beberapa penyesuaian teknis yang menyebabkan tidak semua aset desain dapat terimplementasi sesuai rencana awal."
    },
    {
      id: 6,
      title: "MPLS 34: Generation 2025 'BISA'",
      subtitle: "Menggunakan lebah sebagi simbol dan konsep kegiatan dengan tema 'BISA' Bravery, Integrity, Service Excellence, Agility.",
      category: ["Visual Branding", "Team Management"], 
      image: "/images/Cover/MPLS.png",
      link: "https://www.instagram.com/stories/highlights/18080353453956553/", 
      gallery: [
        "/images/Gallery/MPLS/MPLS - 1.png",
        "/images/Gallery/MPLS/MPLS - 2.png",
        "/images/Gallery/MPLS/MPLS - 3.png",
      ],
      role: "Lead Design Team",
      year: "Juli 2025",
      techStack: ["Figma", "Adobe Illustrator", "After Effects"],
      description: "Sebagai Lead Design Team untuk MPLS Angkatan 34, fokus utama saya adalah manajemen alur kerja dan optimalisasi potensi tim. Saya bertanggung jawab dalam membagi tanggung jawab desain berdasarkan spesialisasi masing-masing anggota serta memastikan standarisasi kualitas pada seluruh aset visual, baik cetak maupun digital.",
      features: [
        "Team Coordination: Mendelegasikan jobdesk desain secara efisien untuk memaksimalkan kinerja tim.",
        "Visual Expansion: Mengembangkan berbagai aset mulai dari poster, spanduk besar, hingga konten media sosial.",
        "Hybrid Workflow: Sinkronisasi desain antara Figma untuk layout, Illustrator untuk aset cetak, dan After Effects untuk elemen gerak.",
        "Quality Control: Memantau dan mengarahkan revisi desain agar sesuai dengan identitas angkatan 34."
      ],
      challenge: "Tantangan muncul ketika konsep awal dirasa terlalu satu dimensi (single POV). Kami memutuskan untuk mengevaluasi ulang arah kreatif di tengah proses, menambahkan sudut pandang visual baru agar hasil desain lebih menarik, dinamis, dan tidak terlihat monoton bagi audiens siswa baru."
    },
    {
      id: 7,
      title: "Mokleters Wikusama: Creative Team Member",
      subtitle: "Membangun identitas visual supporter untuk kompetisi DBL.",
      category: ["Visual Branding"], 
      image: "/images/Cover/Mokleters.png", 
      link: "https://www.instagram.com/mokleters/", 
      gallery: [
        "/images/Gallery/Mokleters/Mokleters - 1.png",
        "/images/Gallery/Mokleters/Mokleters - 2.png",
        "/images/Gallery/Mokleters/Mokleters - 3.png",
        "/images/Gallery/Mokleters/Mokleters - 4.png",
        "/images/Gallery/Mokleters/Mokleters - 5.png",
        "/images/Gallery/Mokleters/Mokleters - 6.png",
        "/images/Gallery/Mokleters/Mokleters - 7.png"
      ],
      role: "Design Team Member",
      year: "2024 - 2025",
      techStack: ["Figma", "Adobe Illustrator"],
      description: "Bergabung dalam komunitas supporter Mokleters Wikusama sejak 2024, saya bertanggung jawab dalam mengelola kebutuhan visual untuk mendukung sekolah di ajang DBL. \n\nPeran saya berevolusi dari pembuatan flyer dan twibbon pada tahun pertama, menjadi tanggung jawab yang lebih luas di tahun 2025, termasuk desain jersey resmi, aset media sosial, hingga pengembangan mockup merchandise komunitas.",
      features: [
        "Jersey & Merchandise: Merancang identitas visual untuk jersey supporter dan berbagai merchandise resmi komunitas.",
        "Social Media Management: Membuat konten feed Instagram dan twibbon untuk menggalang dukungan massa.",
        "Digital & Print Assets: Menyusun flyer promosi dan materi publikasi acara supporteran.",
        "Brand Evolution: Menjaga konsistensi gaya desain komunitas dari tahun ke tahun agar tetap relevan dan menarik."
      ],
      challenge: "Tantangan utama adalah saat menyadari bahwa seluruh aset visual komunitas merupakan bagian dari kriteria penilaian resmi tim DBL. Hal ini menuntut kami untuk lebih teliti dalam setiap detail desain guna memastikan kualitas profesional yang dapat mendukung poin penilaian sekolah secara keseluruhan."
    },
    {
      id: 8,
      title: "IRC Moklet: Logo Visual Identity",
      subtitle: "Perancangan identitas visual untuk sub-organisasi IRC sekolah.",
      category: ["Logo Design"], 
      image: "/images/Cover/IRC.png", 
      link: "https://www.instagram.com/irc_moklet/", 
      gallery: [
        "/images/Gallery/IRC/IRC - 1.png",
        "/images/Gallery/IRC/IRC - 2.png",
        "/images/Gallery/IRC/IRC - 3.png",
        "/images/Gallery/IRC/IRC - 4.png"
      ],
      role: "Logo Designer",
      year: "Oktober 2025",
      techStack: ["Adobe Illustrator", "Figma"],
      description: "Proyek ini merupakan inisiasi untuk menciptakan identitas visual resmi bagi sub-organisasi IRC di SMK Telkom Malang. Sebagai desainer, saya bertanggung jawab menerjemahkan nilai kemanusiaan dan karakter sekolah ke dalam sebuah simbol yang akan digunakan secara permanen oleh organisasi.",
      features: [
        "Logo Construction: Eksperimen pertama dalam membangun bentuk logo yang presisi secara teknis.",
        "Visual Philosophy: Penentuan makna dibalik elemen visual agar sejalan dengan visi PMR.",
        "Brand Guidelines: Menyusun aturan penggunaan logo untuk berbagai kebutuhan atribut organisasi.",
        "Identity Implementation: Penerapan logo pada mockup seragam dan kartu tanda anggota."
      ],
      challenge: "Ini merupakan pertama kalinya saya menangani proses pembuatan logo secara formal dan menyeluruh. Tantangan utamanya adalah mempelajari pakem aturan standar dari Palang Merah Indonesia (PMI) agar tetap sinkron, sembari berusaha menyisipkan elemen unik yang menjadi ciri khas identitas siswa SMK Telkom Malang."
    },
    {
      id: 9,
      title: "Explore Bromo: Your Ultimate Adventure Guide",
      subtitle: "Interactive Tourism Platform",
      category: ["Web Dev", "UI Design"], 
      image: "/images/Cover/Bromo.png",
      link: "https://www.figma.com/design/kGVo3mRWog4YL0t3Ap65Ls/Bromo-Trip?node-id=0-1&t=KVhs6s7d8QBvDImz-1", 
      gallery: [
        "/images/Gallery/Bromo/Bromo - 1.png",
        "/images/Gallery/Bromo/Bromo - 2.png",
        "/images/Gallery/Bromo/Bromo - 3.png",
        "/images/Gallery/Bromo/Bromo - 4.png"
      ],
      role: "Frontend Developer",
      year: "Desember 2025",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Leaflet Maps"],
      description: "Platform pariwisata digital yang dirancang untuk memperkenalkan keindahan Taman Nasional Bromo Tengger Semeru. Website ini berfungsi sebagai panduan lengkap bagi wisatawan, mulai dari informasi rute, booking jeep online, hingga virtual tour sederhana.\n\nDesain difokuskan pada penggunaan tipografi yang bersih dan layout gambar yang immersive untuk menonjolkan keindahan alam Bromo.",
      features: [
        "Interactive Map: Peta titik wisata & spot sunrise.",
        "Jeep Booking System: Formulir pemesanan terintegrasi.",
        "Weather Widget: Info cuaca real-time di area pegunungan.",
        "Multi-language Support (ID/EN)."
      ],
      challenge: "Tantangan terbesar adalah mengoptimalkan performa website (Core Web Vitals) yang memuat banyak aset gambar resolusi tinggi, agar tetap cepat diakses oleh wisatawan yang mungkin memiliki koneksi internet terbatas di area pegunungan."
    },
    // {
    //   id: 10, 
    //   title: "Saraya: Memayu Hayuning Rubedo",
    //   subtitle: "Kegiatan bulan bahasa tahunan di SMK Telkom Malang yang kali ini mengusung tema 'Saraya: Memayu Hayuning Rubedo'.",
    //   category: ["Visual Branding"], 
    //   image: "/images/Cover/Saraya.png", 
    //   link: "", 
    //   gallery: [
    //     "/images/Gallery/Saraya/logo-breakdown.png",
    //     "/images/Gallery/Saraya/social-media-feed.png",
    //     "/images/Gallery/Saraya/twibbon-preview.png",
    //     "/images/Gallery/Saraya/team-documentation.png" 
    //   ],
    //   role: "Lead Design Team",
    //   year: "2024",
    //   techStack: ["Figma"],
    //   description: "Dipercaya sebagai Ketua Divisi Desain untuk 'Saraya' (Tema Bulan Bahasa tahun ini). Saya bertanggung jawab penuh atas arahan kreatif dan manajemen tim desain.\n\nFokus utama proyek ini adalah menciptakan identitas visual yang kuat dan kohesif menggunakan Figma, mulai dari logo hingga aset kampanye digital, sembari memastikan seluruh anggota tim bekerja dengan standar kualitas dan timeline yang sama.",
    //   features: [
    //     "Visual Identity System: Mengembangkan Logo 'Saraya' dan panduan penggunaan warna/tipografi.",
    //     "Social Media Campaign: Mendesain Feeds, Instagram Stories, dan Twibbon untuk publikasi acara.",
    //     "Team Management: Mengarahkan alur kerja (workflow) tim dan melakukan Quality Control (QC) setiap aset.",
    //     "Print & Digital Assets: Poster promosi, banner, dan kebutuhan dekorasi visual acara."
    //   ],
    //   challenge: "Tantangan terbesar bukanlah pada teknis desain, melainkan pada **Leadership & Mentorship**. \n\nMayoritas anggota tim adalah rekan baru (calon pengurus OSIS), sehingga saya harus membangun *chemistry* tim dari nol, mengajarkan standar kerja kolaboratif di Figma, dan membimbing mereka agar tetap percaya diri dalam berkarya meski di bawah tekanan deadline acara."
    // },
    // {
    //   id: 11, 
    //   title: "Pupuk Smart: Modern Farming Ecosystems",
    //   subtitle: "Inventory & Warehouse Management",
    //   category: ["Web Dev", "Fullstack"],
    //   image: "/images/Projects/pupuk-cover.jpg",
    //   link: "#", 
    //   gallery: [
    //     "/images/Projects/pupuk-1.jpg",
    //     "/images/Projects/pupuk-2.jpg"
    //   ],
    //   role: "Fullstack Developer",
    //   year: "2024",
    //   techStack: ["Laravel", "MySQL", "Bootstrap/Tailwind"], 
    //   description: "Sistem manajemen stok dan distribusi pupuk berbasis web yang dirancang untuk kompetisi. Fokus utama aplikasi ini adalah pengelompokan gudang berdasarkan jenis produk untuk menjaga kualitas pupuk.\n\nSistem mengatur logika penyimpanan spesifik, misalnya Gudang A dikhususkan untuk Pupuk Kering, sedangkan Gudang B untuk Pupuk Basah, sehingga alur keluar-masuk barang menjadi lebih terorganisir dan minim kesalahan.",
    //   features: [
    //     "Multi-Location Warehouse: Manajemen lokasi gudang terpisah.",
    //     "Product Categorization: Pemisahan stok Pupuk Basah & Kering.",
    //     "Stock Flow: Pencatatan barang masuk (Inbound) & keluar (Outbound).",
    //     "Dashboard Admin: Pantau ketersediaan stok di tiap lokasi secara real-time."
    //   ],
    //   challenge: "Tantangan terbesar adalah tekanan waktu (time constraint) karena proyek ini dikerjakan saat lomba. Saya harus mengimplementasikan logika manajemen stok yang cukup kompleks sambil mempelajari fitur-fitur baru Laravel secara otodidak di tengah kompetisi, yang membuat proses development terasa sangat intens."
    // },
    // {
    //   id: 12,
    //   title: "Job Seekers: Find Your Next Career",
    //   subtitle: "Job Recruitment Platform (UKK)",
    //   category: ["Mobile Dev", "Fullstack"],
    //   image: "/images/Projects/job-cover.jpg",
    //   link: "#", // Isi link demo/repo jika ada
    //   gallery: [
    //     "/images/Projects/job-1.jpg",
    //     "/images/Projects/job-2.jpg",
    //     "/images/Projects/job-3.jpg"
    //   ],
    //   role: "Fullstack Mobile Developer",
    //   year: "2025",
    //   techStack: ["Flutter (Dart)", "Laravel (Backend)", "MySQL", "REST API"],
    //   description: "Aplikasi pencarian kerja yang dikembangkan sebagai proyek Uji Kompetensi Keahlian (UKK). Sistem ini menghubungkan pelamar kerja dengan perusahaan melalui aplikasi mobile yang intuitif.\n\nSisi Frontend dibangun menggunakan Flutter untuk performa native, sedangkan Backend menggunakan Laravel sebagai penyedia REST API yang menangani autentikasi, manajemen lowongan, dan status lamaran.",
    //   features: [
    //     "Swipe to Apply: Melamar kerja dengan interaksi modern.",
    //     "CV Generator: Membuat CV standar otomatis dari profil pengguna.",
    //     "Company Dashboard: Panel admin untuk HRD mengelola pelamar.",
    //     "Real-time Status: Notifikasi update status lamaran (Diterima/Ditolak)."
    //   ],
    //   challenge: "Tantangan paling teknis adalah debugging 'Invisible Error' pada sisi Backend Laravel. Sempat terjadi kegagalan pemanggilan API tanpa pesan error yang jelas, yang ternyata disebabkan oleh urutan (ordering) definisi Route di `api.php`. Kesalahan posisi baris kode ini menyebabkan request tertukar/tidak dikenali, sebuah bug sepele namun sangat *tricky* untuk dilacak."
    // },
  ],
};