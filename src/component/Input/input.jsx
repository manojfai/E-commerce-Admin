import { Input } from 'antd';

const Inputcomponent = ({
  placeholder,
  size,
  prefix,
  addonAfter,
  defaultValue,
  allowClear,
  className,
  label,
  style,
  type
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
        style={style}
        classNames={className}
        type={type}
      />
    </>
  );
};

export default Inputcomponent;
