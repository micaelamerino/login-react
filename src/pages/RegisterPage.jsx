import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onRegistert = (e) => {
    
    e.preventDefault();

    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };

  return (
    <div>
      <form
        onSubmit={onRegistert}
        className="d-flex flex-column align-items-center gap-2"
      >
        <h3>Registrarse:</h3>
        <div className="d-flex flex-column align-items-center">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Nombre</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
