import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import TimesTable from './pages/times-table'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/times-table" element={<TimesTable />} />
        </Routes>
    </Router>
  )
}

export default App
