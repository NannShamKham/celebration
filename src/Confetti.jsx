import React,{useState} from 'react'
// import Congetti from "canvas-confetti";
import Confet from './Confet';

const Confetti = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      {/* <div className='h-screen flex justify-center items-center'> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="px-4 py-2 rounded-lg bg-slate-400 z-20"
      >
        {" "}
        Confetti
      </button>
      {show ? (
        <Confet
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Confetti