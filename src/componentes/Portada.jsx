import { revista, dibujo, articulo1, articulo2, recetas } from '../datos.js'
import Escudo from './Escudo.jsx'

// Dibujos que rodean el título de la portada
const collage = ['licuado', 'tostada-palta', 'marcianito', 'queso', 'tostada-huevo', 'avena', 'leche', 'palta']

export default function Portada() {
  return (
    <div className="portada">
      <div className="portada__arriba">
        <Escudo tamanio={92} className="portada__escudo" />
        <div className="portada__datos-escuela">
          <span>{revista.escuela}</span>
          <span>{revista.materia}</span>
        </div>
        <span className="portada__edicion">{revista.edicion}</span>
      </div>

      <div className="portada__centro">
        <p className="portada__antetitulo">{revista.investigacion}</p>
        <p className="portada__revista">Revista</p>
        <h1 className="portada__titulo">{revista.nombre}</h1>
        <p className="portada__bajada">{revista.bajada}</p>
      </div>

      <div className="portada__collage" aria-hidden="true">
        {collage.map((nombre, i) => (
          <img key={nombre} src={dibujo(nombre)} alt="" className={`portada__dibujo portada__dibujo--${i}`} />
        ))}
      </div>

      <ul className="portada__temas">
        <li><strong>Artículo 1</strong> {articulo1.titulo}</li>
        <li><strong>Artículo 2</strong> {articulo2.titulo}</li>
        <li><strong>Recetas</strong> {recetas.length} meriendas saludables</li>
      </ul>

      <div className="portada__autores">
        <span>{revista.alumnos.join(' - ')}</span>
        <span className="portada__curso">{revista.curso}</span>
      </div>
    </div>
  )
}
