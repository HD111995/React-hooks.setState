import {useState} from 'react';

const DayNight = () => {
    const [tag, setTag] = useState(true);
    return ( 
        <section>
            <h1>Day-Night</h1>
            <div style={tag ? {background:'lightblue'}:{background:'darkblue',color:'#fff'}}>
                <h3>{tag ? 'Es ist Tag !🌞':'Es ist Nacht ! 🌚'}</h3>
                <button onClick={()=> setTag(!tag)}>{tag ? 'Wechsel zu Nacht':'Wechsel zu Tag'}</button>
            </div>
        </section>
     );
}
 
export default DayNight;