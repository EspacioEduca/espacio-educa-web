const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
    const baseStyle = "px-6 py-3 rounded font-mono font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-md inline-block text-center cursor-pointer";

    const variants = {
        primary: "bg-brand-accent text-white hover:bg-opacity-90 border border-transparent", // Naranja
        secondary: "bg-brand-primary text-white hover:bg-opacity-90 border border-transparent", // Azul
        outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        white: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary"
    };

    return (
        <button
            type={type}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;