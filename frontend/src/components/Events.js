import React from 'react'
import "../css/events.css"
import TableComp from "../components/TableComp/TableComp"
import {  Space } from 'antd';

const Events = () => {
    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Time',
    dataIndex: 'time',
    width: 150,
  },
  {
    title: 'Event Type',
    dataIndex: 'eventType',
    width:200,
  },{
    title: 'Stars',
    dataIndex: 'stars',
    width:150,
  },
  {
    title: 'Action',
    key: 'action',
    width:150,
    render: (text, record) => (
      <Space size="middle">
        <a><span className="action-clr">View Event</span></a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    time: "13 july 2020",
    eventType: `London Park`,
    stars: "⭐ 2200",

  });
}
  return (
    <>
    {/* -----------------------------My Created Events-------------------------------------- */}
    <div>
        <div>
            <h2 className='text-center heading-events'>My Created Events</h2>
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>
    {/* -----------------------------My Created Events-------------------------------------- */}
     <div>
        <div>
            <h2 className='text-center heading-events'>My Interested Events</h2>
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>    
    {/* -----------------------------My Created Events-------------------------------------- */}
    <div>
        <div>
            <h2 className='text-center heading-events'>Suggested Events</h2>
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Events