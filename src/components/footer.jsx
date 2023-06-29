import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_content-address --same">
            <div className="company_name">
              <p className="title">ÂU GIA TÔN</p>
              <p className="desc">
                Công ty thi công sơn epoxy Âu Gia Tôn chuyên hoạt động trong
                lĩnh vực thi công sơn epoxy, xây dựng, sơn sàn, sơn nền nhà
                xưởng, bệnh viện, tầng hầm. Với nhiều năm kinh nghiệm trong
                ngành sơn epoxy...
              </p>
            </div>
            <div className="fanpage">
              <p className="title">Fanpage</p>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100029692442261&tabs=timeline&width=340&height=230&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=223682570374346"
                width={340}
                height={240}
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
          <div className="footer_content-infor --same">
            <div className="infor">
              <h3 className="title">Thông tin liên hệ</h3>
              <p className="title name">ÂU GIA TÔN</p>
              <p className="desc">Số điện thoại: 0899988684</p>
              <p className="desc">Email: nguyenchihuynh33@gmail.com</p>
              <p className="desc">Địa chỉ: Thành phố Thuận An, Bình Dương</p>
            </div>
            <div className="ggmap">
              <p className="title">Google map</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125431.15623570653!2d106.59046879726557!3d10.755769899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525d3eb20ec4d%3A0xbfda9996b895452b!2zU8ahbiBO4buBbiBCw6ogVMO0bmcgRXBveHktIFRoaSBDw7RuZyBTxqFuIEVwb3h5IE5ow6AgWMaw4bufbmctIFRSxq_hu5xORyBBTiBQQUNJRklD!5e0!3m2!1svi!2s!4v1688037030203!5m2!1svi!2s"
                width={"100%"}
                height={230}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="footer_content-contact --same">
            <div className="title">Thông tin khách hàng</div>
            <div className="form-group">
              <input type="text" placeholder="Họ tên" />
              <input type="text" placeholder="Số điện thoại" />
              <textarea name="" id="" placeholder="Nội dung"></textarea>
              <button className="send">Gửi Thông Tin</button>
            </div>
          </div>
        </div>
        <span className="copyright">
          Copyright © 2023 ÂU GIA TÔN EPOXY. All Rights Reverved.
        </span>
      </div>
    </footer>
  );
}
