const ServicesCard = ({ icon, text }) => (
  <div
    className={`flex flex-row p-3 rounded-[20px] justify-start gap-[20px] feature-card items-center mb-2`}
  >
    <img src={icon} alt='star' className='w-[40px] h-[40px] object-contain' />
    <p className='font-sndLight text-white text-[18px] leading-[23.4px]'>
      {text}
    </p>
  </div>
)

export default ServicesCard
