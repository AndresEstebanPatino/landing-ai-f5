import React, { useState } from 'react'

function FormMain(props) {

    const [sended, SetSended] = useState(false)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [rol, setRol] = useState('')
    const [companySize, setCompanySize] = useState('De 0 a 9 trabajadores/as')
    const [schedule, setSchedule] = useState('')
    const [address, setAddress] = useState('')
    const [course, setCourse] = useState(`${props.curso}`)
    const [date, setDate] = useState(`${new Date().toJSON().slice(0, 10)}`)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('name',name)
        formData.append('lastName',lastName)
        formData.append('email',email)
        formData.append('phone',phone)
        formData.append('company',company)
        formData.append('rol',rol)
        formData.append('companySize',companySize)
        formData.append('address',address)
        formData.append('course',course)
        formData.append('date',date)
        formData.append('schedule',schedule)
        
        fetch('https://script.google.com/macros/s/AKfycbwJNb2REWPJW46gg3Nip-zY5WQHWPKFaWkEyjJJ0KMtpkfN5BvwBJcBgPBmx0D7tJ0V/exec', {
            mode: 'no-cors',
            method: "post",
            body: formData
        }).then(response => {
            console.log(response);
            if (response.status === 200 || response.status === 0) {
                SetSended(true)
            }
        })

        
        
    }

if(sended){
    return (
      <div className="mt-9 bg-green-200 w-full text-gray-900  rounded-b-full rounded-r-full flex flex-wrap px-9 py-5 justify-between items-center">
        <p>Inscripción enviada correctamente</p>
      </div>
    );
}
else {
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
       
        <div className="flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Nombre y Apellidos</label>
        <input inputMode='text' required pattern=".{2,}" value={name} onChange={e=> setName(e.target.value)} name='name' id='name' type="text" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

       

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Email</label>
        <input inputMode='email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e=> setEmail(e.target.value)} name='email' id='email' type="email"  className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Teléfono</label>
        <input inputMode='tel' required pattern=".{8,}" value={phone} onChange={e=> setPhone(e.target.value)} name='phone' id='phone' type="tel"className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

       
    
        <div className="mt-6 flex-1">
        <input type='checkbox' required/>
        <label className="text-sm text-gray-600"> He leído y acepto la <a href='https://factoriaf5.org/politica-de-privacidad/' target='blank' className='underline'>Política de privacidad</a></label>
        </div>

      


        <button type='submit' className="mt-6 w-full transform rounded-xl bg-orange-f5 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-f5 focus:ring-opacity-50">Enviar</button>
    </form>
  )
}
}

export default FormMain