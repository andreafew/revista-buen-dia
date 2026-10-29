import { ejemplos, dibujo } from '../datos.js'

function Bloque({ datos, tipo }) {
  return (
    <section className={`ejemplos__bloque ejemplos__bloque--${tipo}`}>
      <h3 className="seccion__pregunta">{datos.titulo}</h3>
      <p>{datos.intro}</p>
      <ol className="ejemplos__lista">
        {datos.opciones.map((opcion, i) => (
          <li key={opcion.texto} className="ejemplos__tarjeta">
            <span className="ejemplos__opcion">Opción {i + 1}</span>
            <span className="ejemplos__texto">{opcion.texto}</span>
            {opcion.dibujo && <img src={dibujo(opcion.dibujo)} alt="" />}
          </li>
        ))}
      </ol>
      <p className="ejemplos__cierre">{datos.cierre}</p>
    </section>
  )
}

export default function Ejemplos() {
  return (
    <div className="ejemplos">
      <h2 className="titulo-pagina">Ideas para cada día</h2>
      <div className="ejemplos__columnas">
        <Bloque datos={ejemplos.desayunos} tipo="desayuno" />
        <Bloque datos={ejemplos.meriendas} tipo="merienda" />
      </div>
    </div>
  )
}
