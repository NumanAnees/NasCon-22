import React from 'react'
import "../css/events.css"
import TableComp from "../components/TableComp/TableComp"
import {  Space } from 'antd';
import { PageHeader } from './PageHeader';

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
    <PageHeader subHeading='You can add new Community Service Events.' heading='Created Events' toLink="/dashboard/addnewevent" btnText='+ Add new event' />
    <div style={{margin:"1rem 2rem"}}>
        <div>
            {/* <h2 className='text-center heading-events'>My Created Events</h2> */}
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>
    {/* -----------------------------My Created Events-------------------------------------- */}
    <PageHeader subHeading='You can view interested events.' heading='Interested Events' />
     <div  style={{margin:"0rem 2rem"}}>
        <div>
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>    
    {/* -----------------------------My Created Events-------------------------------------- */}
    <PageHeader subHeading='You can view suggested events depending on your hobbies.' heading='Suggested Events' />
    <div  style={{margin:"0rem 2rem"}}>
        <div>
            <div className="padding-Table">
            <TableComp data={data} columns={columns} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Events