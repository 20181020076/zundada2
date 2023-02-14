import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContainer__text">
        <div className="loginContainer__text__title">
          <h1>ZUNDADA</h1>
          <p>"El que no arriesga se queda con las ganas"</p>
        </div>
        <div className="loginContainer__text__form">
          <div className="loginContainer__text__form__title">
            <h2>BIENVENIDO</h2>
            <p>
              ¿No tienes cuenta? <Link>Registrate</Link>
            </p>
          </div>

          <form action="">
            <input type="text" placeholder="Correo Electronico" />
            <input type="text" placeholder="Contraseña" />
            <button>verificar</button>
          </form>
        </div>
        <div className="loginContainer__text__passport">
            <button>google</button>
            <button>facebook</button>
            <button>ios</button>
        </div>
      </div>

      <div className="loginContainer__background">
        <video src="/images/login.mp4" muted autoPlay loop />
      </div>
    </div>
  );
};

export default Login;
