// app/components/Timeline.tsx

import React from "react";

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineItemProps {
  date: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, children }) => {
  return (
    // Margin bottom for spacing between items, and margin start to push content away from the line
    <li className="mb-10 ms-6">
      {/* This div creates the dot on the timeline */}
      <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full -start-1.75"></span>

      {/* This will display the date */}
      <time className="block mb-2 text-md text-blue-600 font-bold  leading-none">{date}</time>

      {/* The content for the timeline event (your custom JSX) goes here */}
      <div className="-ml-4">
        {children}
      </div>
    </li>
  );
};

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    // 'relative' is crucial for positioning the dots from child items.
    // 'border-s' creates the vertical line on the start (left) side.
    <ol className="ml-4 relative border-s-2 border-blue-500">{children}</ol>
  );
};

export { Timeline, TimelineItem };
