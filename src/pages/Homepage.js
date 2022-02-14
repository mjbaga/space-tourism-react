import styles from './Homepage.module.css';

import Header from 'components/layout/Header';
import LargeButton from 'components/ui/LargeButton';

const Homepage = () => {

  return (
    <div className={styles["homepage"]}>
      {/* <Header /> */}
      <div className="grid-container">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div>
          <LargeButton link="#" classes="uppercase ff-serif fs-600 text-dark bg-white">
            Explore
          </LargeButton>
        </div>
      </div>
    </div>
  )
}

export default Homepage;