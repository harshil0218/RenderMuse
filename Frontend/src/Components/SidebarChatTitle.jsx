import {React,useState,useEffect,useRef} from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
function SidebarChatTitle({title=''}) {
    const title1 = 'Lorem ipsum dolor sit amet'
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (

    <div className='flex w-full p-2 px-4 justify-between items-center dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-slate-600 bg-gray-100 text-gray-800 dark:text-gray-300'>
      <h1 className='text-md font-bold text-start'>
        {title1.length > 20 ? title1.slice(0, 15) + "..." : title1}
      </h1>
      <div className='relative' ref={menuRef}>
        <div className='ml-2 cursor-pointer' onClick={toggleMenu}>
          <MoreHorizRoundedIcon />
        </div>
        {isMenuOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 z-30 rounded-md shadow-lg'>
            <ul>
              <li className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>Share</li>
              <li className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>Delete Chat</li>
              <li className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'>Clear Chat</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SidebarChatTitle