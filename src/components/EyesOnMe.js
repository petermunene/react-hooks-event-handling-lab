// Code EyesOnMe Component Here
function blur(){
    console.log("Hey! Eyes on me!")
}
function focus(){
    console.log("Good!")
}


function EyesOnMe(){
    
    return(
        <button onBlur={()=>blur() } onFocus={()=>focus()}>Eyes on me</button>
    )}

export default EyesOnMe
