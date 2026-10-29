import { useState } from 'react'
import { dibujo, recetasIntro } from '../datos.js'

// Una receta: ingredientes que se pueden tildar y pasos numerados.
export default function Receta({ receta, numero }) {
  const [tildados, setTildados] = useState([])

  function alternar(ingrediente) {
    if (tildados.includes(ingrediente)) {
      setTildados(tildados.filter((i) => i !== ingrediente))
    } else {
      setTildados([...tildados, ingrediente])
    }
  }

  return (
    <div className="receta">
      {numero === 1 && (
        <p className="receta__seccion">
          <strong>{recetasIntro.titulo}.</strong> {recetasIntro.bajada}
        </p>
      )}
      <header className="receta__cabecera">
        <div className="receta__dibujos" aria-hidden="true">
          {receta.dibujos.map((nombre) => (
            <img key={nombre} src={dibujo(nombre)} alt="" />
          ))}
        </div>
        <div>
          <span className="articulo__numero">Receta {numero} de 4</span>
          <h2 className="receta__nombre">{receta.nombre}</h2>
          <p className="receta__descripcion">{receta.descripcion}</p>
          <ul className="receta__etiquetas">
            {receta.etiquetas.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
      </header>

      <div className="receta__cuerpo">
        <section className="receta__ingredientes">
          <h3>Ingredientes</h3>
          <p className="receta__ayuda">Tocá cada uno cuando lo tengas listo.</p>
          <ul>
            {receta.ingredientes.map((ingrediente) => {
              const listo = tildados.includes(ingrediente)
              return (
                <li key={ingrediente}>
                  <label className={listo ? 'ingrediente ingrediente--listo' : 'ingrediente'}>
                    <input type="checkbox" checked={listo} onChange={() => alternar(ingrediente)} />
                    <span>{ingrediente}</span>
                  </label>
                </li>
              )
            })}
          </ul>
          <p className="receta__contador">
            {tildados.length} de {receta.ingredientes.length} listos
          </p>
        </section>

        <section className="receta__pasos">
          <h3>Preparación</h3>
          <ol>
            {receta.pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
