import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged,setIsLogged] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // evento se detiene no actualiza la pagina
    setIsLogged(true);

    alert(`Usuario: ${email} - Password: ${password}`);
  }

  const handleEmailChange = ({ target: { value } }) => { // (event)
    // console.log(event.target.type);
    // const {value} = event.target;
    // setEmail(event.target.value);
    setEmail(value);
  }

  const handlePasswordChange = ({ target: { value } }) => setPassword(value);


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Ingresar</button>
      </form>

      {/* Renderizado condicional */}
      {isLogged && <h2>Logueado exitosamente!</h2>}
    </div>
  );
}

export default App;
