import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <div>
      {previousPagePath && (
        <span><Link to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        <span><Link to={nextPagePath}>Next</Link></span>
      )}
    </div>
  );
};

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pager
