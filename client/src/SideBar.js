import React, {useState} from 'react';

export default function SideBar({id, setActive, isActive}) {
  //const [isActive, setActive] = useState(false);
  console.log(id)
  const handleClick = () => {
    setActive(!isActive);
 }
  
    return (
        <div onClick={handleClick} className="overlay">
          
        </div>
    )
}
{/* <div className={isActive ? "blue" : "red"}>
     
     </div> */}