//Arrays

  const colors = ["Red", "orange", "green", "black", "white"];

  const addNewColor = ["grey"];
let result = colors.concat(addNewColor);

console.log(result);

for (let i=0; i<result.length; i++){
    if(result[i]=== "white"){
        console.log("Test case is Passed")
        break;
    }else{
        console.log("Test case is failed")
    }
}

result.forEach(function(value, index){
    console.log(value + "-->" + index);
})

const fruits = ["Red", "orange", "green", "black", "white"];