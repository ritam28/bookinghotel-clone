import React from "react";
import "./searchItem.css";

const data = [
  {
    id: 1,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/476551719.jpg?k=eb9a8b7ae6b89a479640f05248016b78e283234f078affdbc02bff6b0a2a0c2d&o=",
    name: "Hotel Hyatt",
    location: "Janakpuri,Delhi",
    rating: 4.5,
    roomsLeft: 10,
    review: 10,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta mollitia iure commodi et eos modi rerum vel magnam! At reprehenderit sint ad excepturi, aut sapiente minus iure sequi reiciendis.",
  },
  {
    id: 2,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/467624705.jpg?k=48e601ec8bb2be1c112d06a8803c119bf84135d6db2695ee167669a2f7b7462e&o=",
    name: "The Taj Hotel",
    location: "bandra,mumbai",
    rating: 3.8,
    roomsLeft: 5,
    review: 510,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta mollitia iure commodi et eos modi rerum vel magnam! At reprehenderit sint ad excepturi, aut sapiente minus iure sequi reiciendis.",
  },
  {
    id: 3,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/476551719.jpg?k=eb9a8b7ae6b89a479640f05248016b78e283234f078affdbc02bff6b0a2a0c2d&o=",
    name: "Hyatt Regency",
    location: "CP,delhi",
    rating: 3.8,
    roomsLeft: 8,
    review: 200,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi soluta mollitia iure commodi et eos modi rerum vel magnam! At reprehenderit sint ad excepturi, aut sapiente minus iure sequi reiciendis.",
  },
];

const SearchItem = () => {
  return data.map((item) => (
    <div className="searchItem" key={item.id}>
      <img src={item.img} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.location}</span>
      </div>
      <div className="siDetails">{item.roomsLeft}</div>
      <div className="sirating">{item.rating}</div>
      <div className="siCancelOp">{item.description}</div>
    </div>
  ));
};

export default SearchItem;
