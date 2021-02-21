import React, {useState, useEffect} from 'react'

function FetchTestThree() {
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        console.log('effect')
        
          try {
              fetch(`/subscribers`)
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                setImageData(data)
                //  data.map(element => {
                    //console.log(element.productImage);
                   // console.log(element.productImage); 

                //  })
                }
              )      
           } catch (err) {
              console.log(err)
           }
        },[])

       

// div also needs a key  
    return (
        <div>
           { 
              imageData.map(element => {
                return (
                <img key={element._id}>{element.name}</img>
                )
            })   
           }
        </div>
    )
}

export default FetchTestThree
