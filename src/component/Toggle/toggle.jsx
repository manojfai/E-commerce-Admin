import { Switch } from "antd";

const Togglecomponent = ({
  defaultChecked,
  onChange,
  checkedChildren,
  unCheckedChildren,
  loading,
  className,
  onClick
}) => {
  return (
    <>
      <Switch
        defaultChecked={defaultChecked}
        onChange={onChange}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        loading={loading}
        disabled={disabled}
        size={size}
        className={className}
        onClick={onClick}
      />
    </>
  );
};

export default Togglecomponent;
