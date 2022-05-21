import React from "react";
import "./dashboard.css";
import { useEffect } from "react";
// import CanvasJSReact from './../assets/canvasjs.react';
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Post from "../Posts/post";
import Share from "../share/share";
import "./feed.css";
import { Posts } from "../../dummyData";

const Dashboard=() => {

  return (
    <>
      <div className=" px-3 pe-4 pt-3">
        <div className="feed row">
      <div className="feedWrapper col-md-8">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      <div className="col-md-4"> 

      </div>
    </div>
      </div>
    </>
  );
};

export default Dashboard;
