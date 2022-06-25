import React from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../../store';

type StoreProviderProps = React.PropsWithChildren<Record<string, unknown>>;

const store = makeStore();

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default StoreProvider;
