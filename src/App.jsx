import { useState } from "react";

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setnumber3] = useState(0)
  const [sum1, setSum1] = useState(0)



  function handleNumber1Change(event) {
    setNumber1(event.target.value)
  }

  function handleNumber2Change(event) {
    setNumber2(event.target.value)

  }

  function handleSum() {
    let calSum21 = Number(number2) - Number(number1)

    setSum1(calSum21)


  }

  return (
    <div className="container pt-20 justify-center items-center content-center">
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div className="absolute -top-14 border rounded shadow px-3 py-2 mb-10">
          <p >Raheel Afzal</p>
        </div>
        <div >
        <p className="mb-10">Subject Name</p>

          <p className="mb-3">English</p>
        </div>

        <div>
        <p className="mb-10">Total Marks</p>

          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
        <p className="mb-10">Obtained Marks</p>

          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3">Urdu</p>
        </div>

        <div>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3">Math</p>
        </div>

        <div>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3">Chemistry</p>
        </div>

        <div>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative flex justify-around font-bold text-2xl px-3 py-2 text-blue-900">
        <div >
          <p className="mb-3">Biology</p>
        </div>

        <div>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
    </div>
  )
}



export default App
