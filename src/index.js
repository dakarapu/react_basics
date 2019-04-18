import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";
// import CommentDetails from "./components/commentDetails";
// import ApprovalCard from "./components/approvalCard";
//import Location from "./components/location";
import Location from "./components/location";

const App = function() {
  return (
    <div className="ui container comments">
      {/* <CommentDetails
        picture={faker.image.avatar()}
        author="Tony"
        content={faker.lorem.sentence()}
        posted={faker.date.weekday()}
      />
      <ApprovalCard>
        <CommentDetails
          picture={faker.image.avatar()}
          author="Captain"
          content={faker.lorem.sentence()}
          posted={faker.date.weekday()}
        />
      </ApprovalCard>
      <Location /> */}
      <Location />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
