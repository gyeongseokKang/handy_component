import "./BounceText.css";

interface BounceTextProps {
  children: string;
}

const BounceText = ({ children }: BounceTextProps) => {
  return (
    <>
      <p className="text">{children}</p>
    </>
  );
};

export default BounceText;
