
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
            <h1 className="font-popins text-gray-900 text-4xl lg:text-5xl">
              <span className="font-bold">
              ¡Descubre el potencial de la 
              </span>
              <br/>Inteligencia Artificial !
            </h1>
            <div className="flex mt-9 flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-3/4 font-popins text-gray-900 text-xl  ">
                <p className="mb-5">
                En este curso de 35 horas, te sumergirás en el fascinante mundo de la Inteligencia Artificial y aprenderás a utilizar herramientas de IA de fácil uso para aumentar la productividad y mejorar los procesos en tu empresa.</p>
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
          <img src="/img/cubo-ia.png"
            className="absolute bottom-1/2 xl:bottom-auto"
            width="100%"
            height="100%"
          />
        </div>
        <div className="absolute h-full w-full z-0 mix-blend-multiply  md:hidden flex items-start justify-end pointer-events-none ">
        <img src="/img/cubo-ia.png"
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
              ¡¡No pierdas esta oportunidad! lleva a tu empresa al siguiente nivel con la IA!
              </p>
              <p className=" mb-5">
              Durante el programa, explorarás diversas aplicaciones de IA en el entorno laboral, desde modelos generativos de IA como asistentes personales, hasta aplicaciones de IA para ventas, marketing y mejora de las operaciones. Además, adquirirás habilidades prácticas en el uso efectivo de estas herramientas, lo que te permitirá tomar decisiones basadas en datos mediante el análisis de grandes volúmenes de información y optimizar los procesos empresariales mediante la identificación de áreas de mejora y la automatización de tareas.
              <br></br><br></br>
Nuestro enfoque estratégico te proporcionará las claves para integrar de manera eficaz la IA en tu empresa y maximizar su impacto en todos los niveles. Aprovecha esta oportunidad única para desarrollar tus habilidades en IA y destacar en el mercado laboral actual.</p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
                <h1 className="text-3xl font-medium text-gray-700 title-section">
                  ¡Inscríbete ahora!
                </h1>

                <Form35hrs curso="ia35hrs" />
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
              <strong>Formato:</strong> 6 semanas, 2 dias semana x 3h/dia<br></br>
              <strong>Modalidad:</strong> Online ¡en directo! por videoconferencia Zoom <br></br>
            </p>
            <strong>Fechas y horarios:</strong>
            <ul className="list-disc mb-5">
              <li>19 Septiembre al 2 Noviembre</li>
            </ul>

            <h4 className="mb-3 text-xl font-bold">Contenido</h4>
            <ul className="list-disc">
            <li>Introducción a la IA y su importancia estratégica para las PYME</li>
            <li>Descubrir y aprovechar el potencial de las herramientas de IA de fácil uso</li>
            <li>Aprender a utilizar eficazmente estas herramientas para aumentar la productividad de los/as empleados/as y mejorar los procesos</li>
            <li>Explorar diversas aplicaciones de IA en el entorno laboral</li>
            <li>Modelos generativos de IA como asistentes personales</li>
            <li>Aplicaciones de la IA para ventas y marketing</li>
            <li>IA para mejorar las operaciones</li>
            <li>Estrategias para la integración eficaz de la IA y la maximización del impacto empresarial</li>
            <li>Adquirir habilidades prácticas en el uso efectivo de herramientas de IA</li>
            <li>Mejorar la toma de decisiones basada en datos mediante el análisis de grandes volúmenes de información</li>
            <li>Optimizar procesos empresariales mediante la identificación de áreas de mejora y la automatización de tareas</li>
  </ul>
            
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-1 lg:mx-2 lg:w-1/2">
              <img className="mix-blend-multiply" src="/img/features2.jpg" />
            </div>

            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
              Minimiza los errores y toma decisiones más informadas
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
              La Inteligencia Artificial te brinda la capacidad de tomar decisiones más precisas y basadas en datos. Aprenderás a analizar grandes volúmenes de información y utilizarla de manera estratégica para mejorar tus procesos empresariales. No permitas que la falta de conocimiento en IA te impida tomar decisiones informadas y mantener tu posición en el mercado laboral actual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gradient-to-t from-salmon-f5 to-white">
        <div className="container mx-auto flex flex-col px-6 py-10">
          <div className="flex-1 lg:-mx-6 flex flex-col-reverse lg:flex-row  lg:items-center ">
            <div className="lg:mx-6 lg:w-1/2">
              <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">
              Optimiza tus procesos empresariales y aumenta la productividad
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
              Identifica las áreas de mejora en tus procesos y automatiza tareas repetitivas y tediosas. Con las herramientas de IA adecuadas, podrás optimizar tus operaciones y permitir que tus empleados se enfoquen en tareas de mayor valor añadido. Aprovecha el potencial de la Inteligencia Artificial para impulsar la productividad y el crecimiento de tu empresa.
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
              Mejora la competitividad en el mercado actual
              </h3>
              <p className="text-gray-900 text-xl   font-popins ">
              La IA se ha convertido en una herramienta clave para mantenerse competitivo en el mercado laboral. Aprender a utilizar eficazmente las herramientas de IA te brindará una ventaja estratégica frente a tus competidores. No te quedes atrás y adquiere las habilidades necesarias para destacar en el entorno laboral actual.
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
