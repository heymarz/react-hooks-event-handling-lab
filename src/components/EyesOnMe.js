// Code EyesOnMe Component Here
//render buttun w text "Eyes on me"
//on btn. add event handlers that listen for focus and blur events

//focus event fires, console.log("Good!")
//blur event fires, console.log("Hey! Eyes on me!")
function EyesOnMe(){
  function handleFocus(){
    console.log("Good!")
  };

  function handleBlur(){
    console.log("Hey! Eyes on me!")
  }

  return(
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe