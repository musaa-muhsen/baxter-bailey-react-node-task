import React, {useEffect, useState} from 'react';


function TestUseEffect() {
    const [resourceType, setResourceType] = useState('posts') // default value of posts
    const [items, setItems] = useState([]);
   
    console.log('render all')
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        console.log('render effect')

        return () => {
            console.log('return from resource change');
        }
        // this return code is essiantantly considered your clean up so every single time this useEffect gets ran whatever is in the return runs first to clean up whatever we did last time 
    },[resourceType])
    // so only when the state or whatever actually changes does this effect hook get excutated 
    // [] on mount only 
    // if useEffect is not in place than posts the default will constantly be called 
    

    return (
        <div>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
           
        </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
    })}
        </div>
        
    )
}

export default TestUseEffect

// we some sort of side effect when something happens 
