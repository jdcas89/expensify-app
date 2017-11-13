import React from "react";

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Edit Page</h2>
      <p>Editing the page of item {props.match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;
