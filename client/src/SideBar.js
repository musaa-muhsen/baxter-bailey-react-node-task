import React, {useState} from 'react';

export default function SideBar({single, setActive, isActive}) {
  //const [isActive, setActive] = useState(false);
   console.log(single.imageSrc)
  const handleClick = () => {
    setActive(!isActive);
 }

  
    return (
        <div onClick={handleClick} className="overlay">
               <img src={require(`./images/${single.imageSrc}`)} />
                     <p>{single.name}</p>
                     <button>read review</button>
        </div>
    )
}
{/* <div className={isActive ? "blue" : "red"}>
     
     </div> */}