import React from 'react';

function Pagination({ pageNo, handlePrev, handleNext }) {
  return (
    <div className='bg-gray-400/40 p-4 mt-8 flex justify-center rounded-lg'>
      <div onClick={handlePrev} className='px-8 cursor-pointer'>
        <i className="fas fa-arrow-left"></i> {/* Use correct icon class */}
      </div>
      <div className='font-bold'>{pageNo}</div>
      <div onClick={handleNext} className='px-8 cursor-pointer'>
        <i className="fas fa-arrow-right"></i> {/* Use correct icon class */}
      </div>
    </div>
  );
}

export default Pagination;