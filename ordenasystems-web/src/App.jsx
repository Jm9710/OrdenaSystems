function App() {
  return (
    <main className="contenedor">
      <div className="fondo-blur fondo-1"></div>
      <div className="fondo-blur fondo-2"></div>

      <section className="card">
        <div className="icono-box">
          <span className="icono">🚧</span>
        </div>

        <p className="badge">OrdenaSystems</p>

        <h1>
          Nuestro sitio web está
          <span> en construcción</span>
        </h1>

        <p className="descripcion">
          Estamos preparando una experiencia moderna para presentar nuestras
          soluciones digitales.
        </p>
      </section>
    </main>
  )
}

export default App