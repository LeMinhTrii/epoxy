import React from "react";

export default function CategoryItem() {
  return (
    <div className="item">
      <div className="thumnail">
        <img
          src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932568/sonnuoc/thi-cong-son-chong-ri-set-450x300_mtqpif.png"
          alt=""
        />
      </div>
      <div className="content">
        <p className="name">Thi công Sàn Epoxy</p>
        <div className="square">
          <span>Khu vực thi công</span>
        </div>
      </div>
    </div>
  );
}
