// app/components/Tab.tsx

// We define the "props" that our component will accept.
interface TabProps {
  bgColor: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// This is our Tab component.
const Tab: React.FC<TabProps> = ({ bgColor, text, onClick }) => {
  // All the repeated styling classes are stored here in one place.
  const commonTabClasses = `
    flex justify-center h-full rounded-t-md py-[1.2vw] text-[3vw] md:py-2 md:text-2xl font-medium text-stone-800 shadow-lg
    transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1
  `;

  return (
    <li className="flex-grow">
      {/* 
        We combine the common classes with the unique bgColor prop.
        The href and children (text) are also used from the props.
      */}
      <button type="button" onClick={onClick} className={`${commonTabClasses} ${bgColor} w-full`}>
        <p className={`font-permanent -rotate-3`}>{text}</p>
      </button>
    </li>
  );
};

export default Tab;
