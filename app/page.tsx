import styles from "./Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>divine softness</h1>
        <p>our heritage</p>
      </div>

      <div className={styles.card}>
        <p className={styles.about}>About</p>
        <p>
          At Sacre Jewellery, we believe that beauty is energy — unseen, yet deeply felt.
          Our creations are born from the fusion of craftsmanship and spirit.
          Each design is infused with intention, balancing elegance and mysticism.
        </p>

        <div className={styles.imgColumn}>
          <Image
            src="/Group59.png"
            alt="Group59"
            width={263}
            height={310}
            className={styles.img1}
          />
          <div className={styles.learn}>Learn more</div>
        </div>

        <Image
          src="/image68.png"
          alt="Image68"
          width={655}
          height={795}
          className={styles.img2}
        />
      </div>
    </div>
  );
}


