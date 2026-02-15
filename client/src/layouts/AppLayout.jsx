import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/app/dashboard">Dashboard</Link> |{" "}
        <Link to="/app/profile">Profile</Link> |{" "}
        <Link to="/app/leaderboard">Leaderboard</Link>
      </nav>

      <hr />

      {/* Child pages will render here */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
