import Menu from '../Menu';
import Logo from '../Logo';
import Search from '../Search';

export default function Header() {
    return (
        <div className="
            flex 
            flex-row 
            justify-between 
            p-2
            bg-gray-100">
        
        <Menu></Menu>

        <Logo></Logo>    
            
        <Search></Search>
        
        </div>
    );
};
