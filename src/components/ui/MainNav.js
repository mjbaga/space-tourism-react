import NavItem from './NavItem';

import styles from './MainNav.module.css';
import { Fragment } from 'react/cjs/react.development';
import { useState } from 'react';

const MainNav = (props) => {
  const { navItems, classes, gap, id } = props;
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClickHandler = (e) => {
    setMenuIsActive(!menuIsActive);
  }

  return (
    <Fragment>
      <button onClick={menuClickHandler} className={styles["mobile-nav-toggle"]} aria-controls="primary-navigation" aria-expanded={menuIsActive ? 'true' : 'false'}><span className="sr-only">Menu</span></button>
      <nav>
        <ul id={id} className={`${styles['main-nav']} ${classes ? classes : ''} ${menuIsActive ? styles['active'] : '' } underline-indicators flex`} style={{ '--gap': gap }}>
          {navItems.map((item, i)=> (<NavItem item={item} key={i} />))}
        </ul>
      </nav>
    </Fragment>
  )
}

export default MainNav;