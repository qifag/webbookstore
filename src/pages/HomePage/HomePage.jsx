import React from "react";
import TypeBook from "../../components/TypeBook/TypeBook";
import { WrapperTypeBook } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider01 from "../../assets/images/slider01.png";
import slider02 from "../../assets/images/slider02.png";
import slider03 from "../../assets/images/slider03.png";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = [
    "Sách học",
    "Sách nghiên cứu",
    "Sách hướng dẫn",
    "Bách khoa toàn thư",
    "Sách khoa học",
    "Sách kinh tế",
    "Từ điển",
    "Nhật ký",
    "Bản thảo",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeBook>
          {arr.map((item) => {
            return <TypeBook name={item} key={item} />;
          })}
        </WrapperTypeBook>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider01, slider02, slider03]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
