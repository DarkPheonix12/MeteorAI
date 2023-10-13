import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find AI solution that suits<br className="sm:block hidden" /> your business, in just 60secs!!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Talk to us for 1min - 10mins for FREE consultation!! And we can find Suitable solutions for your Business. And all you gotta do is Chill...
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
