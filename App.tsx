import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {TodoAppContainer} from './src/screens/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>
  );
};

export default App;
