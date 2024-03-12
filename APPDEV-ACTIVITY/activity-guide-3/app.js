//counter variable declaration
let count = 0;

//selecting values and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

console.log(btns)//prints out the collection of buttons
btns.forEach((btn) => {
console.log(btn)
 
btn.addEventListener('click',(e)=>{
console.log(e.currentTarget.classList)

const styles = e.currentTarget.classList;
if (styles.contains('decrease')) {
    count--;
} else if (styles.contains('decrease-five')) {
    count -= 5;
} else if (styles.contains('increase')) {
    count++;
} else if (styles.contains('increase-five')) {
    count += 5;
} else if (styles.contains('randomize')) {
    count = Math.floor(Math.random() * 101); // Random number between 0 and 100
} else {
    count = 0;
}

    //color changing function
    if(count > 0){
        value.style.color = "green"
    }else if (count < 0){
        value.style.color = "red"
    }else if (count == 0){
        value.style.color="black"
    }
    value.textContent = count
})
})