import React from "react";

const MenuCard = ({menuData}) => {
    // console.log(menuData);
    
    return (
        <>
           <section className="main-card-cointainer">
           {
               menuData.map((curElem)=>{
                const {id, name, category, image, description} = curElem
                return (
                    <div className="card-container" key={id}>
                        <div className="card">
                             <div className="card-body">
                                 <span className="card-number card-circle subtle">{id}</span>
                                 <span className="card-author subtle">{name}</span>
                                 <h2>{name}</h2>
                                 <span>
                                    {description}
                                 </span>
                                 <div className="card-read">Read</div>
                             </div>
                             <img src={image} alt="img" className="card-media" />
                             <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
                )
               })
           }
           </section>
        {/* <h1>Hello. this is my page</h1> */}
        </>
    )
}

export default MenuCard;