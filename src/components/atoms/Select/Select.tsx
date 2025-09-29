import { ChangeEventHandler } from "react";
import './Select.css'
interface Options {
    name: string;
    value: string;
}
interface SelectProps {
    value?: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: Options[];
    required?: boolean;
}
const Select: React.FC<SelectProps> = ({ value, onChange, options, required }) => {
    return (
        <select className="select-input" value={value} onChange={onChange} required={required}>
            {options?.map((r: Options, i) => (
                <option value={r.value} key={i}>{r.name}</option>
            ))}
        </select>
    )
}
export default Select;