import { BrowserRouter as Router, Routes, Route , Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';


function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<CandidateSearch />} />
            <Route path="SavedCandidates" element={<SavedCandidates />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;