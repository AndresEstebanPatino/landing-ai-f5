
import Form35hrs from '@/components/Form35hrs';

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
            <h1 className="font-popins text-gray-900 text-4xl lg:text-4xl">
              <span className="font-bold lg:text-5xl">
                Curso maestro en Ciberseguridad
              </span>
              <br />para PYMES y Autónomos/as
            </h1>
            <div className="flex mt-9 flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-3/4 font-popins text-gray-900 text-xl  ">
                <p className="mb-5">
                  Aprende las mejores prácticas y estrategias para mitigar ciberataques protegiendo tu empresa y sus activos críticos. Garantiza la confidencialidad y la integridad de tus datos, manteniendo la continuidad del negocio y la confianza de tus clientes.
                </p>
                <p className="mb-5 font-bold">
                  Inicio: 19 de septiembre de 2023
                </p>
                <p className="mb-5">
                  Programa Europeo TECH TIME 2 SKILL.
                  Formación 100% subvencionada sin coste para PYMES y Autónomos/as



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
        <div className="absolute h-full w-full z-0 mix-blend-multiply hidden md:block pointer-events-none ">
          <img src="/img/candado.png"
            className="absolute bottom-1/2 xl:bottom-auto"
            width="100%"
            height="100%"
          />
        </div>
        <div className="absolute h-full w-full z-0 mix-blend-multiply  md:hidden flex items-start justify-end pointer-events-none ">
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
                Formación 100% subvencionada sin coste para PYMES y Autónomos/as
              </p>
              <p className=" mb-5">

                Cada día hay más de 40.000 cibertataques en nuestro país y el objetivo del 70% son las PYMES. Un ciberataque es tan devastador que 6 de cada 10 PYMES se ven obligadas a cerrar... ¡No te arriesgues más y aprende cómo protegerte a tiempo!
              </p>
              <p className=" mb-5">
                <span className='font-bold'>  El factor humano es la clave del éxito.</span> Tener conciencia de ello y formarte adecuadamente te permitirá minimizar riesgos y ser capaz de detectar amenazas para combatirlas antes de que sea demasiado tarde.
              </p>
              <p className=" mb-5">
                En un mundo digital, la Ciberseguridad es un pilar fundamental para la supervivencia y el crecimiento de cualquier negocio. Proteger tu estabilidad financiera, la confianza de tus clientes y la continuidad de tus operaciones comerciales; no solo es imprescindible, sino vital.
              </p>
              <p className=" mb-5">
                Descubre cómo protegerte implementando la seguridad necesaria tanto en tu vida profesional, como personal.


              </p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
                <h1 className="text-3xl font-medium text-gray-700 title-section">
                  ¡Inscríbete ahora!
                </h1>

                <Form35hrs curso="cs35hrs" />
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
              <strong>Duración total:</strong> 35 horas<br></br>
              <strong>Formato:</strong> 12 sesiones<br></br>
              <strong>Modalidad:</strong> Online ¡en directo! por videoconferencia Zoom <br></br>
            </p>

            <ul className="list-disc mb-5">
              <li> <strong>Fechas inicio: </strong>Martes, 19 Septiembre de 2023</li>
              <li> <strong>Fechas fin: </strong> Jueves, 2 Noviembre, 2023</li>
              <li> <strong>Horario: </strong>Todos los martes y jueves de 16:00h a 19:00h
                <br></br>
                <em>(excepto martes 26/09 y jueves 12/10 – no habrá clase)</em></li>
            </ul>

            <h4 className="mb-3 text-xl font-bold">Contenido</h4>
            <ul className="list-disc">
              <li>Comprender los conceptos fundamentales de la Ciberseguridad y su importancia.</li>
              <li>Adquirir conocimientos sobre amenazas y ataques comunes y cómo mitigarlos.</li>
              <li>Identificar y clasificar los activos de información críticos de la empresa y aplicar medidas de protección adecuadas.</li>
              <li>Dominar las mejores prácticas y políticas de seguridad de la información para garantizar la confidencialidad, integridad y disponibilidad de los datos.</li>
              <li>Aprender a proteger dispositivos móviles y asegurar el trabajo a distancia de forma segura.</li>
              <li>Implementar medidas de seguridad efectivas en redes y sistemas de correo electrónico para prevenir ataques de malware y phishing.</li>
              <li>Desarrollar habilidades para la planificación de la continuidad de las actividades y la gestión eficiente de incidentes de seguridad.</li>
              <li>Aplicar los conocimientos adquiridos en la elaboración de un plan de seguridad de la información para la empresa.</li>
              <li>Ser Embajador/a de Ciberseguridad en la empresa, actuando como líder y referente en la protección de datos y promover educación en seguridad digital dentro de la organización.</li>
            </ul>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features5.jpg" />
            </div>

            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
                Protege a tu empresa de ciberataques
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">

                Los ciberataques son una amenaza real y en aumento, y ninguna empresa está exenta de sufrirlos.Es fundamental que estés preparado/a para identificar y mitigar estas amenazas. Nuestro curso te proporcionará los conocimientos necesarios para proteger los activos de información críticos de tu empresa y mantener seguros los datos de tus clientes.

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
                Toma decisiones informadas en ciberseguridad:
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
                La falta de comprensión sobre ciberseguridad puede llevar a tomar decisiones erróneas que ponen en riesgo la empresa. Es esencial que adquieras conocimientos sólidos sobre amenazas comunes y cómo contrarrestarlas. Con nuestro curso, aprenderás a evaluar riesgos y aplicar medidas de protección adecuadas, lo que te permitirá tomar decisiones informadas y contribuir a la seguridad general de la organización.
              </p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features6.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features4.jpg" />
            </div>

            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
                Garantiza la continuidad del negocio
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">

                Los incidentes de seguridad pueden interrumpir las operaciones de la empresa y causar pérdidas significativas. Con los conocimientos adquiridos serás capaz de planificar la continuidad de las actividades y gestionar eficientemente los incidentes de seguridad. Nuestro curso te dotará de las habilidades necesarias para mantener la estabilidad operativa frente a situaciones de crisis y proteger la reputación de la empresa.
              </p>
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
