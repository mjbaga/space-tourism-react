import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = (props) => {
  const { link, text, pretext } = props.item;

  const textBefore = pretext ? <span aria-hidden="true" className="numeric-pretext">{pretext}</span> : '';

  return (
    <li className={`${styles['nav-item']}`}>
      <NavLink className={(navData) => navData.isActive ? `${styles.active} text-white uppercase ff-sans-cond` : 'text-white uppercase ff-sans-cond' } to={link}>
        {textBefore}{text}
      </NavLink>
    </li>
  )
}

export default NavItem;