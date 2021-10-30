import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return ( 
        <section>
            <h1>Counter</h1>
            <div style={{display:'flex',justifyContent:'space-between',width:'15vw',margin:'0 auto'}}>
            <button onClick={()=>setCount(count - 1 )}>-1</button>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>+1</button>
            </div>
            <button onClick={()=> setCount(0)}>Reset</button>
            <br/>
            <br/>
            <br/>
            <hr/>
        </section>
     );
}
 
export default Counter
