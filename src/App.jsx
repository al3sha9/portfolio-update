import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AnimatedCursor from "react-animated-cursor";
import './App.css'



function App() {
  

  return (
    <div className="App">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
        />
      </div>
      <h1>To new beginnings</h1>
    </div>
  )
}

export default App
