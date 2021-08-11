export default function Heading({ as, style, children }) {
  let heading;
  switch (as) {
    case "h1":
      heading = (
        <h1 className={`font-black text-3xl mb-4 ${style}`}>{children}</h1>
      );
      break;
    case "h2":
      heading = <h2 className="font-bold text-2xl mb-4">{children}</h2>;
      break;
    case "h3":
      heading = <h3 className="font-bold text-xl mb-1">{children}</h3>;
      break;
    case "h4":
      heading = (
        <h4 className="font-medium text-lg mb-4 text-gray-500">{children}</h4>
      );
      break;
    case "h5":
      heading = <h5 className="font-black text-3xl mb-1">{children}</h5>;
      break;
    case "h6":
      heading = <h6 className="font-black text-3xl mb-1">{children}</h6>;
      break;
    default:
    // Default code block
  }
  return heading;
}
