import styles, { layout } from '../style'

const TitleAndText = ({ title, text }) => {
  return (
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} w-[400px] `}>{title}</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>{text}</p>
    </div>
  )
}

export default TitleAndText
