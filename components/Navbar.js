import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Image src="/logo.png" alt="Logo" width={36} height={36} />
        <span className={styles.brandName}>PPLG Dev</span>
      </div>
      <div className={styles.links}>
        <a href="#tentang">Tentang</a>
        <a href="#layanan">Layanan</a>
        <a href="#testimoni">Testimoni</a>
        <a href="#kontak" className={styles.cta}>Hubungi Kami</a>
      </div>
    </nav>
  );
}