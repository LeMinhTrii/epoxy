import React from "react";
import { slider, slider2 } from "../libs/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutItem from "../components/aboutItem";
import CategoryItem from "../components/categoryItem";
import ProductItem from "../components/productItem";
import ServiceItem from "../components/serviceItem";
import ServiceItemMini from "../components/serviceItemMini";
export default function Home() {
  return (
    <main className="main">
      <section className="banner">
        <div className="banner_wrap">
          <Slider {...slider}>
            <div className="banner_wrap-thumnail">
              <img
                src="https://res.cloudinary.com/dsuxginpx/image/upload/v1688034801/pexels-matheus-natan-3394939_zh2eot.jpg"
                alt=""
              />
            </div>
            <div className="banner_wrap-thumnail">
              <img
                src="https://res.cloudinary.com/dsuxginpx/image/upload/v1688034801/pexels-matheus-natan-3394939_zh2eot.jpg"
                alt=""
              />
            </div>
            <div className="banner_wrap-thumnail">
              <img
                src="https://res.cloudinary.com/dsuxginpx/image/upload/v1688034801/pexels-matheus-natan-3394939_zh2eot.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about_content">
            <div className="about_content-left">
              <div className="item">
                <div className="thumnail">
                  <img
                    src="https://res.cloudinary.com/dsuxginpx/image/upload/v1687932568/sonnuoc/thi-cong-son-chong-ri-set-450x300_mtqpif.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p className="title">Giới thiệu Epoxy Âu Gia Tôn</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores inventore necessitatibus fuga, dolor hic vel
                    quibusdam doloremque delectus deserunt enim sint! A
                    voluptate, doloribus corrupti possimus exercitationem
                    reiciendis sequi impedit.
                  </p>
                  <a href="#" className="btn-more">
                    <span> Xem thêm</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="#fff"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </a>
                </div>
              </div>
              <AboutItem />
              <AboutItem />
              <AboutItem />
            </div>
            <div className="about_content-right">
              <div className="heading heading-cpn">
                <span className="title">HẠNG MỤC THI CÔNG</span>
              </div>
              <div className="box">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product">
        <div className="container">
          <div className="product_content">
            <div className="product_content-textbox heading-cpn">
              <span>Sản Phẩm Nổi Bật</span>
            </div>
            <div className="product_content-box">
              <Slider {...slider2}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="service_content">
            <div className="service_content-left">
              <div className="row">
                <div className="heading-cpn">
                  <span>Dịch vụ thi công sơn epoxy</span>
                </div>
                <div className="box">
                  <ServiceItem name="Thi công sơn sàn epoxy" />
                  <ServiceItem name="Quy trình thi công" />
                  <ServiceItem name="Dịch vụ thi công" />
                  <ServiceItem name="Thi công sơn chống rĩ sắt" />
                  <ServiceItem name="Thi công sơn epoxy sân thể thao" />
                  <ServiceItem name="Thi công sơn epoxy nhà xưởng" />
                </div>
              </div>
              <div className="row">
                <div className="heading-cpn">
                  <span>Kinh Nghiệm</span>
                </div>
                <div className="box">
                  <ServiceItem name="Giá sơn nền 2 thành phần tại bình dương" />
                  <ServiceItem name="Giá sơn nền xi măng tại bình dương" />
                  <ServiceItem name="Giá sơn epoxy chống thấm tại bình dương" />
                  <ServiceItem name="Các loại sơn epoxy tại bình dương" />
                  <ServiceItem name="Quy trình thi công tại bình dương" />
                  <ServiceItem name="Sơn Apt tại bình dương" />
                </div>
              </div>
            </div>
            <div className="service_content-right">
              <div className="row">
                <div className="heading-cpn">
                  <span>Công trình nổi bật</span>
                </div>
                <div className="box">
                  <ServiceItem name="Thi công sơn epoxy ở Bình Dương" />
                  <div className="list">
                    <ServiceItemMini name="Thi công sơn epoxy ở Đồng Tháp" />
                    <ServiceItemMini name="Thi công sơn epoxy ở Củ Chi" />
                    <ServiceItemMini name="Thi công sơn epoxy ở Sài Gòn" />
                    <ServiceItemMini name="Thi công sơn epoxy ở Sài Gòn" />
                    <ServiceItemMini name="Thi công sơn epoxy ở Sài Gòn" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="heading-cpn">
                  <span>VIDEO</span>
                </div>
                <div className="video">
                  <iframe
                    width="100%"
                    height="220"
                    src="https://www.youtube.com/embed/uHFAYJHkaEY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
