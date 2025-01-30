import React from "react";
import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import Container from "../../components/common/Container";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <Container>
        <div className="error-content">
          <BiErrorCircle className="error-icon" />
          <h1>Ops! Algo deu errado.</h1>
          <p className="error-message">Infelizmente, encontramos um problema.</p>
          
          <p>
            <strong>Status:</strong> {error?.status || "Desconhecido"}
          </p>
          <p>
            <strong>Mensagem:</strong> {error?.statusText || error?.message || "Erro desconhecido"}
          </p>
          
          {error?.data && (
            <p>
              <strong>Detalhes:</strong> {JSON.stringify(error.data)}
            </p>
          )}

          {error?.stack && (
            <details className="error-details">
              <summary>Ver detalhes técnicos</summary>
              <pre>{error.stack}</pre>
            </details>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
