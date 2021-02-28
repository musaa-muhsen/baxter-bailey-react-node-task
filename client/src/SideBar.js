import React from 'react';


export default function SideBar({single, setActive, isActive}) {
  //const [isActive, setActive] = useState(false);
  // console.log(single.imageSrc)
  const handleClick = () => {
    setActive(!isActive);
 }
// image 
// name 
// Opening Hours: "hours"
// vegan 
// review 
  
    return (
        <div onClick={handleClick} className="overlay">
          <div className="sidebar-main-container">
            <article className="sidebar-top-container">
               <div className="make-center">
                   <div className="close-container"><span  className="close-btn">
                   <img aria-label="close" src={require('./images/x.svg')} alt={'close'}/>
                     </span></div>
                   <img   src={require(`./images/${single.imageSrc}`)} alt={single.imageSrc}/>
                 </div>
          
               <ul className="sidebar-info-list">
               <li>{single.name}</li>
                     <li><span>Location: </span>{single.location}</li>
                     <li><span>Opening Hours: </span><span>{single.hours}</span></li>
                     <li><span>Vegan: </span><span>{single.vegan}</span></li>
                     <li>
                       <div className="reviewTitle">Review:</div>
                       <div className="reviewDetails">{single.review}</div>
                     </li>
               </ul>
               </article>
            </div>
           

                    
        </div>
    )
}
