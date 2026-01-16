import Image from "next/image";

export default function Home() {
  return (
    // The screen is the positioning context for our centered div.
    <div className="relative h-screen bg-zinc-50 font-sans dark:bg-stone-600">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[80vw] h-[60vw] max-w-[106.67vh] max-h-[80vh] border-3 border-amber-600">
        {/* Tabs over the folder */}
        <nav className="absolute w-2/3 h-1/6 right-0 z-2 -translate-y-2/3 lg:-translate-y-1/2 border-3 border-amber-600">
          <ul className="flex w-full h-full gap-x-1">
            <li className="flex-grow">
              <a
                href="#"
                className="flex justify-center h-full rounded-t-md bg-green-500 py-[1.2vw] text-[2vw] md:py-2 md:text-sm font-bold text-white shadow-lg">
                About
              </a>
            </li>
            <li className="flex-grow">
              <a
                href="#"
                className="flex justify-center h-full rounded-t-md bg-blue-400 py-[1.2vw] text-[2vw] md:py-2 md:text-sm font-bold text-white shadow-lg">
                Skills
              </a>
            </li>
            <li className="flex-grow">
              <a
                href="#"
                className="flex justify-center h-full rounded-t-md bg-red-500 py-[1.2vw] text-[2vw] md:py-2 md:text-sm font-bold text-white shadow-lg">
                Projects
              </a>
            </li>
            <li className="flex-grow">
              <a
                href="#"
                className="flex justify-center h-full rounded-t-md bg-yellow-400 py-[1.2vw] text-[2vw] md:py-2 md:text-sm font-bold text-white shadow-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>{" "}
        {/* Back of the folder */}
        <div className="absolute inset-0 z-1 origin-bottom skew-x-3 w-full rounded-lg bg-orange-200 p-4 mt-1 shadow-lg"></div>
        {/* Document Inside of the folder */}
        <div className="absolute inset-0 z-2 w-full rounded-b-lg bg-white p-4 mt-6 shadow-lg"></div>
        {/* Front of the folder */}
        <div className=" absolute inset-0 z-3 origin-bottom -skew-x-3 w-full rounded-lg bg-orange-200 p-4 shadow-lg">
          {/* We will add the tabs, sticker, and photo here later */}
        </div>
      </div>
    </div>
  );
}
