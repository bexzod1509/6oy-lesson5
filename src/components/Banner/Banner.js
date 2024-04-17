import React, { memo } from "react";
import "./Banner.css";
function Banner(props) {
  let link = props.data?.map((e, inx) => (
    <div key={inx} className="b">
      <a
        style={{
          color: `${props.color}`,
          borderBottom: `2px solid ${props.color}`,
        }}
        href="#"
      >
        {e}
      </a>
    </div>
  ));
  return (
    <div
      className="banner"
      style={{
        background: `url(${props.bg}) no-repeat`,
        color: `${props.color}`,
      }}
    >
      <h1>{props.title}</h1>
      <div className="b1">{link}</div>
      <h2>{props.title2}</h2>
      <h3>{props.description}</h3>
      <button
        style={{ color: `${props.color2}`, background: `${props.color}` }}
      >
        {props.btn}
      </button>
    </div>
  );
}

export default memo(Banner);
