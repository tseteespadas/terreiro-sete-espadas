import { Suspense } from "react";
import Theme from './styles/theme';
import Routes from './routes';
import SuspenseLoader from './components/v2/conteiners/SuspenseLoader';

function App() {
  
  return (
    <Theme>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes />
      </Suspense>
    </Theme>
  );
}

export default App;
