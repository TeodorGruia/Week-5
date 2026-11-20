// Sam Goldberg
// 11/14/26
// Week 5 Animal Hunting Game 

//This utility updates the current position for left using browser built-in storage called "local storage".
//It creates a new variable to save the updated left position, to remember the last position the animal was at
export const saveValue=(value)=>{
    let curr=0;
    const stored = localStorage.getItem("saveValue");

    if (localStorage.getItem("saveValue")!=null && !isNaN(parseInt(stored, 10))) {
        curr=parseInt(stored, 10);
    }
    let nextPos = curr + value;
    let didReset = false;

    //Checks the animal's position. If all the way to the right, restart the animal's
    //position
    if (nextPos >= 90) {
        nextPos = 0; 
        didReset = true;
    } 
    //Save the position of the animal to the browser and for use by app.jsx
    localStorage.setItem("saveValue", nextPos.toString());
    return {nextPos, didReset};

}

export const getValue = () => {
  const stored = localStorage.getItem("saveValue");
  return stored !== null && !isNaN(parseInt(stored, 10)) ? stored : "0";
};