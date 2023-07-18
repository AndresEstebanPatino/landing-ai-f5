
import FormMainBootcamp from '@/components/FormMainBootamp';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen grid grid-rows-[100px_auto] bg-gradient-to-b from-salmon-f5 to-white">
        <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
          <div className="flex items-center justify-between relative z-20">
            <div>
              <a
                className="text-2xl font-bold text-white hover:text-gray-700 lg:text-3xl"
                href="/"
              >
                <img
                  src="https://factoriaf5.org/wp-content/uploads/2021/07/logo.png"
                  alt="logo factoria f5"
                />
              </a>
            </div>
          </div>

          <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 hidden lg:visible lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
            <a
              className="mt-4 block rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto"
              href="#form"
            >
              ¡ Inscríbete ya !
            </a>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-auto text-left z-10 relative pointer-events-none ">
          <div className="flex h-full flex-col mt-32 justify-center md:mt-0 lg:w-5/6 xl:w-1/2 ">
            <h1 className="font-popins text-gray-900 text-4xl lg:text-5xl">
              <span className="font-bold">
              ¡Inicia tu carrera en 
              </span>
              <br/>Ciberseguridad en la Nube!
            </h1>
            <div className="flex mt-9 flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-3/4 font-popins text-gray-900 text-xl  ">
                <p className="mb-5">
                Conviértete en un experto en protección de datos en la nube en solo 7 meses. En nuestro bootcamp, te prepararemos para enfrentar los desafíos más emocionantes del mundo digital.<br></br> ¿Lo mejor de todo? No necesitas experiencia previa y te ofrecemos una formación intensiva de primer nivel.
                </p>
              </div>
              <a href="#form">
                <button className="rounded-full bg-orange-f5 px-2 text-white  focus:outline-none pointer-events-auto relative flex items-center h-20 w-full max-w-[250px] mt-7 md:w-[150px] md:mt-0  group">
                  <img
                    src="/img/btn-lg.svg"
                    className="transition-transform duration-500 md:group-hover:translate-x-full"
                  />
                  <p className="transition-all  duration-1000 absolute opacity-100 translate-x-20 md:translate-x-0 md:opacity-0 group-hover:opacity-100 ">
                    Más info
                  </p>
                </button>
              </a>
            </div>

            <div className="mt-9 bg-white w-full rounded-b-full rounded-r-full grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] justify-items-center px-6 py-5 justify-center gap-3 items-center overflow-hidden drop-shadow-2xl">
              <img src="/img/logo-ue.png" />
              <img src="/img/logo-f5.png" />
              <img src="/img/logo-pimec.png" />
              <img src="/img/logo-microsoft.png" />
              <img src="/img/logo-simplon.png" />
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full z-0 mix-blend-multiply hidden md:block ">
          <img src="/img/candado.png"
            className="absolute bottom-1/2 xl:bottom-auto"
            width="100%"
            height="100%"
          />
        </div>
        <div className="absolute h-full w-full z-0 mix-blend-multiply  md:hidden flex items-start justify-end ">
        <img src="/img/candado.png"
            className="w-full"
            width="100%"
            height="100%"
          />
        </div>
      </section>

      <section
        id="form"
        className="py-10 bg-gradient-to-t from-salmon-f5 to-white"
      >
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="lg:mx-6 lg:w-1/2 text-gray-900 font-popins text-xl">
              <p className="text-4xl mb-10 title-side-alone">
              ¡Domina la Ciberseguridad en la Nube y sé un profesional en demanda!
              </p>
              <p className=" mb-5">
              Siempre un paso adelante
En Factoria F5, te convertirás en el experto que detecta y responde rápidamente a los ataques en la nube. <br></br><br></br>Minimiza los efectos de los incidentes, encuentra soluciones y aprende de cada situación para prevenir futuros ataques.<br></br><br></br> Tu habilidad para actuar bajo presión y resolver problemas será clave en el mundo de la ciberseguridad en la nube.  </p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
                <h1 className="text-3xl font-medium text-gray-700 title-section">
                  ¡Inscríbete ahora!
                </h1>

                <FormMainBootcamp curso="Bootcam" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-salmon-f5">
        <div className="container mx-auto flex flex-col items-center px-6 py-10 text-lg">
          <h2 className="text-gray-900  text-4xl mb-5 font-semibold lg:text-4xl font-popins  title-section ">
            PROGRAMA
          </h2>

          <div className="text-gray-900 mx-auto w-full overflow-hidden rounded-3xl bg-white p-20 shadow-2xl lg:max-w-5xl  font-popins">
            <p className="mb-5 ">
            En nuestro bootcamp de 7 meses, explorarás los siguientes temas:<br></br>
                          </p>
                          <ul className='list-disc'>
    <li>Arquitectura de la nube y modelos de servicio: comprende cómo funcionan los servicios en la nube y cómo se aplican a diferentes modelos de negocio.</li>
    <li>Protección de datos en la nube: aprende a garantizar la seguridad y privacidad de la información en los entornos de computación en la nube.</li>
    <li>Monitoreo y detección de amenazas: domina las herramientas y técnicas para identificar y responder rápidamente a los ataques cibernéticos en la nube.</li>
    <li>Cumplimiento normativo y ética: conoce las regulaciones y mejores prácticas en ciberseguridad para garantizar una conducta profesional y ética.</li>
</ul>
           
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features1.jpg" />
            </div>

            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
              Analista de Ciberseguridad en la Nube: el guardián de tus datos
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
              Como Analista de Ciberseguridad en la Nube, serás el héroe digital que protege los sistemas y datos en la nube. Aprenderás a identificar y anticiparte a las amenazas, a evaluar vulnerabilidades y a implementar medidas de seguridad avanzadas. Tu misión será garantizar la privacidad y la integridad de los datos en el mundo virtual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gradient-to-t from-salmon-f5 to-white">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 flex flex-col-reverse lg:flex-row  lg:items-center ">
            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
              Pentester en la Nube: desafía los límites
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
              Como Pentester en la Nube, utilizarás tus habilidades de hacker ético para identificar las vulnerabilidades en los sistemas en la nube. Aprenderás técnicas avanzadas de penetración, encontrarás debilidades y proporcionarás soluciones efectivas. Conviértete en el guardián invisible que protege los datos más valiosos.
              </p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features2.jpg" />
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-white ">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a
              href="mailto:techtime2skill@factoriaf5.org"
              className="text-lg font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700"
            >
              Para cualquier duda o consulta, escríbenos a
              techtime2skill@factoriaf5.org
            </a>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <a
        className="fixed bottom-5  right-5 mt-4 rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto"
        href="#form"
      >
        CONTACTO{" "}
      </a>
    </main>
  ); 
}
