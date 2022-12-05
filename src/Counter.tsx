import {useState} from "react"


export function Counter (): JSX.Element {
const [count, setCount] = useState<number>(0)
    return (
    <>
    <h1> Counter App</h1>
    <> {count }</>
    <br />
    <button onClick = {() => setCount(count +1)}> +1 </button>
    <button onClick = {() => setCount(count -1)}> -1 </button>
    </>
 )
}