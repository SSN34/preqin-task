import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import Welcome from './pages/Welcome';
import Investors from './pages/Investors';
import Investor from './pages/Investor';
import { Section } from './components/StyledComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Section>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investor/:firmId" element={<Investor />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Section>
    </div>
  );
}

export default App;
