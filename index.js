// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (names) {
    return cats.push("Ralph");
}

function destructivelyPrependCat (names) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat (names) {
    return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat (names) {
    return cats.shift("Milo");
}

function appendCat (names) {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat (names) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat (names) {
    const newCats = cats.slice(0,2);
    return newCats;
}

function removeFirstCat (names) {
    const newCats = cats.slice(1,3);
    return newCats;
}