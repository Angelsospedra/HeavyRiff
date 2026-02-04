import { Link } from 'react-router-dom'

export default function Header({ activePage }) {
  return (
    <header>
      <Link to="/" className="logo">🎸 HeavyRiff</Link>
      <nav>
        <Link to="/tienda" className={activePage === 'tienda' ? 'active' : ''}>Tienda</Link>
        <Link to="/personalizar" className={activePage === 'personalizar' ? 'active' : ''}>Personalizar</Link>
        <Link to="/sobre-nosotros" className={activePage === 'sobre-nosotros' ? 'active' : ''}>Sobre nosotros</Link>
      </nav>
    </header>
  )
}