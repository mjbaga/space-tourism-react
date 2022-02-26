import { Link } from "react-router-dom";
import ConditionalWrapper from "../helper/ConditionalWrapper";
import styles from './LargeButton.module.css';

const LargeButton = (props) => {
  const { link, classes, children } = props;

  return (
    <ConditionalWrapper 
      condition={link !== '' || link !== undefined}
      wrapperTrue={children => <Link to={link} className={`${styles['large-button']} ${classes}`}>{children}</Link>}
      wrapperFalse={children => <button className={classes}>{children}</button>}
    >
      {children}
    </ConditionalWrapper>
  )
}

export default LargeButton;