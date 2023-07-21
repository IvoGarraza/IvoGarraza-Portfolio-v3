import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="p-6">
      <h2 className="text-black flex w-full justify-center font-bold">
        Ivo Garraza
      </h2>
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
