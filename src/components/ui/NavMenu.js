
import ConditionalWrapper from '../helper/ConditionalWrapper';
import NavItem from './NavItem';
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  const { navItems, classes, bgWrap, gap } = props;

  return (
    <ConditionalWrapper
      condition={bgWrap}
      wrapperTrue={children => <div className={styles["nav-menu-wrapper"]}>{children}</div>}
      wrapperFalse={children => children}
    >

      <ul className={`${styles['nav-menu']} ${classes ? classes : ''}`} style={{ '--gap': gap }}>
        {navItems.map((item, i)=> (<NavItem item={item} key={i} />))}
      </ul>
    </ConditionalWrapper>
    
  )
}

export default NavMenu;