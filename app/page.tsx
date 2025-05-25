import Image from "next/image";
import styles from "./styles/card.module.scss";

export default function Home() {
  return (
    <main className={styles.cardContainer}>
      <h1 className={styles.pageTitle}>Je Digitale AH Bonuskaart</h1>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>AH Bonuskaart</h2>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.barcodeSection}> {/* New wrapper */}
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
          </div> {/* End of new wrapper */}
        </div>
        <div className={styles.cardFooter}>
          <p>Scan deze kaart bij de checkout</p>
        </div>
      </div>
    </main>
  );
}
