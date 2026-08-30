import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} id="tentang">
      <div className={styles.window}>
        <div className={styles.titlebar}>
          <span className={styles.dot} style={{ background: '#FF5F56' }} />
          <span className={styles.dot} style={{ background: '#FFBD2E' }} />
          <span className={styles.dot} style={{ background: '#27C93F' }} />
          <span className={styles.filename}>welcome.jsx</span>
        </div>
        <div className={styles.body}>
          <p className={styles.comment}>Selamat Datang</p>
          <h1 className={styles.headline}>
            Kami bikin website-mu, <span className={styles.highlight}>satu langkah</span> pada satu waktu.
            <span className={styles.cursor}>|</span>
          </h1>
          <p className={styles.tagline}>
            Jasa pembuatan website oleh siswa PPLG — cepat, rapi, dan pas di kantong.
          </p>
        </div>
      </div>
    </header>
  );
}