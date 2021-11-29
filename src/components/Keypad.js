function Keypad(){
  return (
    <input
    type="password"
    onChange={()=> console.log("Entering password...")}
    />
  )
}
export default Keypad
//create component that renders an input with the right type

//on that input, add event handler that listens for change event
//when event fire, use console.log("Entering password...")