import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="register__title">
        <h1>Formulario de Registro</h1>
      </div>
      <div className="register__form">
        <form action="/register" method="POST">
          <div>
            <label for="fisrtName">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre"
              id="fisrtName"
              name="fisrtName"
            />
          </div>
          <div>
            <label for="lastName">Apellido:</label>
            <input
              type="text"
              placeholder="Apellido"
              id="lastName"
              name="lastName"
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" placeholder="Email" id="email" name="email" />
          </div>
          <div>
            <label for="gender">Genero:</label>
            <select name="gender" id="gender">
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label for="birthday">Fecha de Nacimiento:</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              name="password"
            />
          </div>
          <div>
            <p>Confirmar contraseña</p>
            <input
              type="password"
              placeholder="Contraseña"
              id="birthday"
              name="birthday"
            />
          </div>
          <div>
            <select>
              <option value="+57">Colombia +57</option>
              <option value="+1">EE. UU. +1</option>
              <option value="+44">Reino Unido +44</option>
              <option value="+33">Francia +33</option>
            </select>
            <input
              type="tel"
              placeholder="Celular"
              maxLength={10}
              minLength={10}
              required
            />
          </div>
          <button>validar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
