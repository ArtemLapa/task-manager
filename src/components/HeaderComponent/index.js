import React from "react";

const HeaderComponent = () => {
  const day = new Date();
  let d_week = "Mon";
  switch (day.getDay()) {
    case 0:
      d_week = "Sun";
      break;
    case 1:
      d_week = "Mon";
      break;
    case 2:
      d_week = "Tue";
      break;
    case 3:
      d_week = "Wed";
      break;
    case 4:
      d_week = "Thu";
      break;
    case 5:
      d_week = "Fri";
      break;
    case 6:
      d_week = "Sat";
      break;
  }

  let month = "Jan";
  switch (day.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Spt";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  return (
    <div className="header">
      <div className="iphone__x"></div>
      <h1>Hello, Artem</h1>
      <div className="greeting">{`Today, ${d_week} ${day.getDate()} ${month}`}</div>
    </div>
  );
};

export default HeaderComponent;
