import { btnUp } from '../assets'

const GoUp = () => (
  <a href='#nav'>
    <img
      src={btnUp}
      className='w-[150px] inline h-[150px] md:right-4 md:bottom-4 bottom-3 right-3 fixed z-[999]'
      alt='goUp'
    />
  </a>
)

export default GoUp
