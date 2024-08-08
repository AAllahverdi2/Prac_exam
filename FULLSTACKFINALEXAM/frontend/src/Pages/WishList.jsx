import React, { useContext } from "react";
import Maincontext from "../Context/context";
import { Toaster } from "react-hot-toast";

const WishList = () => {
  const { wishList,removeFromWishList } = useContext(Maincontext);
  return (
    <div className="container">
      <div className="row">
        {wishList.map((item, index) => {
          return (
            <div className="col-lg-4 col-md-6 mb-5 mr-2" key={index}>
              <div class="card" style={{ width: "18rem;" }}>
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.price}</p>

                  <button className="btn btn-danger" onClick={()=>{
                    removeFromWishList(item)
                  }}>delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Toaster/>
    </div>
  );
};

export default WishList;
