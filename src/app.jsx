import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Tienda from './pages/Tienda'
import Personalizar from './pages/Personalizar'
import SobreNosotros from './pages/SobreNosotros'

export default function App() {
  return (
    <Router basename="/heavyriff">
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/personalizar" element={<Personalizar />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </Router>
  )
}