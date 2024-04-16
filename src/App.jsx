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


  function handleSum() {
    let calSum15 = Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)
    let calSum610 = Number(number6) + Number(number7) + Number(number8) + Number(number9) + Number(number10)
    setSum1(calSum15)
    setSum2(calSum610)

  }

  function checkStatus(number) {
    if (number > 32) {
      return 'Pass'
    }
    else {
      return 'Fail'
    }
  }

  function overallStatus(number) {
    if (number > 165)  {
      return 'Pass'
    }
    else {
      return 'Fail'
    }
  }

  return (
    <div className="container pt-20 mt-14 justify-center items-center content-center">
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div className="absolute flex gap-5 -top-20 border rounded shadow px-3 py-2 mb-10">
          <p >Student Name</p>
          <input type="text" className="rounded border shadow-black text-center pl-2 w-56" />
        </div>
        <div className="flex gap-11">
          <div >
            <p className="mb-10 w-56">Subject Name</p>
          </div>
          <div>
            <p className="mb-10 w-56">Total Marks</p>
          </div>
          <div>
            <p className="mb-10 w-56">Obtained Marks</p>
          </div>
          <div>
            <p className="mb-10 w-56 ">Status</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">English</p>
        </div>

        <div>
          <input value={number1} type="number" onChange={handleNumber1Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={number6} type="number" onChange={handleNumber6Change} className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{checkStatus(number6)}</p></div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">Urdu</p>
        </div>

        <div>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={number7} type="number" onChange={handleNumber7Change} className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{checkStatus(number7)}</p></div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">Math</p>
        </div>

        <div>
          <input value={number3} type="number" onChange={handleNumber3Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={number8} type="number" onChange={handleNumber8Change} className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{checkStatus(number8)}</p></div>

      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">Chemistry</p>
        </div>

        <div>
          <input value={number4} type="number" onChange={handleNumber4Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={number9} type="number" onChange={handleNumber9Change} className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{checkStatus(number9)}</p></div>

      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">Biology</p>
        </div>

        <div>
          <input value={number5} type="number" onChange={handleNumber5Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={number10} type="number" onChange={handleNumber10Change} className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{checkStatus(number10)}</p></div>

      </div>
      <hr className="my-4" />
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3 w-56">Total Marks</p>
        </div>

        <div>
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={sum2} disabled className="rounded border shadow-black pl-2" />
        </div>
        <div> <p>{overallStatus(sum2)}</p></div>

      </div>
      <div className="mt-3 mb-5 w-full flex justify-center">
        <button onClick={handleSum} className="bg-green-600 px-6 py-2 text-lg  font-semibold rounded-xl shadow text-white mx-auto ">
          Check Result
        </button>
      </div>
    </div>

  )
}



export default App
