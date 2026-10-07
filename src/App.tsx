 import "./App.css";

type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  estado: string;
};

const tecnologias: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Git",
  "GitHub",
];

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Fila creativa",
    descripcion:
      "Proyecto para practicar el modelado de datos y la creación de interfaces mediante componentes reutilizables.",
    categoria: "Desarrollo web",
    estado: "Proyecto de práctica",
  },
  {
    id: 2,
    nombre: "Proyecto por agregar",
    descripcion:
      "Espacio reservado para presentar otro proyecto desarrollado durante el proceso de aprendizaje.",
    categoria: "Por definir",
    estado: "Por completar",
  },
  {
    id: 3,
    nombre: "Nuevo proyecto",
    descripcion:
      "Aquí se podrá mostrar una futura aplicación, sus funciones principales y las tecnologías utilizadas.",
    categoria: "Por definir",
    estado: "Por completar",
  },
];

function Presentacion() {
  return (
    <section className="presentacion" id="inicio">
      <div className="presentacion-contenido">
        <span className="etiqueta">
          PORTAFOLIO DE DESARROLLO WEB
        </span>

        <h1>
          MaryLuz <span>Ortegón</span>
        </h1>

        <h2>Estudiante de programación</h2>

        <p>
          Me encuentro aprendiendo programación y desarrollando
          habilidades para crear soluciones digitales. Me interesa
          fortalecer mis conocimientos, explorar nuevas tecnologías
          y construir proyectos funcionales, organizados y fáciles de usar.
        </p>

        <div className="acciones">
          <a className="boton principal" href="#proyectos">
            Ver proyectos
          </a>

          <a className="boton secundario" href="#contacto">
            Contactarme
          </a>
        </div>
      </div>

      <div className="presentacion-visual" aria-hidden="true">
        <div className="circulo">
          <span>ML</span>
        </div>
        <div className="decoracion decoracion-uno" />
        <div className="decoracion decoracion-dos" />
      </div>
    </section>
  );
}

type ListaTecnologiasProps = {
  tecnologias: string[];
};

function ListaTecnologias({
  tecnologias,
}: ListaTecnologiasProps) {
  return (
    <section className="seccion" id="tecnologias">
      <div className="encabezado-seccion">
        <span className="numero-seccion">01 / HABILIDADES</span>
        <h2>Tecnologías</h2>
        <p>
          Herramientas que forman parte del aprendizaje en
          programación y desarrollo web.
        </p>
      </div>

      <ul className="lista-tecnologias">
        {tecnologias.map((tecnologia) => (
          <li className="tecnologia" key={tecnologia}>
            <span className="punto" aria-hidden="true">
              ●
            </span>
            {tecnologia}
          </li>
        ))}
      </ul>
    </section>
  );
}

type TarjetaProyectoProps = {
  proyecto: Proyecto;
};

function TarjetaProyecto({ proyecto }: TarjetaProyectoProps) {
  return (
    <article className="tarjeta-proyecto">
      <div className="tarjeta-superior">
        <span className="icono-proyecto" aria-hidden="true">
          {"</>"}
        </span>
        <span className="estado">{proyecto.estado}</span>
      </div>

      <span className="categoria">{proyecto.categoria}</span>

      <h3>{proyecto.nombre}</h3>

      <p>{proyecto.descripcion}</p>

      {proyecto.id === 1 ? (
        <a
          className="enlace-proyecto"
          href="#contacto"
          aria-label={`Consultar información sobre ${proyecto.nombre}`}
        >
          Conocer más <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="proyecto-pendiente">
          Espacio para actualizar
        </span>
      )}
    </article>
  );
}

type ListaProyectosProps = {
  proyectos: Proyecto[];
};

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section className="seccion" id="proyectos">
      <div className="encabezado-seccion">
        <span className="numero-seccion">02 / TRABAJOS</span>
        <h2>Proyectos destacados</h2>
        <p>
          Un espacio para mostrar proyectos de práctica y futuros
          desarrollos.
        </p>
      </div>

      <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <span className="numero-seccion">03 / CONTACTO</span>

      <h2>Construyamos algo interesante.</h2>

      <p>
        Si deseas conocer más sobre mi proceso de aprendizaje o
        conversar sobre mis proyectos, puedes escribirme.
      </p>

      <a
        className="boton principal"
        href="mailto:mariluz@gmail.com"
      >
        maryortegin25@gmail.com
      </a>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="barra-navegacion">
        <a className="logo" href="#inicio" aria-label="Ir al inicio">
          ML<span>.</span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="contenedor">
        <Presentacion />

        <ListaTecnologias tecnologias={tecnologias} />

        <ListaProyectos proyectos={proyectos} />

        <Contacto />
      </main>

      <footer className="pie-pagina">
        <p>
          © {new Date().getFullYear()} Mary Luz Ortegon.
          Portafolio personal.
        </p>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </>
  );
}

export default App;