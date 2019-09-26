import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index.js";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     remove: (feature) => dispatch(removeFeature(feature))
//   }
// }

export default connect(
  null,
  { removeFeature }
)(AddedFeature);
