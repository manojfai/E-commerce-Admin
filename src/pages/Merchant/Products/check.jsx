import { useState } from 'react';
import Search from '../../../component/Seachinput/search';
import Table from '../../../component/Table/table';
import { images } from '../../../utils/images.js';
import Contentheader from '../../../component/Content/contentHeader.jsx';
import Contentmain from '../../../component/Content/contentMain.jsx';
// import Check from './check.jsx';

const Check = ({
  contentTitle,
  contentParagraph,
  buttonLabel,
  deleteButtonLabel,
//   dataSource,
//   columns,
//   pagination,
//   rowKey,
//   rowSelection
}) => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
        <Contentheader contentTitle={contentTitle} contentParagraph={contentParagraph} buttonLabel={buttonLabel}/>
        <Contentmain deleteButtonLabel={deleteButtonLabel}/>
      {/* <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="listproductshead">{contentTitle}</div>
          <div className="listproductspara">{contentParagraph}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
          <button style={{}} className="button">{buttonLabel}</button>
        </div>
      </div> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <div style={{ marginTop: '2em', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {deleteButtonLabel && <button className="buttondelete">{deleteButtonLabel}</button>}
          </div>
          <div>
            <Search placeholder="Search by product name" />
          </div>
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ showSizeChanger: true, showQuickJumper: true }}
            rowKey={record => record.key}
            rowSelection={rowSelection}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Check;
