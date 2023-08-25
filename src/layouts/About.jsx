import { card } from '../assets';
import { layout } from '../style';
import TitleAndText from '../components/TitleAndText';

const About = () => (
  <section className={`${layout.section} relative`} id='about'>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

    <TitleAndText
      title={'О компании'}
      text={
        'Sendy -  команда увлеченных профессионалов, с 2014 создающих и развивающих IT продукты. Собственный центр разработки, многолетний опыт и гибкий подход позволяют нам создавать уникальные продукты под любые корпоративные и коммерческие задачи. Мы предоставляем нашим клиентам уникальные решения, а также создаем комплексные экосистемы, приложения и сервисы.'
      }
    />

    <div className={layout.sectionImg}>
      <img src={card} alt='billing' className='w-[90%] h-[90%] ml-8' />
    </div>
  </section>
);

export default About;
