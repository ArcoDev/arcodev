const BoxSkill = ({img, text, className, altText}) => {
  return (
    <div className={className}>
      <img src={img} alt={altText} />
      <p>{text}</p>
    </div>
  );
};
export default BoxSkill;
