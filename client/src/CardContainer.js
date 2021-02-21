import React from 'react';
//import useFetch from "./useFetch"
 
const CardContainer = ({layoutData, setActive, isActive, setNewLayoutData, setSingle }) => {
    //const [id, setId] = useState(null);



 const handleClick = (idLocal) => {
     
    //setId(layoutData[idLocal].name);
    setActive(!isActive);
   // console.log(idLocal); //0
   // console.log(layoutData[idLocal].name); // all
   const single = layoutData.find(el => el.name === layoutData[idLocal].name); // using the find() method to match property names to single out as im used to using filter method on the unique id on the json    
   //console.log(single);
   setSingle(single);


     
//    const data = layoutData.filter((thumb )=> {
//         console.log(thumb)
//       return thumb == idLocal

//      }); 
    //   console.log(data);
    // setNewLayoutData(data)
 }



    return ( 
       <>
        {
            layoutData.map((el, index) => (
                <li onClick={() => handleClick(index)} className="card-container" id={index} key={index}>

                     <img src={require(`./images/${el.imageSrc}`)} alt={el.imageSrc}/>
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