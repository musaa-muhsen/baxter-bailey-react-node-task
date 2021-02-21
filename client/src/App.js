import useFetch from './useFetch';
import React, {useState}  from 'react';

import CardContainer from './CardContainer';
import SideBar from './SideBar';


function App() {
  const [isActive, setActive] = useState(false);
  const [id, setId] = useState(null);
  //console.log(id)
  console.log(isActive)


  //const [layoutData, setLayoutdata] = useState()

  const {data : layoutData, isPending, error} = useFetch('http://localhost:3333/api/');
console.log(layoutData);

      return (   
    <>  
    <ul>
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {layoutData && <CardContainer setActive={setActive} isActive={isActive}  setId={setId} layoutData={layoutData} />}
    </ul>
     {isActive && <SideBar isActive={isActive} setActive={setActive} id={id} />} 
   

    </>
)

}


export default App


//  const layoutData =  async () => {    
    
//     const response = await fetch(`http://localhost:3333/api/`);
//     const data = await response.json();
//     return data;
    
// }


// const hello = layoutData();
// hello.then( data =>
//   console.log(data)