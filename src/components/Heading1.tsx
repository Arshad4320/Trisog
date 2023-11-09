// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const Heading1 = ({ children, className }) => {
  return <h1 className={`text-${className}`}>{children}</h1>;
};

export default Heading1;
