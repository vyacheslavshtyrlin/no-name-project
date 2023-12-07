import React from "react";
import { store } from "../store/store";
import { Provider } from 'react-redux'

export const withStore = (component: () => React.ReactNode) => () => {
  return (
    <Provider store={store}>
      {component()}
    </Provider>
  );
};
