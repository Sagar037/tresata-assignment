import { ChangeEventHandler, ReactElement, ReactNode } from "react";
import './Input.css';

interface InputProps {
    label?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    icon?: ReactNode;
    type: string;
    name?: string;
    required?: boolean;
    value?: string;
}
const Input: React.FC<InputProps> = ({ label, type, placeholder, onChange, icon, name, required, value }) => {
    return (
        <>
            {label && <label>{label}:</label>}
            <div className="input-container">
                {icon && <i>{icon ?? null}</i>}
                <input value={value} type={type} placeholder={placeholder} onChange={onChange} name={name} required={required}/>
            </div>

        </>
    )
}
export default Input;