import useFetch from './useFetch';
import React, {useState}  from 'react';
import CardContainer from './CardContainer';
import SideBar from './SideBar';


function App() {
  const [isActive, setActive] = useState(false);
  const [single, setSingle] = useState(null);
  
 //console.log(single);
  const [newLayoutData, setNewLayoutData] = useState(null);
  //const [test, setTest] = useState(null);

 

  //const [layoutData, setLayoutdata] = useState()
  
  //"proxy": "http://localhost:5003" http://localhost:3333
  const {data : layoutData, isPending, error} = useFetch('http://localhost:3333/api/');
  // console.log(newLayoutData);
  // console.log(layoutData);
  
/*
const handleSingle = (id) => {
  // filter does not change the original data is just returns a new filtered array 
   const data = layoutData.filter((thumb,index )=> {
      index == id
  }); 
  console.log(data);
  setNewLayoutData(data)
}
*/
      return (   
        <>
          <header><h1>reviews</h1></header> 
    <div className="main-container">
    
       
      <ul class="thumbnails-container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {layoutData && <CardContainer setActive={setActive} isActive={isActive}  setSingle={setSingle} layoutData={layoutData} setNewLayoutData={setNewLayoutData} />}
      </ul>
       {isActive && <SideBar newLayoutData={newLayoutData} isActive={isActive} setActive={setActive} single={single} />} 
    </div>
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