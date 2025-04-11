const BoxSkill = ({img, text}) => {
  return (
    <div className="box-skill">
      <img src={img} alt="Icon skills" />
      <p>{text}</p>
    </div>
  );
};
export default BoxSkill;
