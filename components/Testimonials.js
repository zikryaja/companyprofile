import Reveal from './Reveal';
import styles from './Testimonials.module.css';

const testimoni = [
  {
    id: 'kasir.js',
    name: 'Sultan Fauziah',
    role: 'Pemilik, Warung Kopi Beji',
    rating: 5,
    quote: 'Mempermudah sekali dalam pembayaran warkop gue, udah gitu harga merakyat kualitas ga murahan.',
  },
  {
    id: 'organisasikatar.js',
    name: 'Epet Epet',
    role: 'Ketua, Karang Taruna Mampang',
    rating: 5,
    quote: 'Mengorganisir karang taruna jadi gampang. Recommend banget kalau mau bikin website.',
  },
  {
    id: 'sepatu.js',
    name: 'Bintang Sakti',
    role: 'Owner, Toko Sepatu Beji',
    rating: 4.5,
    quote: 'Prosesnya cepat, tampilan modern. Cuma perlu beberapa kali revisi kecil di bagian galeri produk.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimoni} id="testimoni">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Testimoni</p>
        <h1 className={styles.title}>Apa kata mereka?</h1>
        <p className={styles.desc}>
          Beberapa cerita dari klien yang udah pernah pakai jasa kami.
        </p>
      </div>

      <div className={styles.grid}>
        {testimoni.map((item, index) => {
          const filledStars = Math.round(item.rating);
          return (
            <Reveal key={item.id} delay={index * 120}>
              <div className={styles.card}>
                <p className={styles.cardLabel}>{item.id}</p>
                <p className={styles.stars}>
                  {'★'.repeat(filledStars)}
                  {'☆'.repeat(5 - filledStars)}
                </p>
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.role}>{item.role}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}