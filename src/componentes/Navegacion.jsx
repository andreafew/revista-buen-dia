// Barra fija de abajo: botones para pasar de página.

export default function Navegacion({ actual, total, anterior, siguiente, alIndice }) {
  const esPrimera = actual === 0
  const esUltima = actual === total - 1
  const progreso = ((actual + 1) / total) * 100

  return (
    <nav className="nav" aria-label="Pasar de página">
      <div className="nav__progreso" style={{ width: `${progreso}%` }} />
      <div className="nav__contenido">
        <button className="nav__boton" onClick={anterior} disabled={esPrimera} aria-label="Página anterior">
          <span aria-hidden="true">←</span>
          <span className="nav__texto">Anterior</span>
        </button>

        <div className="nav__centro">
          <button className="nav__indice" onClick={alIndice}>Índice</button>
          <span className="nav__contador">
            {actual + 1} / {total}
          </span>
        </div>

        <button className="nav__boton nav__boton--principal" onClick={siguiente} disabled={esUltima} aria-label="Página siguiente">
          <span className="nav__texto">{esPrimera ? 'Abrir revista' : 'Siguiente'}</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>
  )
}
