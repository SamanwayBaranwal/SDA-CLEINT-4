import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/nav';

interface DesktopNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
}

export const DesktopNav = ({ navItems, handleNavClick }: DesktopNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3">
      {navItems.map((item) => (
        <div 
          key={item.label} 
          className="relative group"
          onMouseEnter={() => setHoveredItem(item.label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick(item.href)}
            className={`flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md 
              ${item.label === 'Login' 
                ? 'bg-white text-[#003049] hover:bg-white/90' 
                : 'text-white hover:bg-white/10'
              }`}
          >
            <item.icon className={`w-4 h-4 ${item.label === 'Login' ? 'text-[#003049]' : 'text-white'}`} />
            <span>{item.label}</span>
            {item.subItems && (
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 
                  ${item.label === 'Login' ? 'text-[#003049]' : 'text-white'}`} 
              />
            )}
          </button>
          
          {item.subItems && (
            <div 
              className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 transition-all duration-200 transform 
                ${hoveredItem === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.label}
                    onClick={() => handleNavClick(subItem.href)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#003049]/5 hover:text-[#003049] 
                      whitespace-nowrap transition-colors duration-150"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
