
import FormMain from '@/components/FormMain';





export default function Home() {
  return (
    <main className='overflow-hidden'>
        
    <section className="relative min-h-screen grid grid-rows-[100px_auto] bg-gradient-to-b from-salmon-f5 to-white">
    <nav  className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between relative z-20">
        <div>
            <a className="text-2xl font-bold text-white hover:text-gray-700 lg:text-3xl" href="/">
                <img  src='https://factoriaf5.org/wp-content/uploads/2021/07/logo.png' alt='logo factoria f5'/>
            </a>
        </div>

               
        


        </div>

       
        <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 hidden lg:visible lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
       

        <a className="mt-4 block rounded-3xl bg-orange-f5 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-orange-600 lg:mt-0 lg:w-auto" href="#form">¡ Inscríbete ya !</a>
        </div>
    </nav>

    <div className="container mx-auto px-6 py-auto text-left z-10 relative pointer-events-none ">
        <div className="flex h-full flex-col mt-32 justify-center md:mt-0 lg:w-5/6 xl:w-1/2 ">
            <h1 className="font-popins text-gray-900 text-4xl lg:text-5xl"><span className='font-bold'>Curso online en IA y Ciberseguridad </span><br></br>imprescindible para
CEOs y Managers</h1>
            <div className='flex mt-9 flex-col md:flex-row md:items-center md:justify-between'>
               < div className='md:w-3/4 font-popins text-gray-900 text-xl  '>
                <p className="mb-5">Aprende todo lo que necesitas saber para impulsar, optimizar y proteger tu empresa.</p>
                <p className="mb-5 font-bold">6 y 8 de junio de 2023</p>
                <p className=""> Programa Europeo TECH TIME 2 SKILL.<br></br> Formación subvencionada sin coste para PYMES</p>
                </div>
                <a href='#form'>
                <button className="rounded-full bg-orange-f5 px-2 text-white  focus:outline-none pointer-events-auto relative flex items-center h-20 w-full max-w-[250px] mt-7 md:w-[150px] md:mt-0  group">
                    <img src='/img/btn-lg.svg' className='transition-transform duration-500 md:group-hover:translate-x-full'/>
                    <p className='transition-all  duration-1000 absolute opacity-100 translate-x-20 md:translate-x-0 md:opacity-0 group-hover:opacity-100 '>Más info</p>
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
    <div className='absolute h-full w-full z-0 mix-blend-multiply hidden md:block '>
    
     
    <video autoPlay muted loop preload="true" className='absolute bottom-1/2 xl:bottom-auto' width="100%" height="100%"  src="/img/general/hero-face-ai.mp4" type="video/mp4" >
         
    </video>



    </div>
    <div className='absolute h-full w-full z-0 mix-blend-multiply  opacity-60 md:hidden flex items-start justify-end '>
        <img className='w-4/6' src='/img/face-ai-movil.png'/>
    </div>

    
    </section>

   <section id='form' className="py-10 bg-gradient-to-t from-salmon-f5 to-white">
    <div className="container mx-auto flex flex-col px-6 py-10">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="lg:mx-6 lg:w-1/2 text-gray-900 font-popins text-xl">
        <p className='text-4xl mb-10 title-side-alone'>Formación 100% subvencionada <br></br> sin coste para PYMES.</p>
        <p className=" mb-5">España es el tercer país con más ciberataques a nivel mundial.
¿Sabías que las PYMES son el objetivo del 70% de ciberataques, y
que 6 de cada 10 han tenido que cerrar después de éste?</p>
<p className="mb-5">
¿Quieres saber cómo mejorar tus ventas y productividad, reducir
cargas de trabajo y disparar tus beneficios gracias a la
Inteligencia Artificial?
</p>
<p className="mb-5">
Descubre cuáles son las herramientas digitales imprescindibles
que necesitas, cómo utilizarlas y cómo proteger tu negocio frente
a una amenaza. ¡No te quedes atrás!</p>
        </div>

        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl font-popins">
            <h1 className="text-3xl font-medium text-gray-700 title-section">¡Inscríbete ahora!</h1>
               

            <FormMain curso="1 Day for CEOS"/>
            </div>
        </div>
        </div>
    </div>
    </section>

    <section  className="py-0 bg-salmon-f5">
    <div className="container mx-auto flex flex-col items-center px-6 py-10 text-lg">
    <h2 className="text-gray-900  text-4xl mb-5 font-semibold lg:text-4xl font-popins  title-section ">PROGRAMA</h2>
    
    <div className="text-gray-900 mx-auto w-full overflow-hidden rounded-3xl bg-white p-20 shadow-2xl lg:max-w-5xl  font-popins">
   
   
<p className='mb-5 '><strong>Duración total:</strong> 7 horas<br></br>
<strong>Formato:</strong> 2 sesiones de 3 horas + 30min dudas/preguntas<br></br>
<strong>Modalidad:</strong> Online ¡en directo! Por videoconferencia Zoom <br></br>

</p>
<strong>Fechas y horarios:</strong>
<ul className='list-disc mb-5'>
    <li>Lunes 6 de junio 2023 – de 16:00h a 19:30h</li>
    <li>Jueves 8 de junio 2023 – de 16:00h a 19:30h</li>
</ul>

    <h4 className='mb-3 text-xl font-bold'>Módulo Ciberseguridad:</h4>
    <ul className='list-disc'>

        <li>Cómo evitar que los Ciberataques amenacen el funcionamiento detu empresa.</li>
        <li>Cómo incluir la Ciberseguridad en tu estrategia corporativa personalizada.</li>
        <li>Capacitación de tus empleados en Ciberseguridad para obtener beneficios rápidos.</li> 
    </ul>
<h4 className='mt-10 mb-3 text-xl'>Módulo Inteligencia Artificial:</h4>
<ul className='list-disc'>
<li>Aprovecha el potencial de la Inteligencia Artificial para llevar a tu
empresa al siguiente nivel.</li>
<li>
Descubre las tecnologías y herramientas de Inteligencia
Artificial
esenciales y cómo aplicarlas.</li>
<li>
Cómo Integrar la IA en tus procesos empresariales y tomar
decisiones más informadas.</li>
<li>
Crea soluciones de inteligencia artificial con Lean
Canvas para
mejorar la eficiencia operativa de tu empresa.</li>
</ul>
    </div>           
            
        
        
    </div>
    </section>

    <section  className="bg-gradient-to-b from-salmon-f5 to-white py-5">
        
    <div className="container mx-auto flex flex-col px-6 py-10">
 
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <img className='mix-blend-multiply' src='/img/features1.jpg'/>
        </div>

        <div className="lg:mx-6 lg:w-1/2">
            <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Minimiza riesgos y protégete ante ciberataques </h3>
            <p className="text-gray-900 text-xl   font-popins ">Los ciberataques aumentan sin parar y son una amenaza real
para toda empresa y sus clientes , especialmente para las PYMES
No permitas que tu empresa sea la próxima. Implementando
herramientas de Inteligencia Artificial y Ciberseguridad podrás
mantener tus sistemas y datos seguros, proteger la reputación de
tu empresa y mantener la confianza de tus clientes.</p>
        </div>
        </div>
    </div>
    </section>


    <section className="py-0 bg-gradient-to-t from-salmon-f5 to-white">
        
        <div className="container mx-auto flex flex-col px-6 py-10">
     
            <div className="flex-1 lg:-mx-6 flex flex-col-reverse lg:flex-row  lg:items-center ">
            
    
            <div className="lg:mx-6 lg:w-1/2">
            <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">Reduce las posibilidades de error: toma decisiones
más informadas y precisas</h3>
            <p className="text-gray-900 text-xl   font-popins ">La Inteligencia Artificial y la Ciberseguridad son áreas altamente
técnicas y especializadas que pueden ser difíciles de comprender y
evaluar para los líderes empresariales. Sin embargo, es vital que
todo líder tenga conocimiento y tome decisiones bien informadas
en estas áreas para garantizar la protección de su empresa y
mantener su posición en el mercado.</p>
            </div>

            <div className="mt-1 lg:mx-2 lg:w-1/2">
                <img className='mix-blend-multiply' src='/img/features2.jpg'/>
            </div>
            </div>
        </div>
    </section>

    <section className="bg-gradient-to-b from-salmon-f5 to-white py-5">
    
    <div className="container mx-auto flex flex-col px-6 py-10">
    
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="mt-1 lg:mx-2 lg:w-1/2">
            <img className='mix-blend-multiply' src='/img/features3.jpg'/>
        </div>

        <div className="lg:mx-6 lg:w-1/2">
        <h3 className="text-gray-900  text-4xl mb-10 font-semibold lg:text-4xl font-popins ">La Protección de los datos empresariales: Una
prioridad absoluta en la era de la tecnología y la
información</h3>
        <p className="text-gray-900 text-xl   font-popins ">El uso de herramientas avanzadas de Inteligencia Artificial y
Ciberseguridad es absolutamente necesario para garantizar una
protección efectiva de los datos y cumplir con las normativas y
regulaciones en constante evolución. La falta de protección
adecuada puede implicar consecuencias muy graves para la
empresa, incluyendo pérdida de datos, daño a la reputación,
interrupción del negocio o incluso su cese. Por ello, la seguridad
de los datos empresariales debe ser una prioridad absoluta para
líderes empresariales a todos los niveles.</p>
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
