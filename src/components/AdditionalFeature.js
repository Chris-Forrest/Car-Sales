import React from 'react';
/***********my imports  ******************************/
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick={() => {
        props.addFeature(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

/***************mapStateToProps to bring in state *****************/
const mapStateToProps = state => {
  return {
    state,
  }
}

/**************mapDispatchToProps to bring in the function *************/
const mapDispatchToProps = { addFeature };

/**************add connect and map to props and dispatch to props **********/

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (AdditionalFeature);
