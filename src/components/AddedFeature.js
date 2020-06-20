import React from 'react';
/********************my imports  ***************************************/
import { connect } from 'react-redux'
import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        props.removeFeature(props.feature)
      }} 
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

/************mapStateToProps  ******************************/
const mapStateToProps = state => {
  return{
    state,
  }
}

/**************mapDispatchToProps *******************************/
const mapDispatchToProps = { removeFeature };

/**************add connect ***************************************/
export default connect(mapStateToProps,mapDispatchToProps)(AddedFeature);
