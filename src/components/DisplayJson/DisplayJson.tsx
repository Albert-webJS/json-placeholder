import { DisplayJsonProps } from "./DisplayJson.props";
import classes from "./DisplayJson.module.css";

export const DisplayJson = ({ data }: DisplayJsonProps): JSX.Element => {
  return (
    <div className={classes.displayJson}>
      <p className={classes.contentJson}>
        {Object.keys(data).length === 0 ? "JSON here" : JSON.stringify(data)}
      </p>
    </div>
  );
};
