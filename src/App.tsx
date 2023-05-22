import { useLayoutEffect } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from '@theme/global';
import { Game } from '@mathler/pages';
import { initStore, getSolution } from '@utils/store';

const solution = getSolution();

function App() {
  // TODO: handle language change between EN and TLH
  const lang = 'en';

  useLayoutEffect(() => {
    if (!solution) initStore();
  }, [solution]);

  return (
    <>
      <Global styles={globalStyles} />
      <Game />
    </>
  );
}

export default App;
