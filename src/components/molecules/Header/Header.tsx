import { ReactNode } from "react";
import "./Header.css"
interface HeaderProps {
    title: string;
    prevIcons?: ReactNode;
}
const Header:React.FC<HeaderProps> = ({title, prevIcons}) => {
    return (
        <header className="header">
            {prevIcons}
            <h2>{title}</h2>
        </header>
    )
}
export default Header;