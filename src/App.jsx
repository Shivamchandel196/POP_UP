import { useState } from "react";
import "./App.css";
import Popup from "./Popup.jsx";

function App() {
  const [popup, setpopup] = useState(false);

  return (
    <>
      <button
        className="bg-orange-500 px-4 py-2 rounded-2xl"
        onClick={() => setpopup(true)}
      >
        Show Popup
      </button>

      <Popup popup={popup} setpopup={setpopup} />


           <div  className="flex justify-center gap-8 mt-4">

        <button
        className="bg-orange-500 px-4 py-2 rounded-2xl m-left-5px"
        onClick={() => setpopup(true)}
      >
       Edit
      </button>

           </div>
    </>
  );
}

export default App;