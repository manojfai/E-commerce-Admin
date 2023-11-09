import { Select } from "antd";

const Selectcomponent = ({
  defaultValue,
  onChange,
  options,
  disabled,
  allowClear,
  mode,
  placeholder,
  optionRender,
  value,
  labelInValue,
  className,
}) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        disabled={disabled}
        allowClear={allowClear}
        mode={mode}
        placeholder={placeholder}
        optionRender={optionRender}
        value={value}
        labelInValue={labelInValue}
        className={className}
      />
    </>
  );
};

export default Selectcomponent;
