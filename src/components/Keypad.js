// Code Keypad Component Here
function keypad (){
    return console.log("Entering password...")
}
function Keypad (){
    return (
        <div>
            <input type="password" name="password" onChange={keypad}/>
        </div>
    )
}

export default Keypad;