/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ContentHeader } from '@components';
import DataTable from 'react-data-table-component';
import { ThreeDots } from  'react-loader-spinner'

const ExpandedComponent = ({ data }) => <><br /><section className="content">
  <div className="container-fluid">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{data.title}</h3>
      </div>
      <div className="card-body">
        From Account : {data.source} <br />
        Amount : {data.amount}
      </div>
      <div className="card-footer">{data.date}</div>
    </div>
  </div>
</section></>;

const columns = [
  {
    name: 'Id',
    selector: row => row.id,
  },
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Source',
    selector: row => row.source,
  },
  {
    name: 'Amount',
    selector: row => row.amount,
  },
  {
    name: 'Date & Time',
    selector: row => row.date,
  },
];

const data = [
  {
    id: 1,
    title: 'Lunch',
    source: 'Cash',
    amount: '100',
    date: '06/11/2023 13:00',
  },
  {
    id: 2,
    title: 'Petrol Filling',
    source: 'Paytm Payments Bank',
    amount: '500',
    date: '04/11/2023 10:00',
  },
]

const pending = false;

const Blank = () => {
  return (
    <div>
      <ContentHeader title="Transections" />
      <section className="content">
        <DataTable
          columns={columns}
          data={data}
          progressPending={pending}
          progressComponent={<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#080808"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            // wrapperClassName=""
            visible={true}
          />}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          responsive={true}
          striped={true}
          pagination
          fixedHeader
          selectableRows
        // actions={actionsMemo}
        />
      </section>
    </div>
  );
};

export default Blank;
