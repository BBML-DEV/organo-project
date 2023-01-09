

export const Collaborators = ({name, role, image, backgroundColor}) => {

    return (
        <div className="collaborators">
           <div className="collaborators__header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name} />
           </div>
           
           <div className="collaborators__footer">
                <h4 className="collaborators__footer--title">{name}</h4>
                <h5 className="collaborators_footer--role">{role}</h5>
           </div>
        </div>
    )
}