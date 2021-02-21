import React from 'react'

function UseRefTwo() {
    const [name, setName] = useState('');
    const inputRef = useRef();
    
    
    return (
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name}</div>
             <button onClick></button>
        </div>
    )
}

export default UseRefTwo
