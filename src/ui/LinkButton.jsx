import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:text-blue-700"
      >
        {children}
      </button>
    );
  return (
    <Link to={to} className="text-sm text-blue-500 hover:text-blue-700">
      {children}
    </Link>
  );
}

export default LinkButton;
