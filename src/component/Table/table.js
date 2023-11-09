import { Table } from "antd";

const Tables = ({
  columns,
  dataSource,
  pagination,
  onChange,
  rowKey,
  rowSelection,
  scroll,
  size
}) => {
  return (
      <Table
        size={size}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onChange}
        rowKey={rowKey}
        rowSelection={rowSelection}
        scroll={scroll}
      />
  );
};

export default Tables;
