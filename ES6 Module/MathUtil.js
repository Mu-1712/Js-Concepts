export let side = window.prompt("Enter Side");
export let length = window.prompt("Enter length");
export let width = window.prompt("Enter width");

export function getareaSquare(){
    return side * side;
}

export function getperimeterSquare(){
    return 4 * side;
}
export function getareaRectangle(){
    return length * width;
}
export function getperimeterRectangle(){
    return (length + width) * 2;
}