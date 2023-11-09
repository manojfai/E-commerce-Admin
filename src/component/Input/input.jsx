import { Input } from "antd";

const Inputcomponent = ({
  placeholder,
  size,
  prefix,
  addonAfter,
  defaultValue,
  allowClear,
  className,
  label,
}) => {
  return (
    <>
    <label>{label}</label>
    <Input
      placeholder={placeholder}
      size={size}
      prefix={prefix}
      addonAfter={addonAfter}
      defaultValue={defaultValue}
      allowClear={allowClear}
      classNames={className}
    />
    </>
  );
};

export default Inputcomponent;
