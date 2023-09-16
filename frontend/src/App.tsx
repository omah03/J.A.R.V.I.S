import Controller from "./components/Controller"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Controller />
    </div>
  );
}

export default App
