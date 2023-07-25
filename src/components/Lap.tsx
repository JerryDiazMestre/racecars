import { useEffect, useState } from "react";
import "./Lap.css";

const Lap = () => {
    const [lap, setLap] = useState(0);

    useEffect(()=>{
        console.log('updating lap');
    }, [lap]);
    
    return (
        <div className="Lap">
            <h1>
                {lap}
            </h1>
            <br />
            <br />
            <button onClick={()=> setLap(lap + 1)}> increment lap</button>
        </div>
    );

}
export default Lap;