import { useState } from "react"
import { Button } from "../button"
import { DropDown } from "../dropDown"
import { TextField } from "../textField"

export const Form =  (props) => {


    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    
    const toSave = (e) => {
        e.preventDefault();
        props.toCollaboratorRegistered({
            name: name,
            role: role,
            image: image,
            team: team
        });
        clearInputs();
    }

    const clearInputs = () => {
        setName("");
        setRole("");
        setImage("");
        setTeam("");
    }

    return (
        <section  className="form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name} 
                    toChanged={value => setName(value)}
                />

                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role} 
                    toChanged={value => setRole(value)}
                />

                <TextField 
                    mandatory={true} 
                    label="Imagem" 
                    placeholder="Digite seu endereço de imagem"
                    value={image}
                    toChanged={value => setImage(value)}
                />

                <DropDown 
                    mandatory={true} 
                    label="Time" 
                    itens={props.teamsName}
                    value={team}
                    toChanged={value => setTeam(value)}
                />
                
                <Button texto="Criar time"/>
            </form>
        </section>
    )
}