import { readAoCInputFiles } from "../common/readAoCInputFiles";

export async function getDay1GoldStar() {
    await execute('test.txt');
    await execute('input.txt');
}

async function execute(fileName: string) {
    const path = require('path');
    const input = await readAoCInputFiles(path.resolve(__dirname, fileName));

    if (0 === input.length) {
        console.log('/!\\ Day 1 Error: Input file is empty.');
    }

    const { locationListOne, locationListTwo } = formatInput(input);
    
    let sum = 0;
    for (const locationId of locationListOne) {
        const count = locationListTwo.filter((location) => locationId === location).length;
        sum += locationId * count;
    }

    console.log(` ${fileName}: ${sum}`);
}

function formatInput(input: string[]): { locationListOne: number[], locationListTwo: number[] } {
    const locationListOne: number[] = [];
    const locationListTwo: number[] = [];

    for (const line of input) {
        const formattedLine = line.replace(/  +/g, ' ');
        const parts = formattedLine.split(' ');
        locationListOne.push(Number(parts[0]));
        locationListTwo.push(Number(parts[1]));
    }

    return {locationListOne, locationListTwo};
}