// data/certificates.ts

export const certificatesData = [
  {
    id: 1,
    title: "IT Specialist: Databases",
    issuer: "Certiport",
    date: "Valid until 2030",
    description: "Certified proficient in database design, query optimization, and management.",
    image: "/images/Certificates/Certiport.jpg", // Ganti dengan path gambarmu
    link: "#",
    isDark: true // Opsi untuk bikin kartu warna hitam (Premium)
  },
  {
    id: 2,
    title: "FITCOM Finalist 3.0",
    issuer: "Universitas Dinamika",
    date: "Oct 2025",
    description: "Finalis lomba Web Programming tingkat nasional (Top 10 Team).",
    image: "/images/Certificates/WebDev.png", // Sesuaikan nama file gambar
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
  "Laravel", "Flutter", "Figma", "Git"
];