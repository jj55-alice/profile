import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TimesTable from './pages/times-table'

const App = () => {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<TimesTable />} />
        </Routes>
    </Router>
  )
}

export default App
