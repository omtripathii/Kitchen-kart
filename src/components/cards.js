import { CDN_URL } from "../utils/constants";

const Cards = (props)=>{
    const {resdata} = props;
    const {cloudinaryImageId,locality,cuisines,avgRating,name} = resdata?.info;
    return (
      <div className="card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt=""></img>
        <div className="res-details">
            <h2>{name}</h2>
            <h3>{"⭐" + avgRating + "   *" +resdata.info.sla.slaString}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{locality}</h4>
            
        </div>
      </div>
    );
}

export default Cards;