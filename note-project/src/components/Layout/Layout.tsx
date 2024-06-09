import styles from './Layout.module.css'
import { Outlet } from "react-router-dom";
import TItle from "../Title/Title";

const Layout = () => {
  return (
      <div className = {styles.container}>
        <TItle />
        <Outlet />
      </div>
  );
};

export default Layout;
