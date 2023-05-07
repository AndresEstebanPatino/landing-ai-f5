import React, { useState } from 'react'

function FormMain(props) {

    const [sended, SetSended] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [course, setCourse] = useState(`${props.curso}`)
    const [date, setDate] = useState(`${new Date().toJSON().slice(0, 10)}`)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('name',name)
        formData.append('email',email)
        formData.append('phone',phone)
        formData.append('course',course)
        formData.append('date',date)
        
        fetch('https://script.google.com/macros/s/AKfycby6R8p6Sj-bl5TTA3GiLWJK-aVZt8fnopAUStlb-ZK59XQCEDiQxBZPYUZR9YAyyJfy/exec', {
            method: "POST",
            body: formData
        }).then(response => {
            if (response.status === 200){
                SetSended(true)
            }
        })

        
        
    }

if(sended){
    return(
        <div className='mt-9 bg-green-200 w-full text-gray-900  rounded-b-full rounded-r-full flex flex-wrap px-9 py-5 justify-between items-center'>
     
    <p>Inscripción enviada correctamente</p>
    </div>
    )
}
else {
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Nombre</label>
        <input required pattern=".{2,}" value={name} onChange={e=> setName(e.target.value)} name='name' id='name' type="text" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Email</label>
        <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e=> setEmail(e.target.value)} name='email' id='email' type="email"  className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Telefono</label>
        <input required pattern=".{8,}" value={phone} onChange={e=> setPhone(e.target.value)} name='phone' id='phone' type="tel"className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
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