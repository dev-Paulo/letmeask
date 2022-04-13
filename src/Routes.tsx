import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/new" element={<NewRoom />} />     
      </Routes>
    </Router>
  )
}