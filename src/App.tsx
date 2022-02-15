import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import allRoutes from 'routes/index';

const App = (): JSX.Element => (
  <div className="App">
    <Routes>
      {allRoutes.map(({ path, component }) => (
        <Route element={component} path={path} />
      ))}
    </Routes>
  </div>
);

export default App;
