import { HeroUIProvider } from '@heroui/react';
import Router from './routes/router';

const App = () => {
  return (
    <HeroUIProvider>
      <Router />
    </HeroUIProvider>
  );
};

export default App;
