export const portfolioData = {
  hero: {
    status: "Available for Hire",
    name: "Danadyaksa Morello Hisyam Prayata",
    
    // JUDUL UTAMA
    title: "Fullstack Developer",
    subtitle: "& UI/UX Enthusiast.", 
    
    // DESKRIPSI
    desc: "Saya adalah siswa Software Engineering di SMK Telkom Malang yang memiliki ketertarikan mendalam pada dunia Fullstack. Berbekal sertifikasi IT Specialist: Databases, saya menggabungkan logika backend yang kokoh dengan estetika UI/UX modern. Saya percaya bahwa aplikasi yang hebat lahir dari kode yang efisien dan desain yang memanjakan pengguna.",
    
    
    // SOCIALS
    socials: [
      { name: "GitHub", url: "https://github.com/aksa-code" }, 
      { name: "LinkedIn", url: "https://www.linkedin.com/in/danadyaksa-morello/" },
      { name: "Behance", url: "https://www.behance.net/danadyamorello" } 
    ]
  },

  projects: [
    {
      id: 1,
      category: "Travel & Tourism",
      title: "Explore Bromo: Interactive Travel Guide",
      description: "Landing page modern dan responsif untuk pariwisata Gunung Bromo dengan kalender musiman interaktif ber-tooltip cuaca, carousel otomatis perlengkapan, dan antarmuka bersih untuk membantu wisatawan merencanakan perjalanan.",
      image: "/images/Projects/Project 1.png", 
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks"],
      link: "https://github.com/aksa-code/Explore-Bromo" 
    },
    {
      id: 2,
      category: "Smart Farm",
      title: "Pupuk Smart – Sistem Manajemen Produk & Gudang Pupuk",
      description: "Pupuk Smart adalah aplikasi web untuk mengelola data produk pupuk, gudang, stok, harga, dan pengguna (seller & buyer) secara terpusat menggunakan sistem database relasional.",
      image: "/images/Projects/Project 2.png", 
      tech: ["HTML", "CSS", "PHP", "MySql"],
      link: "https://github.com/aksa-code/Pupuk-Smart"
    },
    {
      id: 3,
      category: "Fullstack Mobile App Development",
      title: "Fullstack Mobile App Development",
      description: "Aplikasi mobile yang menghubungkan perusahaan (HRD) dan pencari kerja, memungkinkan perusahaan memposting lowongan, mengelola pelamar, serta pengguna melamar pekerjaan dan memantau status lamaran secara real-time melalui sistem berbasis API.",
      image: "/images/Projects/Project 3.png",
      tech: ["Flutter", "Laravel", "Postman", "REST API"],
      link: "https://github.com/aksa-code/Job-Seeker-Front-end-"
    },
  ],
};