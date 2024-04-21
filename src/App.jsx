import React, { useState } from 'react'
import Horn from './assets/mixkit-car-horn-718.mp3'
const App = () => {

  const carName = "crolla"

  const studentA = {
    name: 'Raheel',
    regNo: '2019-arid-3076',
    sec: "A"
  }

  //object
  const HondaCivic = {
    model: 2024, //key and value
    number: 'Chakwal',
    price: {
      oldPrice: 200000,
      newPrice: 240000,
    },
    testHorn: function () {
      var audio = new Audio(Horn);  // Create an audio object with the source set to your audio file
      audio.play();  // Play the audio file
    },
    location: 'Islamabad',
    condition: 'fresh',
    used: 'three year by family',
    color: 'White',
  }


  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  function handleNumber1Change(event) {
    setNumber1(event.target.value)
  }
  function handleNumber2Change(event) {
    setNumber2(event.target.value)
  }
  //   const [number1, setNumber1] = useState(0);
  //   const [number2, setNumber2] = useState(0);

  //   function handleNumber1Change(event) {
  //     setNumber1(event.target.value)
  //   }

  //   function handleNumber2Change(event) {
  //     setNumber2(event.target.value)

  //   }

  const [plusAnswer, setPlusAnswer] = useState(0)
  const plus = () => {
    let plus = Number(number1) + Number(number2)
    setPlusAnswer(plus)
  }



  return (
    <div className='container pt-10'>

      <h1>Data Types</h1>
      <p>Number</p>
      <p>String</p>
      <p>Object</p>
      <p>Array</p>
      <hr />


      <hr />
      <h1 className='font-bold'>Car</h1>
      <div><p>{HondaCivic.location}</p>
        <p>{HondaCivic.price.newPrice}</p>
        <p>{HondaCivic.color}</p>
        <p>{HondaCivic.model}</p>
        <p>{HondaCivic.number}</p>
        <p>{HondaCivic.used}</p></div>
      <button onClick={HondaCivic.testHorn} className='bg-green-500 px-4 py-2 rounded m-4'>Test Honda Horn</button>
      <div className='my-11'>
        <input className='rounded-lg border ml-5 w-12 ' value={number1} type='number' onChange={handleNumber1Change}></input>
        <input className='rounded-lg  ml-5 border w-12 ' value={number2} type='number' onChange={handleNumber2Change}></input>
        <button className='bg-red-500 ml-5 ' onClick={plus}>sum</button>
        <input className='rounded-lg border w-12 ml-5 ' value={plusAnswer} type='number'></input>

      </div>
    </div>
  )
}

export default App