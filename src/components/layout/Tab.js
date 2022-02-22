
import { useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './Tab.module.css';

const Tab = forwardRef(({item, index, selectedTab, handleChange, onArrowChange, type = 'name'}, ref) => {
  const btnRef = useRef();

  const btnClickHandler = (e) => {
    handleChange(index);
  }

  const keyDownHandler = (e) => {
    onArrowChange(index, e.keyCode);
  }

  const deselectTab = () => {
    btnRef.current.setAttribute("tabindex", -1);
  }

  const selectTab = () => {
    btnRef.current.setAttribute("tabindex", 0);
    btnRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      select: selectTab,
      deselect: deselectTab
    };
  });

  return (
    <li className={styles["tab-item"]} role="presentation">
      <button 
        ref={btnRef}
        role="tab"
        index={index}
        aria-selected={selectedTab === index}
        aria-controls={item.tabId}
        onClick={btnClickHandler}
        onKeyDown={keyDownHandler}
        tabIndex={selectedTab === index ? 0 : -1}
        className={`${selectedTab === index ? styles.active : '' } 
        ${type !== 'name' ? styles['round-btn'] : ''}
        uppercase ff-sans-cond text-accent bg-dark letter-spacing-2`}
      >
        {type === 'name' ? item.name : index + 1 }
      </button>
    </li>
  )
});

export default Tab;