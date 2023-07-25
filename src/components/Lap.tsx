import { useEffect, useState, useCallback } from "react";
import "./Lap.css";

const Lap = () => {
    const [lap, setLap] = useState(0);

    useEffect(()=>{
        console.log('updating lap');
    }, [lap]);
    
    const handleClick = useCallback(() => {
        setLap(lap + 1);
        console.log('handling the click');
    }, []);
    return (
        <div className="Lap">
            <h1>
                {lap}
            </h1>
            <br />
            <br />
            <button onClick={handleClick}> increment lap</button>
        </div>
    );

}
export default Lap;