import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Personalizar() {
  const [selectedColor, setSelectedColor] = useState('#1d1d1d')
  const [bodyType, setBodyType] = useState('Stratocaster')
  const [pickups, setPickups] = useState(0)
  const [frets, setFrets] = useState(0)

  const pickupPrice = [0, 150, 250, 100]
  const fretsPrice = [0, 100, 200]
  const basePrice = 1299

  const totalPrice = basePrice + pickupPrice[pickups] + fretsPrice[frets]

  const colors = [
    '#1d1d1d',
    '#22333B',
    '#8B0000',
    '#2a5a6a',
    '#4a4a4a',
    '#1a3a3a'
  ]

  return (
    <>
      <Header activePage="personalizar" />
      
      <div className="hero">
        <h1>PERSONALIZA TU GUITARRA</h1>
        <p>Crea el instrumento perfecto para tu estilo</p>
      </div>

      <div className="container">
        <h2>Crea tu guitarra perfecta</h2>
        <div className="customize-section">
          <div className="customize-preview">
            <div className="preview-guitar">🎸</div>
            <p style={{ color: '#999', fontWeight: 500 }}>Tu guitarra personalizada</p>
          </div>

          <div className="customize-options">
            <div className="option-group">
              <label>Color del cuerpo</label>
              <div className="color-options">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Tipo de cuerpo</label>
              <select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
                <option>Stratocaster</option>
                <option>Telecaster</option>
                <option>Les Paul</option>
                <option>SG</option>
                <option>Flying V</option>
              </select>
            </div>

            <div className="option-group">
              <label>Pastillas</label>
              <select value={pickups} onChange={(e) => setPickups(Number(e.target.value))}>
                <option value={0}>Single Coil Vintage (+$0)</option>
                <option value={1}>Humbucker Clásico (+$150)</option>
                <option value={2}>Humbucker Activo (+$250)</option>
                <option value={3}>P90 Retro (+$100)</option>
              </select>
            </div>

            <div className="option-group">
              <label>Trastes</label>
              <select value={frets} onChange={(e) => setFrets(Number(e.target.value))}>
                <option value={0}>22 Trastes Estándar (+$0)</option>
                <option value={1}>24 Trastes (+$100)</option>
                <option value={2}>Jumbo Deluxe (+$200)</option>
              </select>
            </div>

            <div className="price-total">
              <p>Precio estimado</p>
              <h3>${totalPrice.toLocaleString()}</h3>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}