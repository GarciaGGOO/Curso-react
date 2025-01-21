import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ userName, userEmail }) => {
  // 3 - Gerenciamentos de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");
  const maxLength = 200;

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - Envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);

    //Validação
    //envio

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  const handleBio = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setBio(value);
    }
  };

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 - controle input
            value={name}
          />
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-email"
            // 4 - Simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controle input
            value={email}
          />
        </label>

        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            value={bio}
            onChange={handleBio}
          ></textarea>
          <p>
            {bio.length}/{maxLength} caracteres
          </p>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
