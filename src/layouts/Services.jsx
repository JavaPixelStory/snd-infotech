import { services } from '../constants';
import { layout } from '../style';
import TitleAndText from '../components/TitleAndText';
import ServicesCard from '../components/ServicesCard';

const Services = () => (
  <section
    id='services'
    className={`${layout.section} gap-6 justify-between relative`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] bottom-0 rounded-full blue__gradient' />

    <TitleAndText
      title='Услуги'
      text='Мы предоставляем нашим клиентам самые инновационные, надежные и безопасные технологии в сфере финансовых услуг и платежных решений.'
    />
    <div className={`flex-col ml-0 gap-10 relative`}>
      {services.map((service, index) => (
        <ServicesCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default Services;
