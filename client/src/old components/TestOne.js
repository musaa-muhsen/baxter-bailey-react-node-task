import React, { useState, useRef, useEffect } from 'react'
//we can change this render count current as much as much as we want as many times as we want and we'll never ever cause our component to re-render because it's completely separate from our compnent render cycle so the imporetant thing about ref is it's very similar to state and that you can store a PREVIOUS  value in it and it persists between different renders but it does not cause you to re-render like state does     


function TestOne() {
    

    const [name, setName] = useState('');
    const renderCount = useRef(0);
    console.log(renderCount)

   
    useEffect(() => {
        console.log('effect')
        renderCount.current = renderCount.current + 1;
    }) // so no array means every render 
    // no point putting the renderCount as it effect the render???

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}</div>
             <div>{renderCount.current}</div>         
        </div>
    )
}

export default TestOne

