import React, { Suspense } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "./redux/store";

import Routers from "./routers/Routers";

// const Routers = React.lazy(() => import("./routers/Routers"));

const persistorStore = persistStore(store);

function App() {
  return (
    <>
      <React.StrictMode>
        <Suspense fallback={<div></div>}>
          <Provider store={store}>
            <PersistGate persistor={persistorStore}>
              <Routers />
            </PersistGate>
          </Provider>
        </Suspense>
      </React.StrictMode>
    </>
  );
}

export default App;
