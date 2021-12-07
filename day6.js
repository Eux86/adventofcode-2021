const initialState = [1,2,1,1,1,1,1,1,2,1,3,1,1,1,1,3,1,1,1,5,1,1,1,4,5,1,1,1,3,4,1,1,1,1,1,1,1,5,1,4,1,1,1,1,1,1,1,5,1,3,1,3,1,1,1,5,1,1,1,1,1,5,4,1,2,4,4,1,1,1,1,1,5,1,1,1,1,1,5,4,3,1,1,1,1,1,1,1,5,1,3,1,4,1,1,3,1,1,1,1,1,1,2,1,4,1,3,1,1,1,1,1,5,1,1,1,2,1,1,1,1,2,1,1,1,1,4,1,3,1,1,1,1,1,1,1,1,5,1,1,4,1,1,1,1,1,3,1,3,3,1,1,1,2,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,2,1,1,1,4,1,1,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,2,3,1,2,1,1,5,4,1,1,2,1,1,1,3,1,4,1,1,1,1,3,1,2,5,1,1,1,5,1,1,1,1,1,4,1,1,4,1,1,1,2,2,2,2,4,3,1,1,3,1,1,1,1,1,1,2,2,1,1,4,2,1,4,1,1,1,1,1,5,1,1,4,2,1,1,2,5,4,2,1,1,1,1,4,2,3,5,2,1,5,1,3,1,1,5,1,1,4,5,1,1,1,1,4];
const initialState2 = [3,4,3,1,2];

const getPopsByStage = (population) => {
    const stages = new Array(9).fill(0);
    population.forEach(pop=>stages[pop]++);
    return stages;
}

const nextDay = (popsByStages) => {
    const pregnant = popsByStages.shift();
    popsByStages[6] += pregnant;
    popsByStages[8] = pregnant;
    return popsByStages;
}

const visualize = (popsByStages) => {
    console.table(popsByStages);
}

const getTotal = (popsByStages) => popsByStages.reduce((a,b) => a+b,0);

const totalDays = 256;
const popsByStages = getPopsByStage( initialState);
for (let i = 0; i<totalDays; i++) {
    nextDay(popsByStages);
    visualize(popsByStages);
    console.log(`Day: ${i}`);
}
console.log(getTotal(popsByStages));
