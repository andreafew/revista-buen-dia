// Escudo del Instituto Almafuerte, redibujado en SVG (vectorial):
// se ve nítido en cualquier tamaño, desde el celular hasta un proyector.

export default function Escudo({ tamanio = 160, className = '' }) {
  return (
    <svg
      className={className}
      width={tamanio}
      height={tamanio * 0.9}
      viewBox="0 0 400 360"
      role="img"
      aria-label="Escudo del Instituto Almafuerte"
    >
      <defs>
        {/* Forma del escudo, se usa para el relleno y para recortar */}
        <path
          id="forma-escudo"
          d="M62 62 Q128 22 200 52 Q272 22 338 62 L344 182 Q342 280 200 344 Q58 280 56 182 Z"
        />
        <clipPath id="recorte-escudo">
          <use href="#forma-escudo" />
        </clipPath>
        {/* Curva sobre la que se apoya el texto de la cinta */}
        <path id="curva-cinta" d="M58 146 Q200 176 342 136" />
      </defs>

      {/* Puntas de la cinta (quedan detrás del escudo) */}
      <polygon points="66,112 6,116 30,138 8,162 66,158" fill="#121212" />
      <polygon points="334,100 394,100 370,124 394,148 334,146" fill="#121212" />

      {/* Cuerpo del escudo en dos tonos de azul */}
      <use href="#forma-escudo" fill="var(--escudo-azul, #2456B8)" />
      <rect
        x="200" y="0" width="200" height="360"
        fill="var(--escudo-azul-oscuro, #1C47A0)"
        clipPath="url(#recorte-escudo)"
      />
      <use href="#forma-escudo" fill="none" stroke="#0B1530" strokeWidth="9" strokeLinejoin="round" />

      {/* Cinta negra */}
      <path
        d="M52 124 Q200 154 348 114 L348 158 Q200 198 52 168 Z"
        fill="#121212"
      />
      <path
        d="M52 124 Q200 154 348 114"
        fill="none" stroke="#3a3a3a" strokeWidth="2"
      />

      {/* Textos */}
      <g fill="#FFFFFF" textAnchor="middle">
        <text
          x="200" y="104"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700" fontSize="19" letterSpacing="0.5"
        >
          Asociación Cooperadora
        </text>
        <text
          fontFamily="'Great Vibes', 'Brush Script MT', cursive"
          fontSize="34"
        >
          <textPath href="#curva-cinta" startOffset="50%" textAnchor="middle">
            Instituto Almafuerte
          </textPath>
        </text>
        <text
          x="200" y="204"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="18" letterSpacing="3" opacity="0.9"
        >
          1953
        </text>
        <text
          x="200" y="280"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700" fontSize="84" letterSpacing="2"
          stroke="#0B1530" strokeWidth="2.5" paintOrder="stroke"
        >
          IAP
        </text>
        <text
          x="200" y="307"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700" fontSize="17" letterSpacing="1"
        >
          Secundaria
        </text>
      </g>
    </svg>
  )
}
