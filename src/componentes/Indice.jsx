import { revista } from '../datos.js'

// Agrupa las páginas por sección y muestra un enlace a cada una.
export default function Indice({ paginas, irA }) {
  // Saltear portada (0) e índice (1)
  const grupos = []
  paginas.forEach((pagina, numero) => {
    if (numero < 2) return
    let grupo = grupos.find((g) => g.seccion === pagina.seccion)
    if (!grupo) {
      grupo = { seccion: pagina.seccion, entradas: [] }
      grupos.push(grupo)
    }
    grupo.entradas.push({ ...pagina, numero })
  })

  return (
    <div className="indice">
      <h2 className="titulo-pagina">Índice</h2>
      <p className="indice__intro">
        Dos artículos sobre <em>{revista.bajada.toLowerCase()}</em> y cuatro recetas de meriendas
        saludables. Tocá cualquier título para ir a esa página.
      </p>

      <div className="indice__grupos">
        {grupos.map((grupo) => (
          <section key={grupo.seccion} className="indice__grupo">
            <h3 className="indice__seccion">{grupo.seccion}</h3>
            <ol className="indice__lista">
              {grupo.entradas.map((entrada) => (
                <li key={entrada.numero}>
                  <button
                    className={`indice__entrada ${entrada.esInicioDeArticulo ? 'indice__entrada--principal' : ''}`}
                    onClick={() => irA(entrada.numero)}
                  >
                    <span>{entrada.titulo}</span>
                    <span className="indice__puntos" aria-hidden="true" />
                    <span className="indice__numero">{entrada.numero + 1}</span>
                  </button>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
