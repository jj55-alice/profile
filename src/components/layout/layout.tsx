import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
  return (
    <div className="dark bg-background text-foreground">
      <Nav />
      <div className="h-[calc(100vh-60px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
