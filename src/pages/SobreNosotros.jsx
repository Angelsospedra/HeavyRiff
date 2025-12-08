import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const values = [
  {
    id: 1,
    emoji: '🎯',
    title: 'Precisión Artesanal',
    desc: 'Cada guitarra es construida a mano por maestros luthiers con décadas de experiencia, garantizando perfectción en cada aspecto.'
  },
  {
    id: 2,
    emoji: '🎵',
    title: 'Sonido Auténtico',
    desc: 'Buscamos capturar el alma del rock, metal y la música eléctrica a través de un sonido puro y sin compromisos.'
  },
  {
    id: 3,
    emoji: '♻️',
    title: 'Sostenibilidad',
    desc: 'Utilizamos maderas certificadas y prácticas responsables para crear instrumentos que duran generaciones.'
  },
  {
    id: 4,
    emoji: '🤝',
    title: 'Comunidad',
    desc: 'Apoyamos a músicos emergentes y organizamos eventos que celebran la cultura de la música en vivo.'
  }
]

export default function SobreNosotros() {
  return (
    <>
      <Header activePage="sobre-nosotros" />
      
      <div className="hero-image">
        <div className="guitar-emoji">🎸</div>
      </div>

      <div className="content-section">
        <h1>Nuestra Historia</h1>
        
        <div className="text-block">
          <p>
            <span className="highlight">HeavyRiff</span> nació en 2015 de la pasión de un grupo de músicos y luthiers que compartían una visión común: crear guitarras eléctricas de calidad excepcional que superaran las expectativas de los músicos más exigentes del mundo. Lo que comenzó como un pequeño taller artesanal en Valencia se ha convertido en una marca reconocida internacionalmente, respetada por su compromiso inquebrantable con la excelencia.
          </p>
        </div>

        <div className="text-block">
          <p>
            Cada guitarra HeavyRiff es más que un instrumento; es una obra de arte meticulosamente elaborada. Nuestro equipo de expertos luthiers dedica incontables horas a seleccionar los mejores materiales, desde maderas importadas de todo el mundo hasta componentes electrónicos de la más alta precisión. Cada detalle, desde el curvado del cuerpo hasta el ajuste fino de las pastillas, recibe atención personal para garantizar que cada instrumento que sale de nuestro taller es una joya única.
          </p>
        </div>

        <div className="text-block">
          <p>
            Lo que nos diferencia no es solo la calidad de nuestras guitarras, sino nuestro <span className="highlight">profundo entendimiento de lo que necesitan los músicos</span>. Colaboramos con artistas profesionales, desde leyendas del rock hasta innovadores contemporáneos, para asegurar que nuestros instrumentos no solo suenan increíble, sino que también son herramientas que potencian la creatividad musical. Cada modelo en nuestra colección ha sido probado, refinado y perfeccionado en sesiones de estudio reales y conciertos en vivo.
          </p>
        </div>

        <h1 style={{ marginTop: '3rem' }}>Nuestros Valores</h1>

        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <h3>{value.emoji} {value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-block">
          <p>
            Hoy, HeavyRiff es sinónimo de <span className="highlight">excelencia musical sin compromisos</span>. Nuestras guitarras se encuentran en manos de profesionales en estudios de grabación de clase mundial, en escenarios de festivales internacionales, y en las salas de práctica de apasionados músicos que demandan lo mejor. Continuamos innovando, experimentando con nuevas técnicas de construcción y explorando sonoridades que empujan los límites de lo posible.
          </p>
        </div>

        <div className="text-block">
          <p>
            Pero más allá de los números y reconocimientos, lo que realmente nos impulsa es la conexión emocional que existe entre un músico y su guitarra. Cada instrumento HeavyRiff cuenta una historia, y nos sienta honrados de ser parte de la jornada musical de nuestros clientes.
          </p>
        </div>

        <Link to="/personalizar" className="cta-button">Descubre Nuestras Guitarras</Link>
      </div>

      <Footer />
    </>
  )
}