import { useNavigate } from "react-router-dom";
import ProjectForm from "../Project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const history = useNavigate();

  function creatPost(project) {
    //Inicializando Cost serviços
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //Redirect
        history("/project", { messagem: "Projeto criando com sucesso!" });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newmproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adiciona-lo</p>
      <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
