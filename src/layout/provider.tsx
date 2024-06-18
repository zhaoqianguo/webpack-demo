import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

const StoreContext = React.createContext(null);

export const StoreProvider = ({ store, children }) => (
  <StoreContext.Provider value={store}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);
