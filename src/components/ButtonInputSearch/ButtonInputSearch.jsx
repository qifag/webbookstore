import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "#FFF",
    backgroundColorButton = "#0d5acf",
    colorButton = "#FFF ",
  } = props;
  return (
    <div
      style={{
        display: "flex",
        background: "#FFFF",
        borderRadius: "10px",
      }}
    >
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={false}
        style={{ background: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        bordered={false}
        styleButton={{
          background: backgroundColorButton,
          border: "none",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  );
};

export default ButtonInputSearch;
