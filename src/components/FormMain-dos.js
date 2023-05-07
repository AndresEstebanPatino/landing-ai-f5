import React, { useState } from 'react'

function FormMain() {

    const handleSubmit = (e)=>{
        e.preventDefault();

        const formEle = document.querySelector("form");
     
        console.log(formEle);
        const formData = new FormData(formEle)
    
        
        fetch('https://script.google.com/macros/s/AKfycbxKCrbxLYzpU33FWZLJeeWfSbADv4tr0cXCXViW2NH4Fl2cQY3yMBgZ6rMTpHNkX6ND/exec', {
            method: "POST",
            body: formData
        })      
    }

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex-1">
        <label className="mb-2 block text-sm text-gray-600 ">Nombre</label>
        <input name='name' id='name' type="text" placeholder="Antonio" required className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email</label>
        <input name='email' id='email' type="email" placeholder="antonio@mail.com" required className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Telefono</label>
        <input name='phone' id='phone' type="tel" placeholder="643 858 965" required className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        </div>

        
        <button type='submit' className="mt-6 w-full transform rounded-xl bg-orange-f5 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-f5 focus:ring-opacity-50">Estamos en contacto</button>
    </form>
  )
}

export default FormMain