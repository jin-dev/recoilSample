import React from "react";

export default ({ repo }) => {
  return (
    <div className="Box-row d-flex flex-items-center">
      <div> {repo.name}</div>
    </div>
  );
};
