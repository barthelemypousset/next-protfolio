// app/components/Card.tsx

interface CardProps {
  title: string;
  thumbnail?: React.ReactNode;
  icon?: React.ReactNode;
  iconTitle?: string;
  iconColor?: string;
  text?: string;
  children?: React.ReactNode;
  elements?: string[];
  containerClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, thumbnail, icon, iconTitle, iconColor, text, children, elements }) => {
  return (
    <div className="bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {thumbnail && <div className={`flex items-center justify-center mb-4`}>{thumbnail}</div>}
      {icon && (
        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-lg ${iconColor || "bg-color-black"} flex items-center justify-center`}>
            {icon}
          </div>
          {iconTitle && <h3 className="text-l font-semibold text-card-foreground ml-3 text-stone-700 ">{iconTitle}</h3>}
        </div>
      )}
      <h3 className="text-xl font-semibold text-card-foreground m-3">{title}</h3>
      {text && <p className="text-gray-600 mb-4">{text}</p>}
      {children}
      <div className="flex flex-wrap gap-2">
        {elements &&
          elements.map((e, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-stone-200 text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
              {e}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
