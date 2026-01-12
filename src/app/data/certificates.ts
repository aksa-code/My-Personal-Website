// data/certificates.ts

export const certificatesData = [
  {
    id: 1,
    title: "IT Specialist: Databases",
    issuer: "Pearson VUE / Certiport",
    date: "Valid until 2030",
    description: "Certified proficient in database design, query optimization, and management.",
    image: "/images/badge-db.png", // Ganti dengan path gambarmu
    link: "#",
    isDark: true // Opsi untuk bikin kartu warna hitam (Premium)
  },
  {
    id: 2,
    title: "FITCOM Finalist 3.0",
    issuer: "Universitas Dinamika",
    date: "Issued 2024",
    description: "Finalis lomba Web Programming tingkat nasional (Top 10 Team).",
    image: "/images/157.jpg", // Sesuaikan nama file gambar
    link: "#",
    isDark: false
  },
  // MAU NAMBAH? Tinggal copy object di atas dan taruh sini.
  // {
  //   id: 3,
  //   title: "LKS Web Technology",
  //   ...
  // }
];

export const techStackData = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Laravel", "Flutter", "PostgreSQL", "Figma", "Git", "Midtrans"
];