import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  )
};

export default Layout;