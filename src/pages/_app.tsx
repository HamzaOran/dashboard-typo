import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log('Toogle yapıyo');
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />

          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
