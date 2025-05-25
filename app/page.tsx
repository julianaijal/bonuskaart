import Image from "next/image";
import styles from "./styles/card.module.scss";

export default function Home() {
  return (
    <main className={styles.cardContainer}>
      <h1 className={styles.pageTitle}>Je Digitale AH Bonuskaart</h1>
      <hr className={styles.breakLine} />
      <article className={styles.card} aria-labelledby="card-title">
        <header className={styles.cardHeader}>
          <h2 id="card-title">AH Bonuskaart</h2>
        </header>
        <div className={styles.cardBody}>
          <div className={styles.barcodeSection}>
            <div className={styles.barcodeContainer}>
              <Image
                src="/img/barcode.jpeg"
                alt="AH Bonuskaart barcode"
                className={styles.barcodeImage}
                width={300}
                height={100}
                priority
              />
            </div>
            <div className={styles.cardNumber}>
              <p className={styles.number}>2622731939923</p>
            </div>
          </div>
        </div>
        <footer className={styles.cardFooter}>
          <p>Scan deze kaart bij de checkout</p>
          <p className={styles.footerDisclaimer}>Let op: dit is een persoonlijke bonuskaart, niet verbonden aan Albert Heijn.</p>
        </footer>
      </article>
      <p className={styles.cardText}>
        Met deze digitale AH Bonuskaart heb je jouw Albert Heijn voordeel altijd
        bij de hand. Scan de barcode eenvoudig bij de kassa. Een handig
        alternatief voor de fysieke kaart of de AH app, perfect voor snelle
        toegang tot je korting.
      </p>
      <p className={styles.pageDisclaimer}>
        Disclaimer: Deze website is een onafhankelijk project en is op geen
        enkele wijze gelieerd aan, goedgekeurd door of verbonden met Albert
        Heijn of Ahold Delhaize N.V. Alle handelsmerken, logo’s, mediabestanden
        en ander materiaal zijn eigendom van hun respectieve eigenaren.
      </p>
    </main>
  );
}
