
import { Inter } from 'next/font/google'
import Spline from '@splinetool/react-spline';
import FormMain from '@/components/FormMain';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <section className="relative h-[90vh] grid grid-rows-[100px_auto] bg-gradient-to-b from-salmon-f5 to-white">
    <nav  className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between relative z-20">
        <div>
            <a className="text-2xl font-bold text-white hover:text-gray-700 dark:text-white lg:text-3xl" href="/">
                <img  src='https://factoriaf5.org/wp-content/uploads/2021/07/logo.png' alt='logo factoria f5'/>
            </a>
        </div>

                    
       

        </div>

       

      { /* <!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
        <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 hidden lg:visible lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
        <a className="mt-4 block rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto" href="#form">¡ Inscríbete ya !</a>
        </div>
    </nav>

    <div className="container mx-auto px-6 py-auto text-left z-10 relative pointer-events-none ">
        <div className="flex h-full flex-col justify-center lg:w-3/4 xl:w-1/2 ">
            <h1 className="font-popins text-gray-900 text-5xl font-bold lg:text-7xl">Optimiza tu empresa<br/> con IA y Ciberseguridad</h1>
            <div className='flex mt-9 flex-col md:flex-row md:items-center md:justify-between'>
                <p className="font-popins text-gray-900 text-xl md:w-1/2  ">Formación 100% subvencionada sin coste para PYMES y Autónomos/as
 en  <strong>Inteligencia artificial y ciberseguridad</strong></p>
                <a href='#form'>
                <button className="rounded-full bg-orange-f5 px-2 text-white  focus:outline-none pointer-events-auto relative flex items-center h-20 w-full max-w-[250px] mt-7 md:w-[150px] md:mt-0  group">
                    <img src='./img/btn-lg.svg' className='transition-transform duration-500 md:group-hover:translate-x-full'/>
                    <p className='transition-all  duration-1000 absolute opacity-100 translate-x-20 md:translate-x-0 md:opacity-0 group-hover:opacity-100 '>Mas info</p>
                </button>
                </a>
            </div>

    <div className='mt-9 bg-white w-full rounded-b-full rounded-r-full grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] justify-items-center px-6 py-5 justify-center gap-3 items-center overflow-hidden drop-shadow-2xl'>
        <img  src='/img/logo-ue.png'/>
        <img  src='/img/logo-f5.png'/>
        <img  src='/img/logo-pimec.png'/>
        <img  src='/img/logo-microsoft.png'/>
        <img  src='/img/logo-simplon.png'/>
    </div>


        </div> 
    </div>
    <div className='absolute top-0 h-full w-full z-0 mix-blend-multiply hidden md:block '>
      <Spline   scene="https://prod.spline.design/PjzxcOmEfe48pe7b/scene.splinecode" />
    </div>
    <div className='absolute top-0 h-full w-full z-0 mix-blend-multiply  opacity-50 md:hidden '>
      <Spline   scene="https://prod.spline.design/9xHIA-SM8e1fdrPr/scene.splinecode" />
    </div>

    
    </section>

    <section className="bg-white">
    <div className="container mx-auto px-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold capitalize font-popins font-black text-gray-800 lg:text-5xl title-section">Cursos</h1>

        <p className="mt-4 text-center text-gray-400 ">Desarrolla tus habilidades en IA: Únete a nuestros cursos diseñados para CEOs, empleados y demandantes de empleo</p>
       
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12 font-popins">
        <a href='cursos/ai-ciberseguridad-para-directivos'>
        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="/img/face-ai-movil.png" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Inteligencia Artificial y Ciberseguridad aplicada a negocio para <strong>CEOs y Directivos</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">2 Dias (7 horas)</p>
        </div>
        </a>


      <a href='cursos/ciberseguridad-35hrs'>
        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="/img/features5.jpg" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Curso maestro en Ciberseguridad
            <strong> para PYMES y Autónomos/as</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">12 sesiones (35 horas)</p>
        </div>
       </a> 
      <a href='cursos/inteligencia-artificial-35hrs'>
        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="/img/features4.jpg" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Curso maestro en Inteligencia Artificial

            <strong> para PYMES y Autónomos/as 
</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">12 sesiones (35 horas)</p>
        </div>
       </a> 

      
      


        </div>
    </div>
    </section>

    <section id='form' className="py-5 bg-gradient-to-t from-salmon-f5 to-white">
    <div className="container mx-auto flex flex-col px-6 py-10">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="lg:mx-6 lg:w-1/2">
            <h2 className="text-gray-900  text-4xl mb-20 font-semibold lg:text-5xl font-popins title-side">Potencia tu empresa con IA y Ciberseguridad</h2>

            <p className="mt-6 max-w-xl text-gray-900 ">Recibe todas las ofertas formativas</p>

            

        </div>

        <div  className="mt-1 lg:mx-2 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
            <h3 className="text-2xl font-medium text-gray-700 ">¡Inscríbete ahora!</h3>
            <FormMain curso="Info General"/>
            </div>
        </div>
        </div>
    </div>
    </section>

    <footer className="bg-white ">
    <div className="container mx-auto px-6 py-12">
      

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <a href="mailto:techtime2skill@factoriaf5.org" className="text-lg font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700">Para cualquier duda o consulta, escríbenos a
techtime2skill@factoriaf5.org</a>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
    </footer>   
    <a className="fixed bottom-5  right-5 mt-4 rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto" href="#form">CONTACTO </a>
    
</main>
  )
}
