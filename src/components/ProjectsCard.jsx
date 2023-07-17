import styles from '../style'
import { projects } from '../constants'

const ProjectsCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] max-w-[550px] ${
      index !== projects.length - 1 ? 'mb-0' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-6'>
      <h4 className='font-sndReg text-white text-[18px] leading-[26px] mb-2'>
        {title}
      </h4>
      <p className='font-sndLight text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

export default ProjectsCard
