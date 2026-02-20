import React from "react";

function Popup({ popup, setpopup }) {
  return (
    <>
      {popup && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
          <button
            onClick={() => setpopup(false)}
            className="absolute top-[1rem] right-[2rem] rounded-b-full"
          >
            ❌
          </button>

          <div className="w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex items-center justify-center flex-col">
            <h1>⚠️ Confirm</h1>
            <p>Are you sure you want to delete this?</p>

            <div className="flex justify-between gap-10">
              <button className="bg-red-500 px-4 py-2 rounded">
                No
              </button>
              <button className="bg-green-700 px-4 py-2 rounded">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;