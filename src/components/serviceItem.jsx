import React from "react";

export default function ServiceItem({ name }) {
  return (
    <div className="item">
      <div className="thumnail">
        <img
          src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932568/sonnuoc/thi-cong-son-chong-ri-set-450x300_mtqpif.png"
          alt=""
        />
      </div>
      <div className="content">
        <p className="name">{name}</p>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          molestiae, voluptates alias veritatis quisquam placeat odio sequi
          corporis repudiandae rerum a id suscipit quibusdam temporibus corrupti
          quasi voluptas quis non!
        </p>
      </div>
    </div>
  );
}
