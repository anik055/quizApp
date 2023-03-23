import './index.css'

function RadioInput(props) {
    const { id, name, value, checked, onChange } = props;
  
    return (
      <label htmlFor={id} className="radio-input">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="radio-mark"></span>
        {props.label}
      </label>
    );
  }

  export default RadioInput;