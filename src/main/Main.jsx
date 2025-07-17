import { useState, useEffect } from 'react';
import Buttons from './Buttons'

export default function Main(){
    
    return(
        <div>
            <ul><Buttons /></ul>
        </div>
    );
}


// export default function Theory(){
    
//     // useState ritorna un array 
//     // [valore attuale (nomeValore), funzione che permette di cambiare il valore (comeCambiareValore)]
//     const [count, setCount] = useState(0);  
    

//     // callback function 
//     const sayHello = () => {
//         alert('Ciao!');
//     };
    
//     return(
//         <div>
//             {/* Uso di callback function per restituire un valore onClick */}
//             <button onClick={sayHello} >Ciao!</button>
            
//             {/* Uso di una funzione anonima per restituire un valore onClick */}
//             <button onClick={()=>{alert('Addio')}}>Addio</button>


//             <p>{count}</p>
//             <button onClick={() => {setCount(count + 1)}}>Counter</button>
//         </div>
//     );
// }