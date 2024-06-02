"use client"
import { useEffect, useState } from 'react';
import { MdArrowCircleUp, MdArrowDropUp } from 'react-icons/md';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-[6rem] right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-neutral-900 text-white p-1 text-3xl rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
        >
        <MdArrowDropUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
