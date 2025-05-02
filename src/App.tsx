import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimesTable from './pages/times-table';
import { HeroUIProvider } from '@heroui/react';
import Layout from './components/layout/layout';

const App = () => {
  return (
    <HeroUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<TimesTable />} />
          </Route>
        </Routes>
      </Router>
    </HeroUIProvider>
  );
};

export default App;
