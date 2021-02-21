import React from 'react';

export default function SideBar({single, setActive, isActive}) {
  //const [isActive, setActive] = useState(false);
  // console.log(single.imageSrc)
  const handleClick = () => {
    setActive(!isActive);
 }
// image 
// name 
//
  
    return (
        <div onClick={handleClick} className="overlay">
               <img src={require(`./images/${single.imageSrc}`)} alt={single.imageSrc}/>
                     <p>{single.name}</p>
                     <button>read review</button>
        </div>
    )
}
