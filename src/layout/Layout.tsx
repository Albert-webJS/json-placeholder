import { LayoutProps } from "./Layout.props";
import classes from './Layout.module.css'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={classes.layout}>{children}</div>;
};
