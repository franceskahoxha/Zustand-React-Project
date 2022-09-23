import React, { useState } from 'react';
import {birthdayData} from './birthdayData';


const UseStateCounter = () => {

  const [birth, birthUpdate] = React.useState(birthdayData);
  
  const birthUpdateFunction = () => {
    birthUpdate([])
  }

  return (
    <>
    <main>
    <section  className='dataSection'>
        {birth.map((people) => {
          const {id, image, name, surname, age} = people;
          return (
          <>
          <div key={id}  className='innerDiv'>
          <img  className='dataImages' src={image}></img>
          <div className='dataDiv'>
          <h4>{name} {surname}</h4>
          <h5>{age} years</h5>
          </div>
          </div>
          </>
          )
      
        })}
        <button type='button' onClick={birthUpdateFunction} className='birthButton'>Clear All</button>
    </section>
    </main>
    </>
  )
}

export default UseStateCounter;