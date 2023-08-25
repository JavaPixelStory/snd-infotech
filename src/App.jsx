import styles from './style';
import GoUp from './components/GoUp';
import {
  Navbar,
  Hero,
  // Stats,
  Services,
  Projects,
  HowWork,
  Stack,
  Footer,
  About,
} from './layouts';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <GoUp />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Projects />
        <Services />
        <HowWork />
        <About />
        <Stack />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
