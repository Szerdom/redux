export const isAdult = (age) => {
    return age > 17;
}

export const canDrink = (age) => {
    return age > 21;
}

const old = (age) => age > 50;

export default old;