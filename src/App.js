import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import InvestorsData from './components/InvestorsData';
import Investor from './components/Investor';
import ErrorPage from './components/ErrorPage';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <section>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/investors" element={<InvestorsData />} />
            <Route path="/investor/:firmId" element={<Investor />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
