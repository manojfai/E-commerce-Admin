import Contentheader from '../../../../component/Content/contentHeader.jsx';
import Contentmain from '../../../../component/Content/contentMain.jsx';
import applabel from '../../../../utils/env.json';

const Productlist = () => {
    const columns = [
        {
          title: 'Product Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Price',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Status',
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (c, record) => {
            return (
              <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <img src={images.copy_ic}></img>
                <img src={images.delete_ic}></img>
              </div>
            );
          }
        }
      ];
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Contentheader
        contentTitle={applabel.catelog.products.title}
        contentParagraph={applabel.catelog.products.paragraph}
        buttonLabel={applabel.catelog.products.createproductbutton}
      />
      <Contentmain
        deleteButtonLabel={applabel.catelog.products.deleteproductbutton}
        placeholder={applabel.catelog.products.searchplaceholder}
        columns={columns}
      />
    </div>
  );
};

export default Productlist;
