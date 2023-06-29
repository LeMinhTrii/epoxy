import React, { useEffect } from "react";
import { scroll } from "../assets/js/scroll";
export default function Header() {
  useEffect(() => {
    scroll();
  });
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleOpenMenu = () => {
    document
      .querySelector(".header_content-hamburger")
      .classList.toggle("active");
    document.querySelector(".header_content-nav").classList.toggle("active");
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_content">
          <div className="header_content-contact">
            <a href="mailto:nguyenchihuynh33@gmail.com" className="email">
              Email: nguyenchihuynh33@gmail.com
            </a>
            <div className="followus">
              <span>Follow us:</span>
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932523/sonnuoc/fb_dxdjk6.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932523/sonnuoc/tw_vgzdhe.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932523/sonnuoc/ins_qibxa7.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932523/sonnuoc/linked_mj6xga.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="header_content-box">
            <div className="left">
              <a href="./" className="logo">
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1688034485/sonnuoc/z4473834908223_b6914fcb7c406eefdd16dafcc7b0c0e0_te09lv.jpg"
                  alt=""
                />
              </a>
              <div className="box">
                <p className="name">EPOXY ÂU GIA TÔN</p>
                <span className="text">Thi công Epoxy Uy Tín</span>
              </div>
              <span className="name --none">ÂU GIA TÔN EPOXY</span>
            </div>
            <div className="right">
              <div className="hotline">
                <span className="text">Hotline:</span>
                <span className="number">0899988684</span>
              </div>
              <div className="search">
                <input type="text" placeholder="Tìm kiếm..." />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="header_content-hamburger" onClick={handleOpenMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header_content-nav">
            <div className="box">
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Sản phẩm</a>
                </li>
                <li>
                  <a href="#">Thi công</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header_nav">
        <div className="container">
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Dịch vụ</a>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
            </li>
            <li>
              <a href="#">Thi công</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tell">
        <div className="circle">
          <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={22} cy={22} r={22} fill="url(#paint2_linear)" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0087 9.35552C14.1581 9.40663 14.3885 9.52591 14.5208 9.61114C15.3315 10.148 17.5888 13.0324 18.3271 14.4726C18.7495 15.2949 18.8903 15.9041 18.758 16.3558C18.6214 16.8415 18.3953 17.0971 17.384 17.9109C16.9786 18.239 16.5988 18.5756 16.5391 18.6651C16.3855 18.8866 16.2617 19.3212 16.2617 19.628C16.266 20.3395 16.7269 21.6305 17.3328 22.6232C17.8021 23.3944 18.6428 24.3828 19.4749 25.1413C20.452 26.0361 21.314 26.6453 22.2869 27.1268C23.5372 27.7488 24.301 27.9064 24.86 27.6466C25.0008 27.5826 25.1501 27.4974 25.1971 27.4591C25.2397 27.4208 25.5683 27.0202 25.9268 26.5772C26.618 25.7079 26.7759 25.5674 27.2496 25.4055C27.8513 25.201 28.4657 25.2563 29.0844 25.5716C29.5538 25.8145 30.5779 26.4493 31.2393 26.9095C32.1098 27.5187 33.9703 29.0355 34.2221 29.3381C34.6658 29.8834 34.7427 30.5821 34.4439 31.3534C34.1281 32.1671 32.8992 33.6925 32.0415 34.3444C31.2649 34.9323 30.7145 35.1581 29.9891 35.1922C29.3917 35.222 29.1442 35.1709 28.3804 34.8556C22.3893 32.3887 17.6059 28.7075 13.8081 23.65C11.8239 21.0084 10.3134 18.2688 9.28067 15.427C8.67905 13.7696 8.64921 13.0495 9.14413 12.2017C9.35753 11.8438 10.2664 10.9575 10.9278 10.4633C12.0288 9.64524 12.5365 9.34273 12.9419 9.25754C13.2193 9.19787 13.7014 9.24473 14.0087 9.35552Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint2_linear"
                x1={22}
                y1="-7.26346e-09"
                x2="22.1219"
                y2="40.5458"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e8434c" />
                <stop offset={1} stopColor="#d61114" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <span>0899988684</span>
      </div>
      <div className="scrolltotop" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="44"
          viewBox="0 0 24 24"
          width="44"
        >
          <path
            d="m17.5 11c0 .55-.45 1-1 1-.15 0-.29-.03-.42-.09l-4.08-1.91-4.08 1.91c-.13.06-.27.09-.42.09-.55 0-1-.45-1-1 0-.15.03-.28.09-.41l4.5-10c.15-.35.5-.59.91-.59s.76.24.91.59l4.5 10c.06.13.09.26.09.41z"
            fill="#2fccb7"
          ></path>
          <path
            d="m12 24c-6.065 0-11-4.935-11-11 0-3.335 1.484-6.444 4.073-8.529.431-.348 1.06-.278 1.406.151.346.43.278 1.06-.152 1.406-2.114 1.704-3.327 4.245-3.327 6.972 0 4.962 4.037 9 9 9s9-4.038 9-9c0-2.728-1.213-5.268-3.327-6.971-.431-.346-.498-.976-.152-1.406.348-.429.976-.499 1.406-.151 2.589 2.084 4.073 5.193 4.073 8.528 0 6.065-4.935 11-11 11z"
            fill="#cfd8dc"
          ></path>
          <path
            d="m12 0c-.41 0-.76.24-.91.59l-4.5 10c-.06.13-.09.26-.09.41 0 .55.45 1 1 1 .15 0 .29-.03.42-.09l4.08-1.91z"
            fill="#3dead3"
          ></path>
          <path
            d="m5.699 4.249c-.22 0-.441.072-.626.222-2.589 2.085-4.073 5.194-4.073 8.529 0 6.065 4.935 11 11 11v-2c-4.963 0-9-4.038-9-9 0-2.728 1.213-5.268 3.327-6.971.431-.346.498-.976.152-1.406-.197-.246-.487-.374-.78-.374z"
            fill="#b4bcc0"
          ></path>
        </svg>
      </div>
    </header>
  );
}
