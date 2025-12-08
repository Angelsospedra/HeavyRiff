import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <Link to="/">Tienda</Link>
          <Link to="/personalizar">Personalizar</Link>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <a href="#">Blog</a>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p><strong>Email:</strong> info@heavyriff.com</p>
          <p><strong>Teléfono:</strong> +34 900 123 456</p>
          <p><strong>Dirección:</strong> Valencia, España</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">TikTok</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 HeavyRiff. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}