import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = props => (
  <div>
    <p>Filter text: </p>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        console.log(e.target.value)
        if(e.target.value === 'date'){
          props.dispatch(sortByDate());
        }else if(e.target.value === 'amount'){
          props.dispatch(sortByAmount());
        }
      }}
      >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
