import React, {useState, useEffect} from 'react';

function FetchTestTwo() {
    const [imageData, setIamgeData] = useState("")

    useEffect(() => {
        console.log('effect')
        
          try {
              fetch(`/uploads/1600187326077hi.jpeg`)
              .then(response => response.blob())
              .then(images => {
                // Then create a local URL for that image and print it 
                const outside = URL.createObjectURL(images);   
                setIamgeData(outside)       
            });

           } catch (err) {
              console.log(err)
           }
        },[])



    return (
        <div>
            <img src={imageData} />
        </div>
    )
}

export default FetchTestTwo
