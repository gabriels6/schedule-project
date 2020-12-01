import './App.css';
import {Home,Footer,Login} from './containers';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Login />
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
