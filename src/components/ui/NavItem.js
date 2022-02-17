import ConditionalWrapper from 'components/helper/ConditionalWrapper';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = (props) => {
  const { link, text, pretext, active } = props.item;

  const textBefore = pretext ? <span aria-hidden="true" className="numeric-pretext">{pretext}</span> : '';

  return (
    <li className={`${styles['nav-item']}`}>
      <ConditionalWrapper
        condition={link}
        wrapperTrue={children => <NavLink className={(navData) => navData.isActive ? `${styles.active} text-white uppercase ff-sans-cond` : 'text-white uppercase ff-sans-cond' } to={link}>{children}</NavLink>}
        wrapperFalse={children => <button className={`${active ? styles.active : '' } uppercase ff-sans-cond text-accent bg-dark letter-spacing-2`}>{children}</button>}
      >
        {textBefore}{text}
      </ConditionalWrapper>
    </li>
  )
}

export default NavItem;