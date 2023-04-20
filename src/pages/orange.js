
import { Inter } from 'next/font/google'
import Spline from '@splinetool/react-spline';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <section className="relative h-screen grid grid-rows-[100px_auto] bg-orange-f5">
    <nav  className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between relative z-20">
        <div>
            <a className="text-2xl font-bold text-white hover:text-gray-700 lg:text-3xl" href="#">
                <img className='brightness-200 grayscale contrast-200' src='https://factoriaf5.org/wp-content/uploads/2021/07/logo.png' alt='logo factoria f5'/>
            </a>
        </div>

       {/* <!-- Mobile menu button -->*/ }
        <div className="flex lg:hidden">
            <button  type="button" className="text-gray-100 hover:text-gray-200 focus:text-gray-100 focus:outline-none" aria-label="toggle menu">
            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        </div>

      { /* <!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
        <div x-cloak className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 hidden lg:visible lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
        <div className="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <a className="text-gray-100 transition-colors duration-300 hover:text-white lg:mx-8" href="#">Formaciones</a>
        </div>

        <a className="mt-4 block rounded-3xl bg-white px-6 py-2.5 text-center font-medium capitalize leading-5 text-orange-f5 hover:bg-gray-100 lg:mt-0 lg:w-auto" href="#">Inscripcion </a>
        </div>
    </nav>

    <div className="container mx-auto px-6 py-auto text-left z-10 relative pointer-events-none ">
        <div className="flex h-full flex-col justify-center lg:w-3/4 xl:w-1/2 ">
            <h1 className="font-popins text-white text-5xl font-bold lg:text-7xl">Optimiza tu empresa<br/> con IA <span className='font-fira text-sm text-gray-100'> Inteligencia Artificial</span></h1>
            <div className='flex mt-9 flex-col md:flex-row md:items-center md:justify-between'>
                <p className="font-popins text-white text-xl md:w-1/2  ">Formaciones para empresas en  <strong>Inteligencia artificial</strong></p>
                <button className="rounded-full bg-white px-2 text-orange-f5  focus:outline-none pointer-events-auto relative flex items-center h-20 w-full max-w-[250px] mt-7 md:w-[150px] md:mt-0  group">
                    
                      <img src='./img/btn-lg.svg' className='transition-transform duration-500 md:group-hover:translate-x-full'/>
                        
                    <p className='transition-all  duration-1000 absolute opacity-100 translate-x-20 md:translate-x-0 md:opacity-0 group-hover:opacity-100 '>Mas info</p>
                </button>
            </div>

    <div className='mt-9 bg-white w-full  rounded-b-full rounded-r-full flex flex-wrap px-9 py-5 justify-between items-center'>
        <img className='' src='./img/logo-ue.png'/>
        <img className='' src='./img/logo-f5.png'/>
        <img className='' src='./img/logo-pimec.png'/>
        <img className='' src='./img/logo-simplon.png'/>
    </div>


        </div> 
    </div>
    <div className='absolute top-0 h-full w-full z-0  hidden md:block '>
      <Spline scene="https://prod.spline.design/22FSHzxLA3-YbVSl/scene.splinecode" />
    </div>
    <div className='absolute top-0 h-full w-full z-0   opacity-50 md:hidden '>
      <Spline scene="https://prod.spline.design/22FSHzxLA3-YbVSl/scene.splinecode" />
    </div>

    
    </section>

    <section className="bg-white">
    <div className="container mx-auto px-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold capitalize font-popins font-black text-gray-800 lg:text-5xl title-section">Cursos</h1>

        <p className="mt-4 text-center text-gray-400 ">Desarrolla tus habilidades en IA: Únete a nuestros cursos diseñados para CEOs, empleados y demandantes de empleo</p>
       
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12 font-popins">
        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Inteligencia Artificial aplicada a negocio para <strong>CEOs y Directivos</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">1 Dia (7 horas)</p>
        </div>

        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Inteligencia artificial como asistente virtual para <strong>Empleados</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">5 dias(35 horas)</p>
        </div>

        <div>
            <img className="h-60 w-full  rounded-3xl object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <h2 className="mt-4 text-2xl  text-gray-800 ">Bootcamp de IA para <strong>demandantes de empleo</strong></h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-orange-f5 ">8 meses</p>
        </div>
        </div>
    </div>
    </section>

    <section className="py-5 bg-gradient-to-t from-salmon-f5 to-white">
    <div className="container mx-auto flex flex-col px-6 py-10">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="lg:mx-6 lg:w-1/2">
            <h1 className="text-4xl font-semibold lg:text-7xl font-popiins title-side">Potencia tu empresa con IA: 

</h1>

            <p className="mt-6 max-w-xl">Recibe todas las ofertas formativas</p>

            

        </div>

        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
            <h1 className="text-2xl font-medium text-gray-700 ">Registro</h1>

            <form className="mt-6">
                <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-600 ">Nombre</label>
                <input type="text" placeholder="Antonio" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                </div>

                <div className="mt-6 flex-1">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email</label>
                <input type="email" placeholder="antonio@mail.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                </div>


                <button className="mt-6 w-full transform rounded-xl bg-orange-f5 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-f5 focus:ring-opacity-50">Estamos en contacto</button>
            </form>
            </div>
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
</main>
  )
}
