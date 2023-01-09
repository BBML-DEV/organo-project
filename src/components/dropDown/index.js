

export const DropDown = (props) => {
    

    return (
        <div className="dropDown">
            <label>{props.label}</label>
            <select value={props.value} required={props.mandatory} onChange={event => props.toChanged(event.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}