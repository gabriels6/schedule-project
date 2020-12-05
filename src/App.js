import './App.css';
import {Home,Footer,Login} from './containers';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import SwitchControl from './routes/index';
import {BrowserRouter as Router, Redirect,Switch, Route, Link} from 'react-router-dom';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <SwitchControl/>
          <Redirect to = "/Login"/>
          <Footer/>
        </Router>
    </ThemeProvider>
  );
}

export default App;
