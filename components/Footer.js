import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="kontak">
      <div className={styles.content}>
        <div className={styles.block}>
          <p className={styles.label}>Alamat</p>
          <p>
            
            <a href="https://maps.app.goo.gl/GqrW6gy8iignX3Z47"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMK Citra Negara, Jl. Tanah Baru Jl. Kemiri Jaya No.99, Beji, Kecamatan Beji, Kota Depok, Jawa Barat 16421
            </a>
          </p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Hubungi Kami</p>
          <div className={styles.socials}>
            <a href="https://wa.me/6281311256191?text=Halo%2C%20saya%20mau%20tanya%20soal%20jasa%20pembuatan%20website" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/_officialpplgcn/">Instagram</a>
            <a href="https://www.tiktok.com/@ofcpplg_cn">TikTok</a>
            <a href="mailto:pplgcitranegaradepok@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <p className={styles.copy}>© 2026 PPLG Dev. Dibuat oleh Muhammad Zikry Faiq Al Bani XI PPLG 1.</p>
    </footer>
  );
}