import React from "react";

function ChangePass({ children, auth }) {
  if (auth) {
    return <>{children}</>;
  } else {
    return <div>Not Authenticcated</div>;
  }
}

export default ChangePass;
