const WorkCard = ({ content, title, img }) => (
  <div className='flex justify-start flex-col px-10 py-10 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img
      src={img}
      alt='double_quotes'
      className='w-[50px] h-[50px] object-contain'
    />

    <div className=''>
      <div className='flex flex-col my-6'>
        <h4 className='font-sndLight text-gradient text-[36px] leading-[32px] text-white'>
          {title}
        </h4>
      </div>
    </div>

    <p className='font-sndLight font-normal text-[18px] leading-[28px] text-white'>
      {content}
    </p>
  </div>
)

export default WorkCard
