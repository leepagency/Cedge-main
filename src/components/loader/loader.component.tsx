import "./styles.scss";

import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress size={90} />
    </div>
  );
};

export default Loader;
