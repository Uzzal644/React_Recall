import { useState } from "react"
import Button from "./Button"

const Home = () => {
  const[count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>

    // <div>
    //     <h1>My name is Uzzal</h1>
    //     <h2>It am studying web dev.</h2>
    //     <Button textInsideButton = "Home" />
    // </div>
  )
}

export default Home
