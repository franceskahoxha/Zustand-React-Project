import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Franceska',
    age: 20,
    message: 'advanced react'
  });

  const [name, setName] = useState('Franceska')
  const [age, setAge] = useState(20)
  const [message, setMessage] = useState('advanced react')

  const changeMessage = () => {

    // setPerson({...person, message:'hello world'})
    setMessage('hello world')
  
  }
  return (
    <>
    <h2>{name}</h2>
    <h3>{age}</h3>
    <h4>{message}</h4>
    <button onClick={changeMessage} className='btn'>change message</button>
    </>
  )
};

export default UseStateObject;
