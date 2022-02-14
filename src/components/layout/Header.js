import { ASSETS_PATH } from 'config';
import styles from './Header.module.css';
import NavMenu from 'components/ui/NavMenu';

const Header = () => {

  return (
    <div className={`${styles['header']} flex`}>
      <div className={styles["logo"]}>
        <img src={`${ASSETS_PATH}/shared/logo.svg`} alt="Space Tourism Logo" />
      </div>
      <NavMenu 
        navItems={[ 
          {
            link: '/',
            pretext: '00',
            text: 'Home',
            active: true
          },
          {
            link: '#',
            pretext: '01',
            text: 'Destination'
          },
          {
            link: '#',
            pretext: '02',
            text: 'Crew'
          },
          {
            link: '#',
            pretext: '03',
            text: 'Technology'
          }
        ]} 

        classes="flex"
        bgWrap="true"
        gap="8rem"
      />
    </div>
  )
}

export default Header;