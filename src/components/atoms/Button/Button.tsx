interface ButtonProps {
    onClick?: () => void;
    children: string | null;
    className?: string;
    type?: "submit" | "reset" | "button";
}
const Button: React.FC<ButtonProps> = ({ onClick, children, className, type, ...props }) => {
    return (
        <button className={`btn-class ${className}`} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    )
}
export default Button;