import React from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../../store';

type StoreProviderProps = React.PropsWithChildren<Record<string, unknown>>;

const store = makeStore();

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
