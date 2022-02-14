import ConditionalWrapper from '../helper/ConditionalWrapper';
import styles from './NavItem.module.css';

const NavItem = (props) => {
  const { link, text, pretext, active, hovered } = props.item;

  const textBefore = pretext ? <span>{pretext}</span> : '';

  return (
    <li className={`${styles['nav-item']} ${active ? styles['active'] : ''} ${hovered ? styles['hovered'] : ''} ff-sans-cond fs-400`}>
      <ConditionalWrapper
        condition={link}
        wrapperTrue={children => <a href={link} className="text-white uppercase">{children}</a>}
        wrapperFalse={children => <button aria-selected={active ? 'true' : 'false' } role="tab" className="text-white uppercase">{children}</button>}
      >
        {textBefore}{text}
      </ConditionalWrapper>
    </li>
  )
}

export default NavItem;