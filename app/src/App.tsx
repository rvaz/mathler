import { Global } from '@emotion/react';
import { globalStyles } from '@theme/global';
import { Game } from '@mathler/pages';

function App() {
  // TODO: handle language change between EN and TLH
  const lang = 'en';

  return (
    <>
      <Global styles={globalStyles} />
      <Game />
    </>
  );
}

export default App;
