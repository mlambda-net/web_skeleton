import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Store from "./pages/store";
import Login from "./pages/login";


class App extends React.Component {
  render = () => (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}


export default App;
