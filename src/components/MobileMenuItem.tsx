
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavItem, SubNavItem } from '@/types/nav';

interface MobileMenuItemProps {
  item: NavItem;
  handleNavClick: (href: string) => void;
}

export const MobileMenuItem = ({ item, handleNavClick }: MobileMenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const handleItemClick = () => {
    if (item.subItems) {
      setIsExpanded(!isExpanded);
    } else {
      handleNavClick(item.href);
    }
  };

  return (
    <div className="px-2">
      <button
        onClick={handleItemClick}
        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors ${
          item.label === 'Admin Login'
            ? 'bg-gradient-to-r from-sdblue to-blue-600 text-white hover:from-blue-600 hover:to-sdblue'
            : 'text-gray-700 hover:text-sdblue hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5" />
          {item.label}
        </div>
        {item.subItems && (
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`} 
          />
        )}
      </button>

      {item.subItems && (
        <div 
          className={`mt-1 ml-4 space-y-1 transition-all duration-200 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {item.subItems.map((subItem: SubNavItem) => (
            <button
              key={subItem.label}
              onClick={() => handleNavClick(subItem.href)}
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-sdblue hover:bg-gray-50 rounded-lg"
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
