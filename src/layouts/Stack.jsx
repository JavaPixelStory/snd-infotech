import { stackLang, stackBD, stackFrame, stackMobile } from '../constants';
import styles from '../style';

const Stack = () => (
  <section className={`${styles.flexCenter} my-4 flex-col relative`} id='stack'>
    <div className='flex justify-between items-center md:flex-row flex-col relative z-[1]'>
      <h2 className={styles.heading2}>Стек технологий</h2>
    </div>
    <div className='flex justify-between items-center md:flex-row flex-col m-6 relative z-[1]'>
      <h5 className={styles.paragraph}>Языки программирования:</h5>
    </div>
    <div className={`${styles.flexCenter} gap-6 flex-wrap`}>
      {stackLang.map((lang) => (
        <div
          key={lang.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[120px]`}
        >
          <img
            src={lang.logo}
            alt='lang_logo'
            className='sm:h-[70px] h-[100px] object-contain'
          />
        </div>
      ))}
    </div>
    <div className='flex justify-between items-center md:flex-row flex-col m-6 relative z-[1]'>
      <h5 className={styles.paragraph}>Базы данных:</h5>
    </div>
    <div className={`${styles.flexCenter} gap-6 flex-wrap`}>
      {stackBD.map((lang) => (
        <div
          key={lang.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[120px]`}
        >
          <img
            src={lang.logo}
            alt='lang_logo'
            className='sm:h-[70px] h-[100px] object-contain'
          />
        </div>
      ))}
    </div>
    <div className='flex justify-between items-center md:flex-row flex-col m-6 relative z-[1]'>
      <h5 className={styles.paragraph}>Фреймворки:</h5>
    </div>
    <div className={`${styles.flexCenter} gap-6 flex-wrap`}>
      {stackFrame.map((lang) => (
        <div
          key={lang.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[120px]`}
        >
          <img
            src={lang.logo}
            alt='lang_logo'
            className='sm:h-[70px] h-[100px] object-contain'
          />
        </div>
      ))}
    </div>
    <div className='flex justify-between items-center md:flex-row flex-col m-6 relative z-[1]'>
      <h5 className={styles.paragraph}>Мобильная разработка:</h5>
    </div>
    <div className={`${styles.flexCenter} gap-6 flex-wrap`}>
      {stackMobile.map((lang) => (
        <div
          key={lang.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[120px]`}
        >
          <img
            src={lang.logo}
            alt='lang_logo'
            className='sm:h-[70px] h-[100px] object-contain'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
