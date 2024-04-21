import React from 'react'
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
  
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function handleNumber1Change(event) {
    setNumber1(event.target.value)
  }

  function handleNumber2Change(event) {
    setNumber2(event.target.value)

  }

function plusplus (number1, number2){
let plus = number1 + number2
return plus
}



  return (
    <div className='container pt-10'>

      <h1>Data Types</h1>
      <p>Number</p>
      <p>String</p>
      <p>Object</p>
      <p>Array</p>
      <hr />
    <input className='rounded'>ef</input>
    <input className='rounded'>fe</input>

      <hr />
      <h1 className='font-bold'>Car</h1>
      <div><p>{HondaCivic.location}</p>
        <p>{HondaCivic.price.newPrice}</p>
        <p>{HondaCivic.color}</p>
        <p>{HondaCivic.model}</p>
        <p>{HondaCivic.number}</p>
        <p>{HondaCivic.used}</p></div>

      <button onClick={HondaCivic.testHorn} className='bg-green-500 px-4 py-2 rounded m-4'>Test Honda Horn</button>
    </div>
  )
}

export default App