import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
// import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import dark from './theme/dark';
import light from './theme/light';
import Login from './pages/Login';


const App:React.FC = () => {
  // const [theme, setTheme] = usePersistedState('theme', dark);
  const [theme, setTheme] = useState(() => {
      const storageValue = localStorage.getItem('theme2')

      if (storageValue) {
        return JSON.parse(storageValue)
      }

      return dark;
  });

  const toggleTheme = () => {
    console.log('trocou')
    setTheme(theme.title === 'light' ? dark : light );
    // localStorage.setItem('theme2', JSON.stringify(theme.title === 'light' ? light : dark));
  }

  useEffect(() => {
    localStorage.setItem('theme2', JSON.stringify(theme.title === 'light' ? light : dark));
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
