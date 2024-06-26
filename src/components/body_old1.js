
import Cards from "./cards";
import reslist from "../utils/mockdata";
import { useState } from "react";

const Body = ()=>{
    const [listofRes , setlistofRes] = useState(reslist)
    
    return (
        <div className="body">
            <div className="Filter">
                <button className="btn1" onClick={()=>{
                    const filteredlist = reslist.filter((res)=>res.info.avgRating>4)
                    setlistofRes(filteredlist)
                    console.log(filteredlist)


                    
                    // one way - not the correct one 

                    // listofRes = reslist.filter((restaurent)=>
                    //     restaurent.info.avgRating>4 )
                    // console.log(listofRes)




                }}>TOP RATED RESTAURENTS</button>
                
            </div>
            <div className="res-cards">
                
                {listofRes.map(index => (
                        <Cards key = {index.info.id} resdata = {index}/>
                    ))
                }
                 {/* {reslist.map((resdata, index) => (
                    <Cards key={index} resdata={resdata} />
                ))}   */}
                    
            </div>
        </div>
    );
}

// export default Body;