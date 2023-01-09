import { Collaborators } from "../collaborators"


export const Team = (props) => {

    const styleBackground = { backgroundColor: props.secondaryColor }
    const styleBorder = { borderColor: props.primaryColor }

    return (
        (props.collaborators.length > 0) ? <section className="team" style={styleBackground}>
            <h3 className="team__title" style={styleBorder}>{props.name}</h3>
            <div className="team__collaborators">
                {props.collaborators.map(collaborator => <Collaborators key={collaborator.name} backgroundColor={props.primaryColor} name={collaborator.name} role={collaborator.role} image={collaborator.image}/>)}
            </div>
        </section>
        : ""
    )
}

