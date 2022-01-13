export const LogoSkill = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1">
      <img src={`icons/${img}.png`} alt={`logo_${img}`} className="w-24" />
      <p>{name}</p>
    </div>
  )
}
