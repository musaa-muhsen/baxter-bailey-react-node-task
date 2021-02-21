import useFetch from './useFetch';
import React , {useState} from 'react';

import CardContainer from './CardContainer';
// import TestOne from './components/TestOne';
// import UseRefTwo from './components/UseRefTwo';
//import TestUseEffect from './components/TestUseEffect';
//import TestUseEffectTwo from './components/TestUseEffectTwo';



 function App() {

  //const [layoutData, setLayoutdata] = useState()

  const {data : layoutData, isPending, error} = useFetch('http://localhost:3333/api/');
console.log(layoutData);

//  const layoutData =  async () => {    
    
//     const response = await fetch(`http://localhost:3333/api/`);
//     const data = await response.json();
//     return data;
    
// }


// const hello = layoutData();
// hello.then( data =>
//   console.log(data)
// )
      return (   
    <>  
    <ul>
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {layoutData && <CardContainer layoutData={layoutData} />}
    </ul>
   

    </>
)

}


export default App
