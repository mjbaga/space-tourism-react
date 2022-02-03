
import NavItem from './NavItem';
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  const { navItems, classes, bgWrap, gap } = props;

  let component = (
    <ul className={`${styles['nav-menu']} ${classes ? classes : ''}`} style={{ '--gap': gap }}>
      {navItems.map((item, i)=> (<NavItem item={item} key={i} />))}
    </ul>
  )

  const navMenu = bgWrap ? (<div className={styles["nav-menu-wrapper"]}>{component}</div>) : component;

  return (
    navMenu
  )
}

export default NavMenu;