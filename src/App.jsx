import './App.css';

import { AxiosPage, ReduxPage } from './pages';

function App() {
  return <>
    <h1>React - Redux Toolkit and API Integration</h1>
    <div className='seperate'>
      <ReduxPage />
      <AxiosPage />
    </div>
  </>;
}

export default App;
