import { ReactNode, useState } from "react";
import './Accordian.css';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IconBaseProps } from "react-icons";

interface AccordianProps {
    title: string;
    content: ReactNode;
    expanded?: boolean;
}
const ArrowUpIcon = MdOutlineKeyboardArrowUp as React.ComponentType<IconBaseProps>;
const Accordian: React.FC<AccordianProps> = ({ title, content, expanded = false }) => {
    const [isOpen, setIsOpen] = useState(expanded);
    const toggleAccordion = () => setIsOpen(!isOpen);
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`}><ArrowUpIcon /></div>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default Accordian;