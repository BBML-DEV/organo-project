import { useState } from "react";
import { Banner } from "./components/banner";
import { Form } from "./components/form";
import { Team } from "./components/team";
import "./styles/css/main.css"

function App() {

    const teams = [
      {
        name: "Programação",
        primaryColor: "#57C278",
        secondaryColor: "#d9f7e9"
      },
      {
        name: "Front-end",
        primaryColor: "#82cffa",
        secondaryColor: "#e8f8ff"
      },
      {
        name: "Data Science",
        primaryColor: "#a6d157",
        secondaryColor: "#f0f8e2"
      },
      {
        name: "Devops",
        primaryColor: "#e06b69",
        secondaryColor: "#fde7e8"
      },
      {
        name: "UX e Design",
        primaryColor: "#db6ebf",
        secondaryColor: "#fae9f5"
      },
      {
        name: "Mobile",
        primaryColor: "#ffba05",
        secondaryColor: "#fff5d9"
      },
      {
        name: "Inovação e Gestão",
        primaryColor: "#FF8A29",
        secondaryColor: "#ffeedf"
      },
    ];

    const [collaborators, setCollaborators] = useState([]);

    const toNewCollaboratorAdd = (collaborator) => {
      debugger
      setCollaborators([...collaborators, collaborator]);
    }

  return (
    <div className="App">
      <Banner/>
      <Form teamsName={teams.map( team => team.name) } toCollaboratorRegistered={collaborator => toNewCollaboratorAdd(collaborator)}/> 
      {teams.map(team => <Team 
        name={team.name} 
        key={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}
    </div>
  );


}

export default App;
