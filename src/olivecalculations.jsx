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
  const [sum1, setSum1] = useState(0)
  const [sum2, setSum2] = useState(0)
  const [sum3, setSum3] = useState(0)
  const [sum4, setSum4] = useState(0)


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


  function handleSum() {
    let calSum21 = Number(number2) - Number(number1)
    let calSum43 = Number(number4) - Number(number3)
    let calSum65 = Number(number6) - Number(number5)
    let calSum78 = Number(number8) - Number(number7)
    setSum1(calSum21)
    setSum2(calSum43)
    setSum3(calSum65)
    setSum4(calSum78)

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
          <input value={sum1} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative mt-20 flex justify-around font-bold text-2xl border px-3 py-10 text-blue-900">
        <p className="absolute -top-7 px-4 text-green-600 p-2 text-2xl bg-white shadow border rounded-md ">OLIVE TEA</p>

        <div >
          <p className="mb-3">Purchase Price</p>
          <input value={number3} type="number" onChange={handleNumber3Change} className="rounded border shadow-black pl-2" />
        </div>

        <div>
          <p className="mb-3">Sale Price</p>
          <input value={number4} type="number" onChange={handleNumber4Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <p className="mb-3">Net Profit </p>
          <input value={sum2} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative mt-20 flex justify-around font-bold text-2xl border px-3 py-10 text-blue-900">
        <p className="absolute -top-7 px-4 text-green-600 p-2 text-2xl bg-white shadow border rounded-md ">OLIVE PICKLE</p>

        <div >
          <p className="mb-3">Purchase Price</p>
          <input value={number5} type="number" onChange={handleNumber5Change} className="rounded border shadow-black pl-2" />
        </div>

        <div>
          <p className="mb-3">Sale Price</p>
          <input value={number6} type="number" onChange={handleNumber6Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <p className="mb-3">Net Profit </p>
          <input value={sum3} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>
      <div className="relative mt-20 flex justify-around font-bold text-2xl border px-3 py-10 text-blue-900">
        <p className="absolute -top-7 px-4 text-green-600 p-2 text-2xl bg-white shadow border rounded-md ">OLIVE VINEGAR</p>

        <div >
          <p className="mb-3">Purchase Price</p>
          <input value={number7} type="number" onChange={handleNumber7Change} className="rounded border shadow-black pl-2" />
        </div>

        <div>
          <p className="mb-3">Sale Price</p>
          <input value={number8} type="number" onChange={handleNumber8Change} className="rounded border shadow-black pl-2" />
        </div>
        <div>
          <p className="mb-3">Net Profit </p>
          <input value={sum4} disabled className="rounded border shadow-black pl-2" />
        </div>
      </div>

      <div>
        <div className="px-4 mt-4 p-2 bg-white shadow border rounded-md">

          <p className="text-green-600  text-2xl mb-4 underline">Summary:</p>

          <p>Olive Oil: {sum1}</p>
          <p>Olive Tea: {sum2}</p>
          <p>Olive Pickle: {sum3}</p>
          <p>Olive Vinegar: {sum4}</p>
          <hr className="my-4" />
          <strong>Total Profit: {sum1 + sum2 + sum3 + sum4}</strong>
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
