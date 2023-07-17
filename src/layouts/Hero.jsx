import styles from '../style'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'
import {
  robot,
  robotHand,
  cardBot,
  cardMid,
  cardTop,
  ballBig,
  ballMid,
  ballSmal,
  ballLitle,
} from '../assets'

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex sm:flex-row flex-col ${styles.paddingY} relative`}
    >
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-0' />

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row justify-between items-center w-full z-50'>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className='flex-1 font-sndLight text-[36px] leading-[44px] sm:text-[55px] sm:leading-[55px] md:text-[95px] md:leading-[95px] text-white'
          >
            Создаем <br className='sm:block hidden' /> информационные
            <br className='sm:block hidden' /> системы
            <span className='text-gradient font-sndBold'>.</span>{' '}
          </motion.h1>
        </div>
        <motion.p
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className={`${styles.paragraph} font-sndLight max-w-[470px] mt-5`}
        >
          Под любые корпоративные и коммерческие задачи. Интегрируем сторонние
          сервисы.
        </motion.p>
      </div>

      <div
        className={`hidden flex-1 lg:flex ${styles.flexCenter} md:my-0 my-10 sm:h-[300px] sm:h-[400px] md:h-[600px] xl:ml-[10rem]`}
      >
        <motion.img
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}
          src={robotHand}
          alt='billing'
          className=' sm:w-[750px] sm:h-[568px] absolute z-[50] bottom-0 mr-[5rem]'
        />
        <motion.img
          variants={fadeIn('down', 3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={ballLitle}
          alt='billing'
          className=' sm:w-[16px] sm:h-[16px] absolute z-[0] top-[10rem] mr-[-5rem]'
        />
        <motion.img
          variants={fadeIn('down', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={cardBot}
          alt='billing'
          className=' sm:w-[400px] sm:h-[251px] absolute z-[50] bottom-[16rem] mr-[15rem] z-0'
        />
        <motion.img
          variants={fadeIn('down', 1.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={cardMid}
          alt='billing'
          className=' sm:w-[400px] sm:h-[251px] absolute z-[50] bottom-[18.5rem] mr-[15rem]'
        />
        <motion.img
          variants={fadeIn('down', 1.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={cardTop}
          alt='billing'
          className=' sm:w-[400px] sm:h-[251px] absolute z-[50] bottom-[21rem] mr-[15rem]'
        />
        <motion.img
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={ballBig}
          alt='billing'
          className=' sm:w-[120px] sm:h-[120px] absolute z-[50] top-[6rem] mr-[40rem]'
        />
        <motion.img
          variants={fadeIn('down', 1.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={ballMid}
          alt='billing'
          className=' sm:w-[70px] sm:h-[70px] absolute z-[0] bottom-[18rem] mr-[-10rem]'
        />
        <motion.img
          variants={fadeIn('down', 2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          src={ballSmal}
          alt='billing'
          className=' sm:w-[32px] sm:h-[32px] absolute z-[0] bottom-[16rem] mr-[45rem]'
        />

        {/* gradient start */}
        <div className='absolute z-[0] w-[20%] h-[20%] top-0 pink__gradient ' />
        <div className='absolute z-[1] w-[30%] h-[30%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div
        className={`md:hidden flex-1 flex ${styles.flexCenter} md:my-0 my-10  right-0 sm:h-[300px] sm:h-[400px] md:h-[600px]`}
      >
        <motion.img
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}
          src={robot}
          alt='billing'
          className=' sm:w-[750px] sm:h-[568px] relative z-[50] bottom-0'
        />

        {/* gradient start */}
        <div className='absolute z-[0] w-[20%] h-[20%] top-0 pink__gradient ' />
        <div className='absolute z-[1] w-[30%] h-[30%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero
