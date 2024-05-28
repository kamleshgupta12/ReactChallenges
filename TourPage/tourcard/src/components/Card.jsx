import { useState } from "react";

function Card({ id, name, info, img, price, removeCard }) {

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 100)}....`
  function readMoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="cardContent">
      <div className="img">
        <img src={img} />
      </div>
      <div className="head">
        <div className="p">{id}</div>
        <h3>{name}</h3>
      </div>
      <div className="price">{price}</div>
      <div className="info"><p>{description}</p>
        <span className="readMore" onClick={readMoreHandler}>{readmore ? `show less` : `read more`}</span>
      </div>
      <div className="Button">
        <div><button className="btn1" onClick={() => removeCard(id)} >Not Intrested</button></div>
        <div><button className="btn2">Book Now</button> </div>
      </div>

    </div>
  );
};

export default Card;