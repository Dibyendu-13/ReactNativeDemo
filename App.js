// App.js

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
