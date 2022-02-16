import styles from './NavItem.module.css';

const NavItem = (props) => {
  const { link, text, pretext, active, hovered } = props.item;

  return (
    <li className={`${styles['nav-item']} ${active ? styles['active'] : ''} ${hovered ? styles['hovered'] : ''} ff-sans-cond fs-400`}>
      <a href={link} className="text-white uppercase"><span aria-hidden="true">{pretext}</span>{text}</a>
    </li>
  )
}

export default NavItem;