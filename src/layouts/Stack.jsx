import { clients } from '../constants'
import styles from '../style'

const Stack = () => (
  <section className={`${styles.flexCenter} my-4 flex-col relative`} id='stack'>
    <div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]'>
      <h2 className={styles.heading2}>Стек технологий</h2>
    </div>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt='client_logo'
            className='sm:w-[192px] w-[100px] object-contain'
          />
        </div>
      ))}
    </div>
  </section>
)

export default Stack
