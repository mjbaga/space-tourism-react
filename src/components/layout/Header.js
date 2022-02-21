
import styles from './Header.module.css';

import logo from 'images/shared/logo.svg';
import MainNav from 'components/layout/MainNav';

const Header = () => {

  return (
    <div className={`${styles['header']} flex`}>
      <img className={styles['logo']} src={logo} alt="Space Tourism Logo" />
      <div className={styles['line-container']}><div className={styles['line']}></div></div>
      <MainNav 
        navItems={[ 
          {
            link: '/',
            pretext: '00',
            text: 'Home',
            active: true
          },
          {
            link: '/destination',
            pretext: '01',
            text: 'Destination'
          },
          {
            link: '/crew',
            pretext: '02',
            text: 'Crew'
          },
          {
            link: '/technology',
            pretext: '03',
            text: 'Technology'
          }
        ]} 

        id="primary-navigation"
        classes="flex"
      />
    </div>
  )
}

export default Header;