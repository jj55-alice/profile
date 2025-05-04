import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import TimesTable from '../pages/times-table';
import WorldFlags from '../pages/world-flags';
import Clock from '../pages/clock';

export const MENU_ITEMS = [
  { value: 'TIMES_TABLE', name: '구구단', link: '/', component: <TimesTable /> },
  { value: 'WORLD_FLAGS', name: '세계 국기', link: '/world-flags', component: <WorldFlags /> },
  { value: 'CLOCK', name: '시계', link: '/clock', component: <Clock /> },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          {MENU_ITEMS.map(item => (
            <Route path={item.link} element={item.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
