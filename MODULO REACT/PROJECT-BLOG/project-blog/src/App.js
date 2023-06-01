import './App.css';
import { Card } from './components/card/card';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-contex';

function App() {
  return (
      <ThemeProvider>
        <ThemeTogglerButton />
        <Card />
        <Card />
        <Card />
      </ThemeProvider>
  );
}

export default App;