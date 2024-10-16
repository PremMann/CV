import React from 'react';

const TaskTracking = ({ currentStage }) => {

    
  const stages = [
    'Service Request Submitted',
    'Commitment Received',
    'Data Entry',
    'Content Confirmation',
    'Post Published',
    'Accounts Receivable',
    'Service Request Complete',
  ];

  const getStageClass = (index) => {
    if (index < currentStage) return 'bg-green-500 text-white';
    if (index === currentStage) return 'bg-orange-500 text-white';
    return 'bg-gray-300 text-gray-600';
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        {stages.map((stage, index) => (
          <div key={index} className="flex-1 flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${getStageClass(
                index
              )}`}
            >
              <span className="text-xs text-center">{index + 1}</span>
            </div>
            <div
              className={`flex-1 h-1 ${
                index < stages.length - 1 ? 'mx-2' : ''
              } ${index < currentStage ? 'bg-green-500' : 'bg-gray-300'}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs">
        {stages.map((stage, index) => (
          <span
            key={index}
            className={`text-center flex-1 ${index < stages.length - 1 ? 'mr-2' : ''}`}
          >
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskTracking;
