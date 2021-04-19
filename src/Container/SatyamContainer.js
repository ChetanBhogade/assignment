import React, { useEffect, useState } from "react";
import "./SatyamContainer.css";

function SatyamContainer() {
  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("getting data: - ", data);
        setImgArray(data);
      });
  }, []);

  return (
    <div className="gallery">
      {imgArray.map((item, index) => {
        return (
          <img
            src={item.urls.regular}
            alt="flex-gallery"
          />
        );
      })}
    </div>
  );
}

export default SatyamContainer;
