import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Bonuskaart</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <h2>My Bonus Card</h2>
          </div>
          <div className="card-body">
            <div className="barcode-container">
              <Image src="../public/barcode.svg" alt="Barcode" className="barcode-image" width={300} height={100} />
            </div>
            <div className="card-number">
              <p>Card Number:</p>
              <p className="number">1234 5678 9012 3456</p>
            </div>
          </div>
          <div className="card-footer">
            <p>Show this card at checkout</p>
          </div>
        </div>
      </div>
    </main>
  );
}
