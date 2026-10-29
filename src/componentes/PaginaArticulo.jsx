import { dibujo } from '../datos.js'
import Contenido from './Contenido.jsx'

// Una página de un artículo: texto a la izquierda y dibujos al costado.
export default function PaginaArticulo({ articulo, pagina, esPrimera }) {
  return (
    <div className="articulo">
      {esPrimera && (
        <header className="articulo__portadilla">
          <span className="articulo__numero">Artículo {articulo.numero}</span>
          <h2 className="articulo__titulo">{articulo.titulo}</h2>
          <p className="articulo__bajada">{articulo.bajada}</p>
        </header>
      )}

      <div className="articulo__cuerpo">
        <div className="articulo__texto">
          {pagina.secciones.map((seccion) => (
            <section key={seccion.pregunta} className="seccion">
              <h3 className="seccion__pregunta">{seccion.pregunta}</h3>
              {seccion.contenido.map((elemento, i) => (
                <Contenido key={i} elemento={elemento} />
              ))}
            </section>
          ))}
        </div>

        <aside className="articulo__costado" aria-hidden="true">
          {pagina.dibujos.map((nombre, i) => (
            <img key={nombre + i} src={dibujo(nombre)} alt="" className={`costado__dibujo costado__dibujo--${i}`} />
          ))}
        </aside>
      </div>
    </div>
  )
}
