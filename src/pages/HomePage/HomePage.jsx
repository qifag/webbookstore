import React from "react";
import TypeBook from "../../components/TypeBook/TypeBook";
import { WrapperTypeBook } from "./style";

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
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeBook>
        {arr.map((item) => {
          return <TypeBook name={item} key={item} />;
        })}
      </WrapperTypeBook>
      HomePage
    </div>
  );
};

export default HomePage;
