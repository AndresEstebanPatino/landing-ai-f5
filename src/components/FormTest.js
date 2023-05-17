import React, { useState } from 'react';

function FormTest() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = process.env.GOOGLE_PRIVATE_KEY;
    const fileId = process.env.GOOGLE_SHEET_ID;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${fileId}/values/Sheet1!A1:D1:append?valueInputOption=USER_ENTERED`;

    const data = {
      values: [[nombre, correo, telefono]],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Datos enviados correctamente.');
      setNombre('');
      setCorreo('');
      setTelefono('');
    } else {
      console.log(response); 
      alert('Ha ocurrido un error al enviar los datos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="correo" value={correo} onChange={handleCorreoChange} />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="telefono" value={telefono} onChange={handleTelefonoChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormTest;
