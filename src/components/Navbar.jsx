import React from 'react'

export const Navbar = () => {
  return (
    <div className=' bg-[#2424248C] gap-[40px] rounded-[10px] font-[Poppins] p-5 backdrop-blur-md fixed  w-[477px] h-[40px] z-30 flex text-white justify-between items-center'>
        {/* item1 */}
        <button className='flex items-center justify-center '>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5646 0.5C14.3572 0.5 15 1.14279 15 1.93533V3.17188C15 3.96444 14.3572 4.60721 13.5646 4.60721H1.43538C0.642801 4.60721 0 3.96442 0 3.17188V1.93533C0 1.14278 0.642817 0.5 1.43538 0.5H13.5646ZM13.5646 5.94639C14.3572 5.94639 15 6.58919 15 7.38173V8.61827C15 9.41083 14.3572 10.0536 13.5646 10.0536H1.43538C0.642801 10.0536 0 9.41081 0 8.61827V7.38173C0 6.58917 0.642817 5.94639 1.43538 5.94639H13.5646ZM13.5646 11.3928C14.3572 11.3928 15 12.0356 15 12.8281V14.0647C15 14.8572 14.3572 15.5 13.5646 15.5H1.43538C0.642801 15.5 0 14.8572 0 14.0647V12.8281C0 12.0356 0.642817 11.3928 1.43538 11.3928H13.5646Z" fill="white"/>
            </svg>
            
            <span>Menu</span>
        </button>
        <button>About</button>
        <button>Services</button>
        <button>Work</button>
        <button>Contact</button>
    </div>
  )
}
