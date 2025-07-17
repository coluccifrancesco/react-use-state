import tecnologie  from '../../data/tecnologie';
console.log(tecnologie);

export default function Buttons(){
    return  <ul>
            {tecnologie.map((item)=>{
                return <li key={item.id}>
                    <button>{item.nome}</button>
                </li>
            })}
        </ul>
}