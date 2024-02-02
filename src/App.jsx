import React,{useState} from 'react';
import Todolist from './Todolist';

const App=()=>{

    const [curvalue,nextvalue]=useState("");
    const [items,setItems]=useState([]);
   const typed=(eve)=>{
    nextvalue(eve.target.value);
   };

   const eventchange=()=>{
   setItems((eve)=>{
        return [...eve, curvalue];
   });

   nextvalue("");

   }; 
   const deleteItems=(id)=>{
    setItems((eve)=>{
        return eve.filter((arrElem,index)=>{
            return index!==id;
        })
    })
   }
    return(
<>
<div className='main_div'>
    <div className='center_div'>
        <br/>
        <h1>TO DO LIST</h1>
        <br/>
        <input type="text" placeholder="Add a item" value={curvalue} onChange={typed}/>
       <button onClick={eventchange}>+</button>
       <ol>

       {items.map((itemval,index)=>{
         return <Todolist
         key={index}
         id={index}
          text={itemval}
           onSelect={deleteItems} 
          />
       })}
        
       </ol>
    </div>
</div>
</>)
};
export default App;