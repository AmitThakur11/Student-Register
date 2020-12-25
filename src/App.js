import React, { useState } from "react";
import "./styles.css";
import logo from "./images/l.svg";
var data = {
  student1: [
    {
      english: "90/100",
      hindi: "84/100",
      maths: "87/100",
      sst: "78/100",
      science: "73/100",
      total: "412/500",
      percentage: "82.4%"
    }
  ],
  student2: [
    {
      english: "86/100",
      hindi: "89/100",
      maths: "34/100",
      sst: "99/100",
      science: "98/100",
      total: "406/500",
      percentage: "81.2%"
    }
  ],
  student3: [
    {
      english: "60/100",
      hindi: "46/100",
      maths: "55/100",
      sst: "56/100",
      science: "33/100",
      total: "250/500",
      percentage: "50.4%"
    }
  ],
  student4: [
    {
      english: "69/100",
      hindi: "93/100",
      maths: "89/100",
      sst: "79/100",
      science: "78/100",
      total: "408/500",
      percentage: "81.6%"
    }
  ]
};

export default function App() {
  var [up, setup] = useState("student1");
  function clickHandler(item) {
    setup(item);
  }
  return (
    <div className="APP">
      <div>
        <img src={logo} alt="loading" />
        <pre className="head">STUDENTS DATA</pre>
      </div>
      <br />
      <div className="option">
        {Object.keys(data).map((item) => (
          <button onClick={() => clickHandler(item)}>{item}</button>
        ))}
      </div>
      <hr />
      <div className="info">
        <ul style={{ paddingLeft: 0 }}>
          {data[up].map((item) => (
            <li className=" info-list" style={{ listStyleType: "none" }}>
              <div className="sub">
                <pre>
                  <b>ENGLISH</b> : {item.english}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>HINDI</b> : {item.hindi}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>MATHS</b> : {item.maths}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>SOCIAL STUDIES</b> : {item.sst}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>SCIENCE</b> : {item.science}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>TOTAL</b> : {item.total}
                </pre>
              </div>
              <div className="sub">
                <pre>
                  <b>PERCENTAGE</b> : {item.percentage}
                </pre>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
