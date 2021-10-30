import {useState} from 'react';

const Faq = () => {
    const [dis, setDis] = useState(true);
    return ( 
        <section>
            <h1>FAQ</h1>
            <div style={{display:'flex',justifyContent: 'space-between'
            ,padding:'0 15px', width:'30vw', margin:'0 auto',background:'#333',color:'#fff'}}>
                <h2>Whay is React great?</h2>
                <button onClick={()=> setDis(!dis)}>+</button>
            </div>
            <div style={dis ? {display:'block'}:{display:'none'}}>
                <h3>Fast Learning Curve</h3>
            </div>
            <br/>
            <br/>
            <hr/>
        </section>
     );
}
 
export default Faq;