import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  ...rests
}) => {
  return (
    <Button
      size={size}
      bordered={false}
      style={styleButton}
      {...rests}
      // icon={<SearchOutlined style={{ color: colorButton }} />}
    >
      <span style={styleTextButton}> {textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
