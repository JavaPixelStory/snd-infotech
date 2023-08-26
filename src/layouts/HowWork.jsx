import { pipline } from '../constants';
import styles from '../style';
import WorkCard from '../components/WorkCard';

const HowWork = () => (
  <section
    id='work'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]'>
      <h2 className={styles.heading2}>Как мы работаем</h2>
    </div>

    <div className='flex flex-wrap justify-between w-full gap-6 feedback-container relative z-[1]'>
      {pipline.map((card) => (
        <WorkCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default HowWork;
