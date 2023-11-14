import Contentheader from '../../../../component/Content/contentHeader.jsx';
import Contentmain from '../../../../component/Content/contentMain.jsx';
import Toggle from '../../../../component/Toggle/toggle.jsx';
import applabel from '../../../../utils/env.json';
import { images } from '../../../../utils/images.js';

const Collection = () => {
  const columns = [
    {
      title: 'Product Collection Name',
      dataIndex: 'name',
      key: 'name'
    },
    // {
    //   title: 'Price',
    //   dataIndex: 'age',
    //   key: 'age'
    // },
    // {
    //   title: 'Status',
    //   dataIndex: 'address',
    //   key: 'address'
    // },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'x',
      render: (c, record) => {
        return (
          <Toggle />
          // <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
          //   <img src={images.copy_ic}></img>
          //   <img src={images.delete_ic}></img>
          // </div>
        );
      }
    },
    {
      title: '',
      dataIndex: '',
      key:'y',
      render: (c,record) => {
        return(
          <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
          <img src={images.delete_ic} ></img>
          </div>
        )
      }
    },
  ];
  return(
        <div style={{ width: '100%', height: 'auto' }}>
      <Contentheader
        contentTitle={applabel.catelog.Collections.title}
        contentParagraph={applabel.catelog.Collections.paragraph}
        buttonLabel={applabel.catelog.Collections.addcollectionbutton}
        navigatepath="/collections/create"
      />
      <Contentmain
        // deleteButtonLabel={applabel.catelog.Collections.deleteproductbutton}
        placeholder={applabel.catelog.Collections.searchplaceholder}
        columns={columns}
      />
    </div>
    )
}

export default Collection