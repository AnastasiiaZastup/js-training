const a = {x: 2, y: 3};
const b = { y: 2, z: 4 };

const alls = Object.assign({name: "Mango" }, a, b);

const alls2 = {
    ...a,
    ...b
}
console.log(alls);
console.log(alls2);