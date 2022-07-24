
export  default function Mode({mode, changeMode}) {
  let ChangeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"
  const buttonHandler = () => {
    const newValue = mode.current === "day" ? "night": "day"
    changeMode({current: newValue})
  }
  const style = {
    day: {
      backgroundColor: "blue"
    },
    night: {
      backgroundColor: "white"
    }
  }

	const currentStyle = mode.current === "day" ? style.day : style.night

  return (
    <div className="menu" style={currentStyle}>
      <button onClick={buttonHandler} style={currentStyle} className="button">{ChangeModeText}</button>
    </div>
  )
  
}
