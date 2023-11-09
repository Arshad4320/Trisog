// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const Heading2 = ({ children, className }) => {
  return <h2 className={`text-${className}`}>{children}</h2>;
};

export default Heading2;
