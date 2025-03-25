import React from 'react';

const InternshipCard = () => {
  return (
    <div className="relative bg-[#00c3d1] text-white w-full max-w-[380px] rounded-[10px] p-4 border border-[#2C2C2C]">
      <div className="absolute top-4 right-4 text-teal-400 uppercase text-xs">
        INTERNSHIP
      </div>
      
      <div className="mt-6">
        <h2 className="text-[17px] font-medium mb-4">Customer satisfaction</h2>
        
        <div className="mb-4">
          <h3 className="text-[#8F8F8F] text-xs mb-2">Skills Required:</h3>
          <div className="space-y-1">
            <p className="text-xs">English Proficiency (Spoken)</p>
            <p className="text-xs">English Proficiency (Written)</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-[#8F8F8F] text-xs mb-2">SALARY:</h3>
          <div className="text-base font-medium">₹ 15,000 /month</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-[#8F8F8F]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.33334L2 5.33334V14.6667H14V5.33334L8 1.33334Z" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 14.6667V8H10V14.6667" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs">Noida</span>
          </div>
          
          <button className="bg-teal-500 text-white px-4 py-2 rounded-[5px] text-xs">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;