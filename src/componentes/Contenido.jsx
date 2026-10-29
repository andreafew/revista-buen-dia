import { dibujo } from '../datos.js'

// Dibuja cada elemento del contenido de una sección.
// Puede ser un párrafo (texto) o un bloque especial
// (destacado, etiquetas, fórmula o lista de control).
export default function Contenido({ elemento }) {
  if (typeof elemento === 'string') {
    return <p>{elemento}</p>
  }

  if (elemento.destacado) {
    return <blockquote className="destacado">{elemento.destacado}</blockquote>
  }

  if (elemento.etiquetas) {
    return (
      <ul className="etiquetas">
        {elemento.etiquetas.map((texto) => (
          <li key={texto}>{texto}</li>
        ))}
      </ul>
    )
  }

  if (elemento.formula) {
    return (
      <div className="formula">
        {elemento.formula.map((parte, i) => (
          <div className="formula__parte" key={parte.texto}>
            {i > 0 && <span className="formula__mas" aria-hidden="true">+</span>}
            <figure>
              <img src={dibujo(parte.dibujo)} alt="" />
              <figcaption>{parte.texto}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    )
  }

  if (elemento.checklist) {
    return (
      <ul className="checklist">
        {elemento.checklist.map((texto) => (
          <li key={texto}>
            <span className="checklist__tilde" aria-hidden="true">✓</span>
            {texto}
          </li>
        ))}
      </ul>
    )
  }

  return null
}
