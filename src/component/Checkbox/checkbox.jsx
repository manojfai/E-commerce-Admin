import { Checkbox } from "antd";

const Checkboxcomponent = ({
  label,
  onChange,
  checked,
  disabled,
  defaultChecked,
}) => {
  return (
    <>
      <Checkbox
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        {label}
      </Checkbox>
    </>
  );
};

export default Checkboxcomponent;
