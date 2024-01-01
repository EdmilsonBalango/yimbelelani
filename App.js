import { DataProvider } from './src/context';
import Routes from './src/routes';

export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
