import { ChangeEventHandler, ReactElement, ReactNode } from "react";
import './TextArea.css';

interface TextAreaProps {
    label?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    name?: string;
    required?: boolean;
    value?: string;
}
const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, onChange, name, required, value }) => {
    return (
        <>
            {label && <label>{label}:</label>}
            <textarea rows={7} className="textarea-container" value={value} placeholder={placeholder} onChange={onChange} name={name} required={required} />

        </>
    )
}
export default TextArea;