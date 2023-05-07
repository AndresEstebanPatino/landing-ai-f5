
import { Inter } from 'next/font/google'
import Spline from '@splinetool/react-spline';
import FormMain from '@/components/FormMain';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <section className="relative h-screen grid grid-rows-[100px_auto] bg-gradient-to-b from-salmon-f5 to-white">
    <nav  className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between relative z-20">
        <div>
            <a className="text-2xl font-bold text-white hover:text-gray-700 dark:text-white lg:text-3xl" href="#">
                <img  src='https://factoriaf5.org/wp-content/uploads/2021/07/logo.png' alt='logo factoria f5'/>
            </a>
        </div>

        { /* <img className='mix-blend-multiply w-32 block lg:hidden' src='../img/logo-propuestas-tech.png' alt='logo factoria f5'/> */}            
        


        </div>

        { /* <img className='mix-blend-multiply w-60 translate-y-6 hidden lg:block' src='../img/logo-propuestas-tech.png' alt='logo factoria f5'/> */}
        
       

      { /* <!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
        <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 hidden lg:visible lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
       

        <a className="mt-4 block rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto" href="#form">Inscripción </a>
        </div>
    </nav>

    <div className="container mx-auto px-6 py-auto text-left z-10 relative pointer-events-none ">
        <div className="flex h-full flex-col justify-center lg:w-3/4 xl:w-1/2 ">
            <h1 className="font-popins text-gray-900 text-4xl font-bold lg:text-5xl">Formación en <br/> IA y Ciberseguridad para CEO's y Directivos</h1>
            <div className='flex mt-9 flex-col md:flex-row md:items-center md:justify-between'>
                <p className="font-popins text-gray-900 text-xl md:w-1/2  ">Optimiza y protege tu empresa <strong>Inteligencia artificial y ciberseguridad</strong></p>
                <a href='#form'>
                <button className="rounded-full bg-orange-f5 px-2 text-white  focus:outline-none pointer-events-auto relative flex items-center h-20 w-full max-w-[250px] mt-7 md:w-[150px] md:mt-0  group">
                    <img src='../img/btn-lg.svg' className='transition-transform duration-500 md:group-hover:translate-x-full'/>
                    <p className='transition-all  duration-1000 absolute opacity-100 translate-x-20 md:translate-x-0 md:opacity-0 group-hover:opacity-100 '>Más info</p>
                </button>
                </a>
            </div>

    <div className='mt-9 bg-gray-200 w-full  rounded-b-full rounded-r-full flex flex-wrap px-9 py-5 justify-between items-center'>
        <img className='mix-blend-multiply' src='../img/logo-ue.png'/>
        <img className='mix-blend-multiply' src='../img/logo-f5.png'/>
        <img className='mix-blend-multiply' src='../img/logo-pimec.png'/>
        <img className='mix-blend-multiply' src='../img/logo-simplon.png'/>
    </div>


        </div> 
    </div>
    <div className='absolute top-0 h-full w-full z-0 mix-blend-multiply hidden md:block '>
      <Spline   scene="https://prod.spline.design/6cueAOxLOmDY-gS9/scene.splinecode" />
    </div>
    <div className='absolute h-full w-full z-0 mix-blend-multiply  opacity-40 md:hidden flex items-start justify-end '>
        <img src='../img/face-ai-movil.png'/>
    </div>

    
    </section>

   <section id='form' className="py-0 bg-gradient-to-t from-salmon-f5 to-white">
    <div className="container mx-auto flex flex-col px-6 py-10">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="lg:mx-6 lg:w-1/2">
            <h2 className="text-gray-900  text-4xl mb-20 font-semibold lg:text-5xl font-popins title-side">Inscribete en nuestra formación online Subvencionada <br></br> <span className="font-popins text-gray-900 text-2xl ">para CEO's y Directivos</span></h2>
        </div>

        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
            <h1 className="text-3xl font-medium text-gray-700 title-section">Inscripción</h1>

            <FormMain curso="1 Day for CEOS"/>
            </div>
        </div>
        </div>
    </div>
    </section>

    <section  className="py-0 bg-salmon-f5">
    <div className="container mx-auto flex flex-col items-center px-6 py-10">
    <h2 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Que veremos?</h2>
    
    <div className="text-gray-900 mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-3xl  font-popins">
   
    <h4 className='mb-3 text-xl title-section'>Formato: 2 sesiones online de 3,5 hrs</h4>

    <h4 className='mb-3 text-xl'>Ciberseguridad:</h4>
    <ul className='list-disc'>

        <li>No dejes que los ciberataques amenacen la operación de tu empresa.</li>
        <li>Incluye la ciberseguridad en tu estrategia corporativa personalizada.</li>
        <li>Capacita a tus empleados en ciberseguridad para obtener beneficios rápidos.</li>
    </ul>
<h4 className='mt-10 mb-3 text-xl'>Inteligencia Artificial:</h4>
<ul className='list-disc'>
<li>Aprovecha el potencial de la inteligencia artificial para mejorar tu empresa.</li>
<li>Descubre las tecnologías y herramientas de inteligencia artificial.</li>
<li>Integra la IA en tus procesos empresariales para tomar decisiones más informadas.</li>
<li>Crea soluciones de inteligencia artificial con el Lean Canvas para mejorar tu empresa.</li>
</ul>
    </div>           
            
        
        
    </div>
    </section>

    <section  className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        
    <div className="container mx-auto flex flex-col px-6 py-10">
 
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <img className='mix-blend-multiply' src='../img/features1.jpg'/>
        </div>

        <div className="lg:mx-6 lg:w-1/2">
            <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Protección al riesgo de ciberataques </h3>
            <p className="text-gray-900 text-xl   font-popins ">Los ciberataques son una amenaza creciente para las empresas y sus clientes. La inteligencia artificial y la ciberseguridad son herramientas esenciales para proteger la información sensible y prevenir ataques</p>
        </div>
        </div>
    </div>
    </section>


    <section className="py-0 bg-gradient-to-t from-salmon-f5 to-white">
        
        <div className="container mx-auto flex flex-col px-6 py-10">
     
            <div className="flex-1 lg:-mx-6 flex flex-col-reverse lg:flex-row  lg:items-center ">
            
    
            <div className="lg:mx-6 lg:w-1/2">
            <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Minimizar el error al tomar decisiones informadas </h3>
            <p className="text-gray-900 text-xl   font-popins ">La inteligencia artificial y la ciberseguridad son áreas complejas que pueden ser difíciles de entender y evaluar para los líderes empresariales. Sin embargo, tomar decisiones informadas en estas áreas es crucial para proteger la empresa y mantenerse a la vanguardia.</p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
                <img className='mix-blend-multiply' src='../img/features2.jpg'/>
            </div>
            </div>
        </div>
    </section>

    <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
    
    <div className="container mx-auto flex flex-col px-6 py-10">
    
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <img className='mix-blend-multiply' src='../img/features3.jpg'/>
        </div>

        <div className="lg:mx-6 lg:w-1/2">
        <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Es fundamental proteger los datos de la empresa</h3>
        <p className="text-gray-900 text-xl   font-popins ">La protección de los datos de la empresa es una responsabilidad importante para los líderes empresariales. La inteligencia artificial y la ciberseguridad son herramientas fundamentales para asegurar que los datos estén protegidos de manera efectiva y cumplir con las normativas y regulaciones correspondientes.</p>
        </div>
        </div>
    </div>
    </section>

    <footer className="bg-white ">
    <div className="container mx-auto px-6 py-12">
      

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700">TECH TIME 2 SKILL</a>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
    </footer> 

    <a className="fixed bottom-5  right-5 mt-4 rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto" href="#form">Más info </a>
         
</main>
  )
}
