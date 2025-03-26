import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/nav';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ navItems, handleNavClick, isOpen, setIsOpen }: MobileNavProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleItemClick = (href: string, hasSubItems?: boolean, label?: string) => {
    if (hasSubItems) {
      setOpenSubMenu(openSubMenu === label ? null : label);
    } else {
      handleNavClick(href);
      setIsOpen(false);
      setOpenSubMenu(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-14 h-[calc(100vh-3.5rem)] w-full max-w-xs bg-white shadow-xl overflow-y-auto z-50"
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <div key={item.label} className="mb-1">
                  <button
                    onClick={() => handleItemClick(item.href, !!item.subItems, item.label)}
                    className="flex items-center justify-between w-full p-3 text-left hover:bg-gradient-to-r hover:from-[#8B5CF6]/10 hover:to-[#D946EF]/10 rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-[#8B5CF6]" />
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </span>
                    {item.subItems && (
                      <ChevronDown
                        className={`h-5 w-5 text-[#8B5CF6] transition-transform duration-200 ${
                          openSubMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.subItems && openSubMenu === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-8 space-y-1 border-l-2 border-[#8B5CF6]/20 pl-4 py-2">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.href}
                              onClick={() => {
                                handleNavClick(subItem.href);
                                setIsOpen(false);
                                setOpenSubMenu(null);
                              }}
                              className="block w-full p-2 text-left text-gray-600 hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/5 rounded-lg transition-colors text-sm"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
