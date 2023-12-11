import { forwardRef } from "react";

const Ele = forwardRef(function Ele({onActive}, ref) {
    return (
      <div className="flex justify-center pt-16 bg-[#776B5D] h-screen">
        <div className=" flex justify-center w-[36rem] h-[35rem] bg-stone-200 border-2">
          <div>
            <h1 className="text-4xl py-4 px-4 text-stone-600">Welcome To </h1>
            <p className="text-8xl font-bold py-4 px-4">Ele Is Active </p>
            <h2 className="text-4xl py-4 px-4">Project Manager</h2>
            <p className="flex flex-col gap-1 mt-10 mb-4">
              <label className="text-[#776B5D] text-sm font-bold uppercase">Please enter your nickname boss/bosset:</label>
              <input className="w-full border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600 " type="text" placeholder="Jagaban 55" ref={ref}/>
            </p>
            <button className="px-4 py-2 text-xs rounded-md md:text-base bg-[#B0A695] text-stone-100 hover:bg-black " onClick={onActive}>Let get active!</button>
          </div>
        </div>
      </div>
    );
  })

export default Ele;