// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const Heading3 = ({ children, className }) => {
  return <h1 className={`text-${className}`}>{children}</h1>;
};

export default Heading3;
