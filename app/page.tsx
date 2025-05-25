import Image from 'next/image';
import styles from "./styles/card.module.scss";

export default function Home() {
  return (
    <main className={styles.cardContainer}>
      <h1 className={styles.pageTitle}>Welcome to Bonuskaart</h1>
      <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Mijn Bonuskaart</h2>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.barcodeContainer}>
              <Image src="/barcode.svg" alt="Barcode" className={styles.barcodeImage} width={300} height={100} />
            </div>
            <div className={styles.cardNumber}>
              <p>Kaartnummer:</p>
              <p className={styles.number}>1234 5678 9012 3456</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>Scan deze kaart bij de checkout</p>
          </div>
        </div>
    </main>
  );
}
