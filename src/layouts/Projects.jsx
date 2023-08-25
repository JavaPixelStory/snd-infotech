import { projects } from '../constants';
import styles, { layout } from '../style';
import TitleAndText from '../components/TitleAndText';
import ProjectsCard from '../components/ProjectsCard';
const Projects = () => (
  <section
    id='projects'
    className={`${layout.section} gap-6 justify-between lg:flex-row-reverse`}
  >
    <TitleAndText
      title={`Примеры реализованных проектов:`}
      text='Sendy реализует проекты по разработке программного обеспечения для операционных сред *nix, Windows, WEB и мобильных приложений. Для создания приложений в компании используются современные языки, технологии программирования и производственные процессы.
      '
    />

    <div className={`flex-1 flex ${styles.flexStart}  mt-0  relative flex-col`}>
      {projects.map((feature, index) => (
        <ProjectsCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Projects;
