import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  const logo =
    "https://res.cloudinary.com/dylwewmt0/image/upload/v1703313185/PHOTO_LIST/Header/Header_03.png";
  return (
    <div>
      <div style={{ backgroundColor: "#004aad" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxwidth: "85%",
            height: "auto",
            backgroundColor: "#F2F2F2",
          }}
        />
      </div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>KNOWLEDGE YOUNG</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
            // onSearch=(onSearch)
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
