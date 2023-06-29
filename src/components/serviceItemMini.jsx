import React from "react";

export default function ServiceItemMini({ name }) {
  return (
    <div className="item">
      <div className="thumnail">
        <img
          src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932568/sonnuoc/thi-cong-son-chong-ri-set-450x300_mtqpif.png"
          alt=""
        />
      </div>
      <div className="content">
        <p className="name">Thi công sơn epoxy ở Đồng Tháp</p>
        <div className="plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fontSize={12}
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <span>Khu vực thi công</span>
        </div>
        <div className="plus">
          <svg
            fontSize={12}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <span>Hoàn thành vào ngày</span>
        </div>
      </div>
    </div>
  );
}
