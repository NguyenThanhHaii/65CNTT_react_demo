import React, { useState } from "react";

function Welcome({message, color, random}) {

    const [count, setCount] = useState(0);

    return <div>
        <p>Message tu component cha la: 
            <b>{message}</b>
        </p>
        <button className="d-block" onClick={random}>Click me</button>
    </div>
};

export default Welcome;


export const Goodbye = () => {
    return <div>Day la components Goodbye</div>;
};
