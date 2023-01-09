

export const TextField = (props) => {

    const defaultPlaceholder = props.placeholder;

    const toTyped = (event) => {
        props.toChanged(event.target.value);
    }


    return (
        <div className="textField">
            <label>{props.label}</label>
            <input value={props.value} onChange={toTyped} required={props.mandatory} placeholder={defaultPlaceholder}/>
        </div>
    )
}