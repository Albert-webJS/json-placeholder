import { ManageRequestProps } from "./ManageRequest.props";

import JsonImage from "../../assets/json.png";
import classes from "./ManageRequest.module.css";

export const ManageRequest = ({
  handlePostRequest,
}: ManageRequestProps): JSX.Element => {
  const handlePostJsonInfo = (): void => {
    handlePostRequest && handlePostRequest();
  };

  return (
    <div className={classes.manageDisplay}>
      <div className={classes.boxImage}>
        <img className={classes.image} src={JsonImage} alt="json" />
      </div>
      <button
        className={classes.manageBtn}
        onClick={handlePostJsonInfo}
      >
        POST placeholder
      </button>
    </div>
  );
};
