import React from "react";
// How to use props?
// accetpt that props as an argument
const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {/* use map method with an array for looping */}
        {/* syntax (.map((crrElem, index, array)=>{})) */}
        {menuData.map((curElem) => {
          {
            /* destructuring */
          }
          const { id, name, category, image, description } = curElem;
          return (
            <>
              {/* when ever using map method always pass a key example : key = {currElem.id} */}
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
