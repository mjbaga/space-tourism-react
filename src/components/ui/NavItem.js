import styles from './NavItem.module.css';

const NavItem = (props) => {
  const { link, text, pretext, active, hovered } = props.item;

  const textBefore = pretext !== '' ? <span>{pretext}</span> : '';

  return (
    <li className={`${styles['nav-item']} ${active ? styles['active'] : ''} ${hovered ? styles['hovered'] : ''} ff-sans-cond fs-300 uppercase`}>
      <a className="text-white" href={link}>{textBefore}{text}</a>
    </li>
  )
}

export default NavItem;