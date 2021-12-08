import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import loadable from '@loadable/component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';

const App = () => {
    const theme = createTheme();
    const Home = loadable(() => import('../Home'));

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <AppContextProvider>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </AppContextProvider>
            </StylesProvider>
        </ThemeProvider>
    );
};

export default App;