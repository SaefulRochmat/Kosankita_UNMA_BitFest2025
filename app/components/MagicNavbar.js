"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  MessageCircle, 
  Camera, 
  Settings
} from 'lucide-react';

const MagicNavigation = ({ 
  items = [],
  onItemClick = () => {},
  size = 'medium',
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  // Default items
  const defaultItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'camera', label: 'Camera', icon: Camera },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  // Responsive Size Config
  const sizeConfig = {
    small: {
      container: 'h-14 sm:h-16 px-4 sm:px-6 w-full max-w-md sm:max-w-lg mx-auto',
      item: 'w-10 h-10 sm:w-12 sm:h-12',
      icon: 'w-5 h-5',
      text: 'text-[10px] sm:text-xs',
      indicator: 'w-12 h-12 sm:w-14 sm:h-14'
    },
    medium: {
      container: 'h-16 sm:h-20 px-6 sm:px-8 w-full max-w-lg sm:max-w-3xl mx-auto',
      item: 'w-12 h-12 sm:w-14 sm:h-14',
      icon: 'w-5 h-5 sm:w-6 sm:h-6',
      text: 'text-xs sm:text-sm',
      indicator: 'w-14 h-14 sm:w-16 sm:h-16'
    },
    large: {
      container: 'h-20 sm:h-24 px-6 sm:px-10 w-full max-w-xl sm:max-w-5xl mx-auto',
      item: 'w-14 h-14 sm:w-16 sm:h-16',
      icon: 'w-6 h-6 sm:w-7 sm:h-7',
      text: 'text-sm sm:text-base',
      indicator: 'w-16 h-16 sm:w-[72px] sm:h-[72px]'
    }
  };

  const config = sizeConfig[size];

  // Scroll detection for hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Update indicator position when active index changes
  useEffect(() => {
    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeIndex]);

  const updateIndicatorPosition = () => {
    if (!itemRefs.current[activeIndex] || !navRef.current) return;
    
    const activeItem = itemRefs.current[activeIndex];
    const navContainer = navRef.current;
    
    const activeRect = activeItem.getBoundingClientRect();
    const navRect = navContainer.getBoundingClientRect();
    
    const itemCenterX = activeRect.left + (activeRect.width / 2);
    const navCenterX = navRect.left + (navRect.width / 2);
    
    const offsetFromNavCenter = itemCenterX - navCenterX;
    
    setIndicatorPosition(offsetFromNavCenter);
  };

  const handleItemClick = (index, item) => {
    setActiveIndex(index);
    onItemClick(item, index);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full ${className}`}
        >
          <div className="relative flex justify-center">
            {/* Magic Indicator */}
            <motion.div
              className={`
                absolute 
                ${config.indicator}
                -top-2
                bg-blue-600
                rounded-full
                shadow-xl shadow-blue-500/30
                z-30
                flex items-center justify-center
                left-[48%]
              `}
              style={{
                transform: `translateX(-50%)`,
              }}
              animate={{
                x: indicatorPosition,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <motion.div
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="text-yellow-400"
              >
                {React.createElement(navigationItems[activeIndex]?.icon || Home, {
                  className: config.icon
                })}
              </motion.div>
            </motion.div>

            {/* Navigation */}
            <nav 
              ref={navRef}
              className={`
                relative
                flex items-center justify-center gap-x-4 sm:gap-x-8
                ${config.container}
                bg-white/95
                backdrop-blur-md
                rounded-full
                shadow-lg shadow-black/10
                border border-white/20
              `}
            >
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={item.id}
                    ref={(el) => itemRefs.current[index] = el}
                    className={`
                      relative z-10 
                      ${config.item}
                      flex items-center justify-center
                      rounded-full
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-green-500/30
                      ${isActive ? 'opacity-0' : 'opacity-100 text-gray-400 hover:text-gray-600 hover:scale-110'}
                    `}
                    onClick={() => handleItemClick(index, item)}
                    whileHover={{ 
                      scale: isActive ? 1 : 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {!isActive && (
                      <Icon className={config.icon} />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Label */}
            <motion.div
              className="absolute -bottom-6 sm:-bottom-8 z-20 left-1/2"
              style={{ 
                transform: `translateX(calc(-50% + ${indicatorPosition}px))`,
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={`${config.text} font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm whitespace-nowrap`}>
                {navigationItems[activeIndex]?.label}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MagicNavigation;
