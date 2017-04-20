import React from 'react';

const NoMatch = ({ location }) => (
  <h3 className="center">The url you are looking for {location.pathname} could not be found</h3>
)

export default NoMatch;
