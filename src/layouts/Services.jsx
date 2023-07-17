import { services } from '../constants'
import { layout } from '../style'
import TitleAndText from '../components/TitleAndText'
import ServicesCard from '../components/ServicesCard'

const Services = () => (
  <section
    id='services'
    className={`${layout.section} gap-6 justify-between relative`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] bottom-0 rounded-full blue__gradient' />

    <TitleAndText
      title='Услуги'
      text='С 2001 года компания создает надежные IT-продукты и решения. Среди них — разработка систем, приложений, облачных и мобильных сервисов enterprise уровня. Sendy входит в список крупнейших IT компаний России и мировой рейтинг Software 500, занимает 4 место среди лучших разработчиков мобильных приложений России согласно рейтингу GoodFirms.'
    />
    <div className={`flex-col ml-0 gap-10 relative`}>
      {services.map((service, index) => (
        <ServicesCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
)

export default Services
