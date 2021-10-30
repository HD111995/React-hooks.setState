import {useState} from 'react';
import {Cat} from 'react-kawaii';
const ChangeMode = () => {
    const [sad, setSad] = useState(true);
    return ( 
        <section>
            {sad ? <Cat size={320} mood="sad" color="gold"/>:<Cat size={320} mode="happy" color="gold"/>}
            <button onClick={()=> setSad(!sad)}>Change Mode</button>
        </section>
     );
}
 
export default ChangeMode;