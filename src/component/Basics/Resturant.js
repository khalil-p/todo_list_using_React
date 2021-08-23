import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import Navbar from "./navbar";

const uniqueList = [
  // use spread operator for only getting data not object
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturant = () => {
  // use state hook to manage data (hooks are better than redux)

  //  State Variable / Update Function / {define use state}
  const [menuData, setMenuData] = useState(Menu); // hooks should be always be on the top
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      {/* pass the data in the form of props. This is the way we pass the the data from one compomemt to other .i.e from parrent to child  */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
