import { readAoCInputFiles } from "../common/readAoCInputFiles";

export async function getDay1SilverStar() {
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
    
    let differenceSum = 0;
    for (let i: number = 0; locationListOne.length > i; i++) {
        differenceSum += Math.abs(locationListOne[i] - locationListTwo[i]);
    }

    console.log(` ${fileName}: ${differenceSum}`);
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
    locationListOne.sort((n1, n2) => n1 - n2);
    locationListTwo.sort((n1, n2) => n1 - n2);

    return {locationListOne, locationListTwo};
}