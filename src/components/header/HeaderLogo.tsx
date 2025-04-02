
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300"> 
      <img 
              src="https://www.tkzus.com/images/footer-logo.png"
              alt="Logo"
              className="h-14"
            />
    </Link>
  );
};

export default HeaderLogo;
