import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="register__title">
        <h1>Formulario de Registro</h1>
      </div>
      <div className="register__form" >
        <form action="http://localhost:9000/register" method="POST">
          <div>
            <label htmlFor="fisrtName">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre"
              id="fisrtName"
              name="fisrtName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              placeholder="Apellido"
              id="lastName"
              name="lastName"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="gender">Genero:</label>
            <select name="gender" id="gender">
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="birthday">Fecha de Nacimiento:</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="password2">Contraseña:</label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password2"
              name="password2"
            />
          </div>
          <div>
            <select name="country">
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
              id="phone"
              name="phone"
            />
          </div>
          <button type="submit">validar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
