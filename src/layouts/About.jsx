import { card } from '../assets'
import { layout } from '../style'
import TitleAndText from '../components/TitleAndText'

const About = () => (
  <section className={`${layout.section} relative`} id='about'>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

    <TitleAndText
      title={'О компании'}
      text={
        'СКЭНД — IT-компания, которая занимается разработкой программного обеспечения с 2000 года и оказывает широкий спектр аутсорсинговых услуг в сфере IT. Сегодня в СКЭНД работает 250+ специалистов с большим багажом знаний и навыков, а также опытом разработки программ для различных индустрий. Наша миссия — помочь компаниям сократить расходы на разработку ПО и ускорить вывод их продуктов на рынок.'
      }
    />

    <div className={layout.sectionImg}>
      <img src={card} alt='billing' className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default About
