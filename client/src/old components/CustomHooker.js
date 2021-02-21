import React, {useState, useRef, useEffect} from 'react'

function CustomHooker() {
    const [name, setName] = useState('')
   const x = useRef();
   useEffect(()=> {
   if(x.current.className === 'hello') {
       alert(1)
   }

   },[name]);
   
    return (
        <>
         <input ref={x} className="hello" type="text" value={name} onChange={e => setName(e.target.value)}/>
         <div>{name}</div>
        </>
    )
}

export default CustomHooker;
