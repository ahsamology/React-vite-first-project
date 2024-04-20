import { useState } from "react";

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [number9, setNumber9] = useState(0);
  const [number10, setNumber10] = useState(0);

  const [passingPercentage, setPassingPercentage] = useState(33)

 


  const [sum1, setSum1] = useState(0)
  const [sum2, setSum2] = useState(0)

  function handleNumber1Change(event) {
    setNumber1(event.target.value)
  }

  function handleNumber2Change(event) {
    setNumber2(event.target.value)

  }

  function handleNumber3Change(event) {
    setNumber3(event.target.value)
  }

  function handleNumber4Change(event) {
    setNumber4(event.target.value)
  }

  function handleNumber5Change(event) {
    setNumber5(event.target.value)
  }

  function handleNumber6Change(event) {
    setNumber6(event.target.value)
  }

  function handleNumber7Change(event) {
    setNumber7(event.target.value)
  }

  function handleNumber8Change(event) {
    setNumber8(event.target.value)
  }

  function handleNumber9Change(event) {
    setNumber9(event.target.value)
  }

  function handleNumber10Change(event) {
    setNumber10(event.target.value)
  }

  function handlePercentage(num1, num2) {
    if (num1 && num2) { 
      let percentage = Number(num2 / num1).toFixed(2)
      return percentage
    }
    
  
  }

  function handleSum() {
    let calSum15 = Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)
    let calSum610 = Number(number6) + Number(number7) + Number(number8) + Number(number9) + Number(number10)
    setSum1(calSum15)
    setSum2(calSum610)

  }

  function checkStatus(num1, num2) {

    let calculatedPercentage = num2 / num1 * 100

    if (calculatedPercentage > passingPercentage) {
      return 'Pass'
    }
    else {
      return 'Fail'
    }
  }

  function pickColor(num1, num2) {
    let calculatedPercentage = num2 / num1 * 100

    if (calculatedPercentage > passingPercentage) {
      return 'text-green-500'
    }
    else {
      return 'text-red-500'
    }
  }


  return (
    <div className="container pt-10 justify-center items-center content-center">
      <div className=" flex w-full    mb-10 font-bold text-2xl text-blue-900 border-b-2 pb-10">
        <div className="ml-5">
            <p >Student Name</p>
            <input type="text" className="rounded my-3 border shadow text-center pl-2 w-56" />
            <p >Roll No.</p>
            <input type="text" className="rounded my-3 border shadow text-center pl-2 w-56" />
        </div>
      </div>

      <div className="grid grid-cols-5 font-bold text-2xl ml-3 py-2 text-blue-900">
        <p>Course Title</p>
        <p className="ml-1">Credit Hours</p>
        <p className="ml-3">Quality Points</p>
        <p>Status</p>
      </div>

      <div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3">Plant Pathology</p>
        <input value={number1} type="number" onChange={handleNumber1Change} className="rounded border shadow-black pl-2" />
        <input value={number6} type="number" onChange={handleNumber6Change} className="rounded border shadow-black pl-2" />
        <p className={pickColor(number1, number6)}>{checkStatus(number1, number6)}</p>
      </div>

      <div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3 w-56">Horticulture</p>
        <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        <input value={number7} type="number" onChange={handleNumber7Change} className="rounded border shadow-black pl-2" />
        <p className={pickColor(number2, number7)}>{checkStatus(number2, number7)}</p>
      </div>

      <div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3 w-56">Plant Breeding</p>
        <input value={number3} type="number" onChange={handleNumber3Change} className="rounded border shadow-black pl-2" />
        <input value={number8} type="number" onChange={handleNumber8Change} className="rounded border shadow-black pl-2" />
        <p className={pickColor(number3, number8)}>{checkStatus(number3, number8)}</p>
      </div>

      <div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3 w-56">Entomology</p>
        <input value={number4} type="number" onChange={handleNumber4Change} className="rounded border shadow-black pl-2" />
        <input value={number9} type="number" onChange={handleNumber9Change} className="rounded border shadow-black pl-2" />
        <p className={pickColor(number4, number9)}>{checkStatus(number4, number9)}</p>
      </div>

      <div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3 w-56">Agronomy</p>
        <input value={number5} type="number" onChange={handleNumber5Change} className="rounded border shadow-black pl-2" />
        <input value={number10} type="number" onChange={handleNumber10Change} className="rounded border shadow-black pl-2" />
        <p className={pickColor(number5, number10)}>{checkStatus(number5, number10)}</p>
      </div>
      <hr className="my-4" />
<div>
<div className="relative grid grid-cols-5 gap-10 font-bold text-2xl px-3 py-2 text-blue-900">
        <p className="mb-3 w-56">GPA</p>
        <input value={handlePercentage(sum1, sum2)} disabled className="rounded border shadow-black pl-2" />
      </div>
</div>

      <hr className="my-4" />
      <div className="mt-3 mb-5 w-full ml-10 ">
        <button onClick={handleSum} className="bg-green-600 px-6 py-2 text-lg  font-semibold rounded-xl shadow text-white mx-auto ">
          Calculate
        </button>
      </div>
    </div>

  )
}



export default App
