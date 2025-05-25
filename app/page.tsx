import Image from "next/image";
import styles from "./styles/card.module.scss";

export default function Home() {
  return (
    <main className={styles.cardContainer}>
      <h1 className={styles.pageTitle}>Je Digitale AH Bonuskaart</h1>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <h2>AH Bonuskaart</h2>
        </header>
        <div className={styles.cardBody}>
          <div className={styles.barcodeSection}>
            <div className={styles.barcodeContainer}>
              <Image
                src="/img/barcode.jpeg"
                alt="Barcode"
                className={styles.barcodeImage}
                width={300}
                height={100}
              />
            </div>
            <div className={styles.cardNumber}>
              <p className={styles.number}>2622731939923</p>
            </div>
          </div>
        </div>
        <footer className={styles.cardFooter}>
          <p>Scan deze kaart bij de checkout</p>
        </footer>
      </article>
      <p className={styles.cardText}>
        Met deze digitale AH Bonuskaart heb je jouw Albert Heijn voordeel altijd bij de hand. 
        Scan de barcode eenvoudig bij de kassa. Een handig alternatief voor de fysieke kaart 
        of de AH app, perfect voor snelle toegang tot je korting.
      </p>
    </main>
  );
}
