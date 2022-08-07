import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ cats }) => (
  ////const { cats } = this.props;
  // const catCard = cats.map((cat, i) => {
  //   return (
  //     <Card
  //       // key={i}
  //       // id={cats[i].id}
  //       // name={cats[i].name}
  //       // email={cats[i].email}
  //       cat={cat}
  //     />
  //   );
  // });
  // return ( 
  //   <div  className="card-list " >
  //   {catCard}
  //   </div>
  // )
 
  <div className="card-list">
    {cats.map((cat) => {
      return <Card cat={cat} />;
    })}
  </div>
)
export default CardList;
