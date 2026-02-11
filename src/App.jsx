import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LeadForm from "./pages/LeadForm"
import LeadView from "./pages/LeadView"
import LeadList from "./pages/LeadList"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LeadForm />} />
          <Route path="/lead" element={<LeadList />} />
          <Route path="/lead/:id" element={<LeadView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
