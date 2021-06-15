import React from "react";
import Container from "../../components/Container";
import styles from "../NotFoundPage/NotFoundPage.module.css";

const ErrorPage = () => {
  return (
    <Container>
      <h1 className={styles.error}>Error 404, page not found</h1>
    </Container>
  );
};

export default ErrorPage;
