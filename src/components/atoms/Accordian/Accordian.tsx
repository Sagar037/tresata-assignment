import { ReactNode, useState } from "react";
import './Accordian.css';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface AccordianProps {
    title: string;
    content: ReactNode;
    expanded?: boolean;
}
const Accordian: React.FC<AccordianProps> = ({ title, content, expanded = false }) => {
    const [isOpen, setIsOpen] = useState(expanded);

    const toggleAccordion = () => setIsOpen(!isOpen);
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`}><MdOutlineKeyboardArrowUp /></div>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default Accordian;