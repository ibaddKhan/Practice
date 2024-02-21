import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  let [arr, setArr] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      console.log(res.data);
      setArr(res.data)
    })
  }, [])
  return (
    <>
      <div>

        {
          arr && arr.map((item, i) => (
            <ul key={i}>
              <li>{item.name}</li>
              <li>{item.age}</li>
              <li>{item.city}</li>
              <button>Delete</button>
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default App
