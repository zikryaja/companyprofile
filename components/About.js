import styles from './About.module.css';

const layanan = [
  {
    label: 'landing-page.js',
    text: 'Landing page satu halaman untuk promosi produk atau acara.',
  },
  {
    label: 'company-profile.js',
    text: 'Website profil usaha lengkap dengan galeri dan kontak.',
  },
  {
    label: 'toko-online.js',
    text: 'Website sederhana untuk menampilkan dan menjual produk.',
  },
];

export default function About() {
  return (
    <section className={styles.about} id="layanan">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Tentang Kami</p>

        <h2 className={styles.title}>
          Dari siswa PPLG, untuk usahamu.
        </h2>

        <p className={styles.desc}>
          Kami adalah tim siswa jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) yang membantu
          UMKM, komunitas, dan perorangan punya website sendiri — tanpa harga mahal dan tanpa
          proses yang ribet. Setiap project kami kerjakan langsung bersama kamu, dari desain sampai
          website-nya online.
        </p>
      </div>

      <div className={styles.grid}>
        {layanan.map((item) => (
          <div className={styles.card} key={item.label}>
            <p className={styles.cardLabel}>{item.label}</p>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>

      <section>
        <a
          href="https://wa.me/6281311256191?text=Halo%2C%20saya%20mau%20tanya%20soal%20jasa%20pembuatan%20website"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waButton}
        >
          Chat via WhatsApp
        </a>
      </section>
    </section>
  );
}