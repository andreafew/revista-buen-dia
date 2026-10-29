# Buen Día · Revista digital

Revista digital sobre **desayunos y meriendas que recomendamos**, parte de la investigación
*Alimentación, nutrición y etiquetado*.

- **Alumnos:** Lara Moyano y Luciano Leichner
- **Curso:** 3° C
- **Materia:** Construcción de la Ciudadanía
- **Escuela:** Instituto Almafuerte

Hecha con React y Vite.

---

## 1. Lo que tiene que estar instalado en la compu

| Programa | Para qué sirve | Cómo verificar que está |
|---|---|---|
| **Node.js** (versión LTS) | Ejecuta el proyecto | En una terminal: `node -v` |
| **Git** | Sube el proyecto a GitHub | En una terminal: `git --version` |
| **Visual Studio Code** | Editar el código | Ya lo tienen |
| **Cuenta de GitHub** | Publicar la página | Crearla gratis en github.com |

Si alguno de los comandos dice que "no se reconoce", hay que instalar ese programa:
Node.js desde **nodejs.org** (botón LTS) y Git desde **git-scm.com**. Después de instalar,
cerrar y volver a abrir VS Code.

---

## 2. Abrir el proyecto en VS Code

1. Descomprimir el archivo `revista-buen-dia.zip` en una carpeta fácil de encontrar, por ejemplo en *Documentos*.
2. En VS Code: **Archivo → Abrir carpeta…** y elegir la carpeta `revista-buen-dia`.
3. Abrir la terminal: **Terminal → Nueva terminal**.
4. Escribir este comando **una sola vez** (descarga lo que necesita el proyecto, tarda un minuto):

   ```
   npm install
   ```

5. Para ver la revista, escribir:

   ```
   npm run dev
   ```

   Aparece una dirección como `http://localhost:5173`. Con **Ctrl + clic** sobre ella se abre en el navegador.
   Mientras está abierta, cada cambio que guarden se ve al instante.
6. Para cortarlo, ir a la terminal y apretar **Ctrl + C**.

---

## 3. Qué hay en cada archivo

```
revista-buen-dia/
├── index.html                 ← página base (título de la pestaña)
├── package.json               ← lista de programas que usa el proyecto
├── vite.config.js             ← configuración de Vite
├── .github/workflows/
│   └── deploy.yml             ← publica la revista en GitHub Pages
├── public/
│   ├── escudo.svg             ← ícono de la pestaña
│   └── dibujos/               ← los dibujos, ya sin el fondo
└── src/
    ├── main.jsx               ← punto de arranque
    ├── App.jsx                ← lista de páginas y botones para pasarlas
    ├── datos.js               ← TODOS LOS TEXTOS de la revista
    ├── estilos.css            ← colores, tipografías y diseño para celular
    └── componentes/
        ├── Portada.jsx        ← tapa
        ├── Indice.jsx         ← índice con enlaces
        ├── PaginaArticulo.jsx ← páginas de los artículos
        ├── Contenido.jsx      ← párrafos, destacados, etiquetas…
        ├── Ejemplos.jsx       ← ejemplos de desayunos y meriendas
        ├── Receta.jsx         ← cada receta (con ingredientes para tildar)
        ├── Contratapa.jsx     ← créditos
        ├── Navegacion.jsx     ← barra de abajo con los botones
        └── Escudo.jsx         ← escudo del colegio, redibujado
```

**Para corregir un texto** solo hay que cambiar `src/datos.js`. Los textos están entre comillas
simples (`'...'`); hay que cuidar de no borrar las comillas ni las comas del final.

**Para cambiar los colores**, están al principio de `src/estilos.css`.

---

## 4. Publicar la revista en internet (GitHub Pages)

### La primera vez

1. En VS Code, abrir el panel **Control de código fuente** (el ícono de las ramitas, a la izquierda, o **Ctrl + Shift + G**).
2. Hacer clic en **Publicar en GitHub** (*Publish to GitHub*).
3. Si lo pide, iniciar sesión en GitHub desde el navegador y autorizar a VS Code.
4. Elegir **repositorio público** (*public repository*). Dejar el nombre `revista-buen-dia`.
5. Si pregunta qué archivos incluir, dejar todos marcados y aceptar.

> Si aparece un error que pide el nombre y el correo, escribir en la terminal (con sus datos):
> ```
> git config --global user.name "Nombre Apellido"
> git config --global user.email "su-correo@ejemplo.com"
> ```
> y volver a hacer clic en **Publicar en GitHub**.

6. Entrar al repositorio en **github.com** → pestaña **Settings** → menú **Pages**.
7. En **Build and deployment → Source**, elegir **GitHub Actions**.
8. Ir a la pestaña **Actions**. Si la tarea "Publicar revista" aparece con una ❌ (porque se ejecutó antes
   del paso 7), entrar en ella y tocar **Re-run all jobs**.
9. Cuando aparezca el tilde verde ✅ (tarda 1 o 2 minutos), el link queda en **Settings → Pages**. Tiene esta forma:

   ```
   https://SU-USUARIO.github.io/revista-buen-dia/
   ```

   Ese es el link para compartir.

### Cada vez que hagan un cambio

1. Guardar los archivos.
2. En **Control de código fuente**, escribir un mensaje corto (por ejemplo, *Corrijo un texto*).
3. Tocar **Confirmar** (*Commit*) y después **Sincronizar cambios** (*Sync Changes*).
4. En uno o dos minutos, la página publicada se actualiza sola.

---

## 5. La versión para Google Docs

El archivo `Buen_Dia_revista.docx` tiene todo el contenido de la revista (textos, recetas y dibujos).

1. Entrar a **drive.google.com** → **Nuevo → Subir archivo** y elegir `Buen_Dia_revista.docx`.
2. Hacer doble clic en el archivo subido y, arriba, tocar **Abrir con Documentos de Google**.
3. Para compartirlo: botón **Compartir** → en *Acceso general* elegir **Cualquier persona que tenga el vínculo** → **Copiar vínculo**.

---

## 6. Problemas comunes

| Problema | Solución |
|---|---|
| `npm` no se reconoce como comando | Falta instalar Node.js. Instalarlo y reiniciar VS Code. |
| La terminal dice que falta un módulo | Ejecutar `npm install` otra vez. |
| La página publicada se ve en blanco | Revisar que en **Settings → Pages** esté elegido **GitHub Actions**. |
| La tarea de **Actions** tiene una ❌ | Entrar, ver el error y tocar **Re-run all jobs**. |
| No veo los cambios en la página publicada | Esperar 2 minutos y recargar con **Ctrl + F5**. |
