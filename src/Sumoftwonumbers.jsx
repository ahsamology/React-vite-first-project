import { useState } from "react";

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0)

  function handleNumber1Change(event) {
    setNumber1(event.target.value)
  }

  function handleNumber2Change(event) {
    setNumber2(event.target.value)

  }

  function handleSum() {
    let calSum = Number(number1) + Number(number2)
    setSum(calSum)

  }

  return (
    <div className="container pt-20">
      <div className="my-5">
        <p className="mb-1 font-semibold">First Number</p>
        <input value={number1} type="number" onChange={handleNumber1Change} className="border shadow focus:shadow-md rounded-lg focus:ring-0 focus:outline-none p-2  " />
      </div>
      <div className="my-5">
        <p className="mb-1 font-semibold">Second Number</p>
        <input value={number2} type="number" onChange={handleNumber2Change} className="border shadow focus:shadow-md rounded-lg focus:ring-0 focus:outline-none p-2  " />
      </div>

      <button onClick={handleSum} className="bg-green-600 px-6 py-2 text-lg font-semibold rounded-xl shadow text-white">
        Calculate
      </button>

      <div className="mt-10">
        {/* <p className="text-2xl font-semibold my-4">Number 1: {number1}</p>
        <p className="text-2xl font-semibold my-4">Number 2: {number2}</p> */}
        <p className="text-2xl font-semibold my-4">SUM {sum}</p>

      </div>

    </div>
  )
}

export default App
