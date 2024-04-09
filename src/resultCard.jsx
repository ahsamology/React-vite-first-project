import { useState } from "react";

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
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
    <div className="container  pt-20 ">

      <div className="relative flex justify-around font-bold text-2xl border px-3 py-10 text-blue-900">
        <p className="absolute -top-7 px-4 text-green-600 p-2 text-2xl bg-white shadow border rounded-md ">OLIVE OIL</p>

        <div >
          <p className="mb-3">Purchase Price</p>
          <input value={number1} type="number" onChange={handleNumber1Change} className="rounded border shadow-black pl-2" />
        </div>

        <div>
          <p className="mb-3">Sale Price</p>
          <input value={number2} type="number" onChange={handleNumber2Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <p className="mb-3">Net Profit </p>
          <input value={sum1} disabled className="rounded border shadow-black pl-2"/>
        </div>
      </div>

<div>
<div className="px-4 mt-4  p-2 bg-white shadow border rounded-md "> 
<p className="text-green-600  text-2xl mb-4 underline">Summary:</p>
<hr className="my-4"/>
<strong>Total Profit:</strong>
</div>
</div>


      <div className="mt-10 w-full flex justify-center">
      <button onClick={handleSum} className="bg-green-600 px-6 py-2 text-lg  font-semibold rounded-xl shadow text-white mx-auto ">
        Calculate
      </button>
      </div>
     
    </div>
  )
}

export default App
