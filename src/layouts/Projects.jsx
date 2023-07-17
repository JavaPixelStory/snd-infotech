import { projects } from '../constants'
import styles, { layout } from '../style'
import TitleAndText from '../components/TitleAndText'
import ProjectsCard from '../components/ProjectsCard'
const Projects = () => (
  <section
    id='projects'
    className={`${layout.section} gap-6 justify-between lg:flex-row-reverse`}
  >
    <TitleAndText
      title={`Реализованные проекты`}
      text='С 2001 года компания создает надежные IT-продукты и решения. Среди них —
        разработка систем, приложений, облачных и мобильных сервисов enterprise
        уровня. Sendy входит в список крупнейших IT компаний России и мировой
        рейтинг Software 500, занимает 4 место среди лучших разработчиков
        мобильных приложений России согласно рейтингу GoodFirms.'
    />

    <div className={`flex-1 flex ${styles.flexStart}  mt-0  relative flex-col`}>
      {projects.map((feature, index) => (
        <ProjectsCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Projects
