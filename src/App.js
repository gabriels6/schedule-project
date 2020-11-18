import './App.css';
import {Home} from './containers';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;
