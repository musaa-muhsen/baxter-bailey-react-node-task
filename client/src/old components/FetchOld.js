import React, {useState, useEffect} from 'react';

// import TestOne from './components/TestOne';
// import UseRefTwo from './components/UseRefTwo';
//import TestUseEffect from './components/TestUseEffect';
//import TestUseEffectTwo from './components/TestUseEffectTwo';


 function FetchOld() {
  const [resourceType, setResourceType] = useState() // default value of posts
  console.log(resourceType);
  const [brine, setBrine] = useState();
 

  const [items, setItems] = useState();

useEffect(() => {
  console.log('effect')
  
    try {
        fetch(`/uploads/1600187326077hi.jpeg`)
        .then(response => response.blob())
        .then(images => {
          // Then create a local URL for that image and print it 
          const outside = URL.createObjectURL(images);
          //setBrine(outside)
          
          
      });

     } catch (err) {
        console.log(err)
     }
      // need some clean up here 
  })

  const imageData = items === undefined ? 1 : items[0].productImage;

  console.log(imageData)
  //console.log(brine)
  




  // useEffect(() => {
  //   console.log('effect two')
    
  //     try {
  //         fetch(`http://localhost:5003/subscribers/${imageData}`)
  //         .then(res => res.json())
  //         .then(json => setItems(json));
  
  //      } catch (err) {
  //         console.log(err)
  //      }
  //   },[items])

      return (
        
    <>
  
        <div>
            <button onClick={() => setResourceType('5f60ebbea149886703f6e216')}>id one</button>
            <button onClick={() => setResourceType('5f610250abbfae682badb2ad')}>id two</button>
        </div>
       
   
  
      
    </>
)

}


export default FetchOld