const concerts = [
  {
    id: 1,
    artist: "Artis A",
    date: "20 Desember 2024",
    location: "Jakarta",
    description: "Konser Artis A menampilkan lagu-lagu hits yang memukau.",
    mapLink: "https://goo.gl/maps/example1",
    tickets: [
      { class: "VIP", price: "Rp 1.000.000", available: 20 },
      { class: "Reguler", price: "Rp 500.000", available: 50 },
      { class: "Festival", price: "Rp 300.000", available: 100 },
    ],
  },
  {
    id: 2,
    artist: "Artis B",
    date: "25 Desember 2024",
    location: "Bandung",
    description: "Nikmati penampilan spesial Artis B dengan nuansa pop modern.",
    mapLink: "https://goo.gl/maps/example2",
    tickets: [
      { class: "VIP", price: "Rp 800.000", available: 10 },
      { class: "Reguler", price: "Rp 400.000", available: 40 },
    ],
  },
  {
    id: 3,
    artist: "Artis C",
    date: "30 Desember 2024",
    location: "Surabaya",
    description: "Artis C akan membawakan lagu-lagu rock and roll legendaris.",
    mapLink: "https://goo.gl/maps/example3",
    tickets: [
      { class: "VIP", price: "Rp 1.200.000", available: 15 },
      { class: "Reguler", price: "Rp 600.000", available: 60 },
    ],
  },
  {
    id: 4,
    artist: "Artis D",
    date: "1 Januari 2025",
    location: "Yogyakarta",
    description:
      "Perayaan tahun baru bersama Artis D dengan penampilan spektakuler.",
    mapLink: "https://goo.gl/maps/example4",
    tickets: [
      { class: "VIP", price: "Rp 1.500.000", available: 5 },
      { class: "Reguler", price: "Rp 700.000", available: 30 },
      { class: "Festival", price: "Rp 400.000", available: 80 },
    ],
  },
  {
    id: 5,
    artist: "Artis E",
    date: "10 Januari 2025",
    location: "Medan",
    description: "Artis E mempersembahkan konser dengan tema nostalgia 90-an.",
    mapLink: "https://goo.gl/maps/example5",
    tickets: [
      { class: "VIP", price: "Rp 1.100.000", available: 8 },
      { class: "Reguler", price: "Rp 550.000", available: 45 },
    ],
  },
  {
    id: 6,
    artist: "Artis F",
    date: "15 Januari 2025",
    location: "Denpasar",
    description: "Artis F membawa nuansa tropis ke dalam konser live.",
    mapLink: "https://goo.gl/maps/example6",
    tickets: [
      { class: "VIP", price: "Rp 950.000", available: 12 },
      { class: "Reguler", price: "Rp 450.000", available: 70 },
      { class: "Festival", price: "Rp 250.000", available: 150 },
    ],
  },
];
