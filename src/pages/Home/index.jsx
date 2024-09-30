import React, {useState} from "react"
const Home = () => {
    const [count, setCount] = useState(0)
    return <div>
        <h1>这是home页面</h1>
        <div>count: {count}</div>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
}
export default Home