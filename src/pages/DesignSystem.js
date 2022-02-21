import LargeButton from '../components/ui/LargeButton';
import MainNav from '../components/ui/MainNav';
import TabMenu from '../components/ui/TabMenu';
import styles from './DesignSystem.module.css';

const DesignSystem = () => {
  return (
    <div className={styles["design-system"]}>
      <div className="container flow">
        <h1 className="text-white">Design System</h1>
        <section className="flow" id="colors">
          <h2 className="numbered-title"><span>01</span>Colors</h2>
          <ul className={`${styles["color-groups"]} text-white flex`}>
            <li>
              <div className={`${styles["color-item"]} bg-dark`} style={{border: '1px solid hsl(var(--clr-light))' }}><span>#0B0D17</span></div>
              <p><span className="text-accent">RGB</span> 11,13,23</p>
              <p><span className="text-accent">HSL</span> 230 &#8451;, 35%, 7%</p>
            </li>
            <li>
              <div className={`${styles["color-item"]} bg-accent text-dark`}><span>#D0D6F9</span></div>
              <p><span className="text-accent">RGB</span> 11,13,23</p>
              <p><span className="text-accent">HSL</span> 230 &#8451;, 35%, 7%</p>
            </li>
            <li>
              <div className={`${styles["color-item"]} bg-white text-dark`}><span>#FFFFFF</span></div>
              <p><span className="text-accent">RGB</span> 11,13,23</p>
              <p><span className="text-accent">HSL</span> 230 &#8451;, 35%, 7%</p>
            </li>
          </ul>
        </section>
        <section className="flow" id="typography" style={{ margin: '4rem 0' }}>
          <h2 className="numbered-title"><span>02 </span>Typography</h2>
          <div className="flex">
            <div className="flow" style={{ flexBasis: '100%' }}>
              <div> 
                  <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                  <p className="fs-900 ff-serif uppercase">Earth</p>
              </div>
              <div> 
                  <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                  <p className="fs-800 ff-serif uppercase">Venus</p>
              </div>
              <div> 
                  <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                  <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
              </div>
              <div> 
                  <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                  <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
              </div>
              <div> 
                  <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                  <p className="ff-sans-cond fs-500 uppercase text-accent">So, you want to travel to space</p>
              </div>
            </div>
            <div className="flow" style={{ flexBasis: '100%' }}>
              <div> 
                  <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                  <p className="ff-serif uppercase fs-500">384,400 km</p>
              </div>
              <div> 
                  <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                  <p className="ff-sans-cond fs-200 uppercase letter-spacing-3">Avg. Distance</p>
              </div>
              <div> 
                  <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                  <p className="ff-sans-cond fs-300 uppercase letter-spacing-2">Europa</p>
              </div>
              <div> 
                  <p className="ff-sans-normal text-faded-white">Body Text</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flow" id="interactive-elements">
          <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
          
          {/* <!-- navigation --> */}
          <div className="flow">
            <nav>
              <MainNav 
                navItems={[ 
                  {
                    link: '#',
                    pretext: '00',
                    text: 'Active',
                    active: true
                  },
                  {
                    link: '#',
                    pretext: '01',
                    text: 'Hovered',
                    hovered: true
                  },
                  {
                    link: '#',
                    pretext: '02',
                    text: 'Idle'
                  }
                ]} 

                classes="flex"
                bgWrap="true"
                gap="8rem"
              />
            </nav>
            <p className="center text-accent">Different States of Navigation Bar</p>
          </div>
          
          <div className="flex interactive-buttons">
              <div className="flow">
                <LargeButton link="#" classes="uppercase ff-serif fs-600 text-dark bg-white">
                  Explore
                </LargeButton>
                <p className="center text-accent">Landing Page Main Button - Idle</p>
              </div>
              
              <div className='flow'>
                <TabMenu 
                  navItems={[ 
                    {
                      text: 'Moon',
                      active: true
                    },
                    {
                      text: 'Mars',
                      hovered: true
                    },
                    {
                      text: 'Europa'
                    }
                  ]} 

                  classes="flex"
                  gap="1rem"
                />
                <p className="center text-accent">Tabs (Active, Hover, & Idle)</p>
                  
                <div className="dot-indicators flex">
                  <button><span className="sr-only">Slide title</span></button>
                  <button><span className="sr-only">Slide title</span></button>
                  <button><span className="sr-only">Slide title</span></button>
                </div>
                <p className="center text-accent">Slider 1 States (Active, Hover, & Idle)</p>
                  
                <div className="numeric-buttons flex">
                  <button className="fs-600 ff-serif" role="tab" aria-selected="true">1</button>
                  <button className="fs-600 ff-serif" role="tab" aria-selected="false">2</button>
                  <button className="fs-600 ff-serif" role="tab" aria-selected="false">3</button>
                </div>
                <p className="center text-accent">Slider 2 States (Active, Hover, & Idle)</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DesignSystem;