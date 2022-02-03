import ConditionalWrapper from "../helper/ConditionalWrapper";
import styles from './LargeButton.module.css';

const LargeButton = (props) => {
  const { link, classes, children } = props;

  return (
    <ConditionalWrapper 
      condition={link !== '' || link !== undefined}
      wrapperTrue={children => <a href={link} className={`${styles['large-button']} ${classes}`}>{children}</a>}
      wrapperFalse={children => <button className={classes}>{children}</button>}
    >
      {children}
    </ConditionalWrapper>
  )
}

export default LargeButton;