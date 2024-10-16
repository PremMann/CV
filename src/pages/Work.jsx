import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Work = (props) => {
  const { title, description, duration } = props;

  return (
    <div className="work">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl'>
          <h2 className='text-center text-6xl pb-2.5 font-mono text-[#e65101] uppercase'>
            Work
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Work;