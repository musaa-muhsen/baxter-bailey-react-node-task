import React, { useState} from 'react';
//import useFetch from "./useFetch"
 
const CardContainer = ({layoutData, setActive, isActive, setId}) => {
    //const [id, setId] = useState(null);


 const handleClick = (x) => {
    setId(x);
    setActive(!isActive);
 }



    return ( 
       <>
        {
            layoutData.map((el, index) => (
                <li onClick={() => handleClick(index)} className="card-container" id={index} key={index}>

                     <img src={require(`./images/${el.imageSrc}`)} />
                     <p>{el.name}</p>
                     <button>read review</button>
                </li>
            ))
        }
</>

     );
}
 
export default CardContainer; 

//ref={inputRef}
//e => setId(index)

    //const blogs = props.blogsProp;
    // props returns a object 
    //functions can be sent as props, the benifit of this is functions can send stuff up 
 // useref 
 // add the js functionanily from ws3 school 
 // we love falafel 
 // read review 
 //const inputRef = useRef(null); 

//console.log(inputRef)

    //const {isPending, data : dataSingle, error} = useFetch('http://localhost:3333/api/');

    

      // openNav();