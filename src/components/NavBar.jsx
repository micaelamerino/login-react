import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace:true
    })
    }
 
  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-2 bg-dark">
        <h1>
          <Link to={"/"} className="link">
            Logo
          </Link>
        </h1>

        {state?.logged ? (
          <div className="d-flex align-items-center gap-3">
            <span className="text-light">{state?.name}</span>
            <button className="btn btn-light" onClick={onLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <nav className="d-flex gap-3">
            <Link to={"/login"} className="link">
              Iniciar sesión
            </Link>
            <Link to={"/register"} className="link">
              Registrarse
            </Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};

export default NavBar;
