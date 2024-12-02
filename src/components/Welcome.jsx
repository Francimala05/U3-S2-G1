
import React from "react";



function Welcome () {
    React.useEffect(() =>{
        alert("Benvenuto nel nostro shop!");

    }, []);

    return (
        <div>
            <h2>Benvenuto!</h2>  
        </div>
    );
}


export default Welcome;