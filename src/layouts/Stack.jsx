import { stack } from '../constants';
import styles from '../style';

const Stack = () => (
  <section className={`${styles.flexCenter} my-4 flex-col relative`} id='stack'>
    <div className='flex justify-between items-center md:flex-row flex-col relative z-[1]'>
      <h2 className={styles.heading2}>Стек технологий</h2>
    </div>
    <div className={`${styles.flexCenter} gap-6 flex-wrap mt-10`}>
      {stack.map((lang) => (
        <div
          key={lang.id}
          className={`flex-1 ${styles.flexCenter} min-w-[120px]`}
        >
          <img
            src={lang.logo}
            alt='lang_logo'
            className='sm:h-[70px] h-[50px] object-contain'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
