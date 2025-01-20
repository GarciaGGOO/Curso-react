import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  // 4 - Inline style dinâmico
  const n = 15;

  // 5 - Classes dinâmica
  const redTitle = true;

  return (
    <>
      <div className="App">
        {/* 1 - Css global */}
        <h1>CSS no React</h1>

        {/* 2 - Css de componente */}
        <MyComponent />
        <p>Pegou CSS do componente</p>

        {/* 3 - Inline style */}
        <p
          style={{
            color: "blue",
            padding: "25px",
            borderTop: "1px dotted blue",
          }}
        >
          Este elemento tem estilo inline
        </p>

        {/* 4 - Inline style dinâmico */}
        <h2 style={n > 10 ? { color: "purple" } : { color: "yellow" }}>
          CSS dinâmico
        </h2>
        <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
          CSS dinâmico
        </h2>

        {/* 5 - Classes dinâmicas */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este título vai ter uma classe
        </h2>

         {/* 6 - CSS modules */}    
        <Title />
      </div>
    </>
  );
}

export default App;
