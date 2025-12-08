import Header from '../components/Header'
import Footer from '../components/Footer'

const guitars = [
  {
    id: 1,
    name: 'Riff Master Pro',
    price: '$1,299',
    desc: 'Sonido profundo y versátil para todo estilo musical'
  },
  {
    id: 2,
    name: 'Thunder Edge',
    price: '$1,599',
    desc: 'Diseño agresivo con sonido cristalino y potente'
  },
  {
    id: 3,
    name: 'Midnight Shredder',
    price: '$1,799',
    desc: 'Para los puristas del metal extremo y técnica'
  },
  {
    id: 4,
    name: 'Fusion Classic',
    price: '$999',
    desc: 'Versatilidad y calidad premium a precio accesible'
  }
]

export default function Tienda() {
  return (
    <>
      <Header activePage="tienda" />
      
      <div className="hero">
        <h1>HEAVYRIFF</h1>
        <p>Guitarras eléctricas premium para músicos exigentes</p>
      </div>

      <div className="container">
        <h2>Nuestras Guitarras</h2>
        <div className="guitars-grid">
          {guitars.map(guitar => (
            <div key={guitar.id} className="guitar-card">
              <div className="guitar-image">🎸</div>
              <div className="guitar-info">
                <div className="guitar-name">{guitar.name}</div>
                <div className="guitar-price">{guitar.price}</div>
                <div className="guitar-desc">{guitar.desc}</div>
                <button className="btn">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}