// app/components/Tab.tsx
import Link from "next/link";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

// We define the "props" that our component will accept.
interface TabProps {
  href: string;
  bgColor: string;
  text: string;
}

// This is our Tab component.
const Tab: React.FC<TabProps> = ({ href, bgColor, text }) => {
  // All the repeated styling classes are stored here in one place.
  const commonTabClasses = `
    flex justify-center h-full rounded-t-md py-[1.2vw] text-[3vw] md:py-2 md:text-2xl lg:text-3xl font-medium text-stone-800 shadow-lg
    transition duration-300 ease-in-out hover:-translate-y-1
  `;

  return (
    <li className="flex-grow">
      {/* 
        We combine the common classes with the unique bgColor prop.
        The href and children (text) are also used from the props.
      */}
      <Link href={href} className={`${commonTabClasses} ${bgColor}`}>
        <p className={`${kalam.className} -rotate-3`}>{text}</p>
      </Link>
    </li>
  );
};

export default Tab;
