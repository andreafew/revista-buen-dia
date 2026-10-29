import { useEffect, useRef, useState } from 'react'
import { articulo1, articulo2, recetas } from './datos.js'
import Portada from './componentes/Portada.jsx'
import Indice from './componentes/Indice.jsx'
import PaginaArticulo from './componentes/PaginaArticulo.jsx'
import Ejemplos from './componentes/Ejemplos.jsx'
import Receta from './componentes/Receta.jsx'
import Contratapa from './componentes/Contratapa.jsx'
import Navegacion from './componentes/Navegacion.jsx'

// ------------------------------------------------------------
//  Lista de páginas de la revista, en orden.
//  Cada página tiene: la sección a la que pertenece, un título
//  (para el índice) y una función que dibuja su contenido.
// ------------------------------------------------------------
function armarPaginas() {
  const paginas = []

  paginas.push({ seccion: 'Portada', titulo: 'Portada', dibujar: () => <Portada /> })
  paginas.push({ seccion: 'Índice', titulo: 'Índice', dibujar: (p) => <Indice {...p} /> })

  for (const articulo of [articulo1, articulo2]) {
    articulo.paginas.forEach((pagina, n) => {
      const esPrimera = n === 0
      if (pagina.tipo === 'ejemplos') {
        paginas.push({
          seccion: `Artículo ${articulo.numero}`,
          titulo: 'Ejemplos de desayunos y meriendas',
          dibujar: () => <Ejemplos />,
        })
      } else {
        paginas.push({
          seccion: `Artículo ${articulo.numero}`,
          titulo: esPrimera ? articulo.titulo : pagina.secciones[0].pregunta,
          esInicioDeArticulo: esPrimera,
          dibujar: () => <PaginaArticulo articulo={articulo} pagina={pagina} esPrimera={esPrimera} />,
        })
      }
    })
  }

  recetas.forEach((receta, n) => {
    paginas.push({
      seccion: 'Recetas',
      titulo: receta.nombre,
      dibujar: () => <Receta receta={receta} numero={n + 1} />,
    })
  })

  paginas.push({ seccion: 'Créditos', titulo: 'Contratapa', dibujar: () => <Contratapa /> })

  return paginas
}

const PAGINAS = armarPaginas()

// Lee el número de página de la dirección (por ejemplo: ...#5)
function paginaDesdeDireccion() {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  if (Number.isNaN(n) || n < 1 || n > PAGINAS.length) return 0
  return n - 1
}

export default function App() {
  const [actual, setActual] = useState(paginaDesdeDireccion)
  const [direccion, setDireccion] = useState('adelante')
  const contenedor = useRef(null)
  const toqueInicio = useRef(null)

  // Cambiar de página (se usa en los botones, el teclado y el índice)
  function irA(numero) {
    if (numero < 0 || numero >= PAGINAS.length || numero === actual) return
    setDireccion(numero > actual ? 'adelante' : 'atras')
    setActual(numero)
  }

  // Cada vez que cambia la página: actualizar la dirección y volver arriba
  useEffect(() => {
    window.history.replaceState(null, '', `#${actual + 1}`)
    window.scrollTo({ top: 0 })
    contenedor.current?.focus({ preventScroll: true })
  }, [actual])

  // Flechas del teclado
  useEffect(() => {
    function alApretarTecla(e) {
      if (e.key === 'ArrowRight') irA(actual + 1)
      if (e.key === 'ArrowLeft') irA(actual - 1)
    }
    window.addEventListener('keydown', alApretarTecla)
    return () => window.removeEventListener('keydown', alApretarTecla)
  })

  // Deslizar con el dedo en el celular
  function alTocar(e) {
    toqueInicio.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  function alSoltar(e) {
    if (!toqueInicio.current) return
    const dx = e.changedTouches[0].clientX - toqueInicio.current.x
    const dy = e.changedTouches[0].clientY - toqueInicio.current.y
    toqueInicio.current = null
    // Solo cuenta si el movimiento es más horizontal que vertical
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      irA(dx < 0 ? actual + 1 : actual - 1)
    }
  }

  const pagina = PAGINAS[actual]
  const propsIndice = { paginas: PAGINAS, irA }

  return (
    <div className="app">
      <main
        ref={contenedor}
        tabIndex={-1}
        className="escenario"
        onTouchStart={alTocar}
        onTouchEnd={alSoltar}
      >
        <article
          key={actual}
          className={`hoja hoja--${direccion} ${actual === 0 ? 'hoja--portada' : ''}`}
          aria-label={`Página ${actual + 1} de ${PAGINAS.length}: ${pagina.titulo}`}
        >
          {actual > 0 && (
            <header className="hoja__cabecera">
              <span className="hoja__marca">Buen Día</span>
              <span className="hoja__seccion">{pagina.seccion}</span>
            </header>
          )}
          {pagina.dibujar(propsIndice)}
          {actual > 0 && <footer className="hoja__pie">{actual + 1}</footer>}
        </article>
      </main>

      <Navegacion
        actual={actual}
        total={PAGINAS.length}
        anterior={() => irA(actual - 1)}
        siguiente={() => irA(actual + 1)}
        alIndice={() => irA(1)}
      />
    </div>
  )
}
