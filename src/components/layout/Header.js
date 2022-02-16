
import styles from './Header.module.css';

import logo from 'images/shared/logo.svg';
import MainNav from 'components/ui/MainNav';

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

        id="primary-navigation"
        classes="flex"
      />
    </div>
  )
}

export default Header;