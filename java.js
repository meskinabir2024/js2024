function max(a,b){
    if (a>b)
    return a
else 
return b
}
console.log(max(5,8))
console.log(max(15,7))
console.log(max(3,8))
function somme (a,b){
    return (a+b)
}
console.log(somme(1,3))
function sommeDeuxInputs(){
    let a=Number(prompt("entrer nombre:"));
    let b=Number(prompt("entrer nombre:"));
    alert("la somme est"+(a+b));
}