import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToEdit: true
};

const cellEdit = {
  mode: 'click'
};

const sourceCode = `\
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToEdit: true  // Click to edit cell also
};

const cellEdit = {
  mode: 'click'
};

<BootstrapTable
  keyField='id'
  data={ products }
  columns={ columns }
  selectRow={ selectRow }
/>
`;

export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } selectRow={ selectRow } cellEdit={ cellEdit } />
    <Code>{ sourceCode }</Code>
  </div>
);