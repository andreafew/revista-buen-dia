import { revista, dibujo } from '../datos.js'
import Escudo from './Escudo.jsx'

export default function Contratapa() {
  return (
    <div className="contratapa">
      <Escudo tamanio={170} />
      <h2 className="contratapa__titulo">{revista.nombre}</h2>
      <p className="contratapa__bajada">{revista.bajada}</p>

      <dl className="contratapa__datos">
        <div><dt>Realizada por</dt><dd>{revista.alumnos.join(' y ')}</dd></div>
        <div><dt>Curso</dt><dd>{revista.curso}</dd></div>
        <div><dt>Materia</dt><dd>{revista.materia}</dd></div>
        <div><dt>Escuela</dt><dd>{revista.escuela}</dd></div>
        <div><dt>Edición</dt><dd>{revista.edicion}</dd></div>
      </dl>

      <div className="contratapa__dibujos" aria-hidden="true">
        {['agua', 'pan', 'queso', 'palta', 'licuado'].map((n) => (
          <img key={n} src={dibujo(n)} alt="" />
        ))}
      </div>
      <p className="contratapa__gracias">¡Gracias por leernos! Buen día y buen provecho.</p>
    </div>
  )
}
