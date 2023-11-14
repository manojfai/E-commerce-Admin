import { Checkbox } from "antd";

const Checkboxcomponent = ({
  label,
  onChange,
  checked,
  disabled,
  defaultChecked,
  className
}) => {


  return (
    
      <Checkbox
        className={className}
        onChange={onChange}
        // checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        {label}
      </Checkbox>
    
  );
};

export default Checkboxcomponent;
