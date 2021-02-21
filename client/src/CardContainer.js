import React, {useRef} from 'react';
   // const {isPending, data : blog, error} = useFetch('http://localhost:3005/blogs/' + id);
    //import useFetch from "./useFetch"


const CardContainer = ({layoutData}) => {
   // const {isPending, data : blog, error} = useFetch('http://localhost:3005/blogs/' + id);

    //const blogs = props.blogsProp;
    // props returns a object 
    //functions can be sent as props, the benifit of this is functions can send stuff up 
 // useref 
 // add the js functionanily from ws3 school 
 // we love falafel 
 // read review 
 const inputRef = useRef(null); 

 console.log(inputRef)
 const handleClick = () => {
     inputRef.current;
 }
 

    return ( 
       <>
        {
            layoutData.map((el, index) => (
                <li ref={inputRef} className="card-container" id={index} key={index}>
                     <img src={require(`./images/${el.imageSrc}`)} />
                     <p>{el.name}</p>
                     <button onClick={handleClick}>read review</button>
                </li>
            ))
        }
   

</>

     );
}
 
export default CardContainer; 