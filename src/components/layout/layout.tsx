import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
  return (
    <div className="bg-background text-foreground dark">
      <Nav />
      <div className="h-[calc(100vh-60px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
