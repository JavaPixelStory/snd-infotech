import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section
      className={`${styles.flexStart} sm:flex-row flex-col flex-wrap sm:my-10 mb-6 lg:justify-between justify-start`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex lg:justify-center justify-start items-center flex-row sm:py-0 py-2`}
        >
          <h4 className='font-sndReg xs:text-[40.89px] tracking-widest text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white'>
            {stat.value}
          </h4>
          <p className='font-sndLight xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
