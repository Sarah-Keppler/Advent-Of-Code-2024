import { readAoCInputFiles } from "../common/readAoCInputFiles";

export async function getDay2SilverStar() {
    await execute('test.txt');
    await execute('input.txt');
}

async function execute(fileName: string) {
    const path = require('path');
    const input = await readAoCInputFiles(path.resolve(__dirname, fileName));

    if (0 === input.length) console.log('/!\\ Day 2 Error: Input file is empty.');

    const reports = formatInput(input);

    let safeReportCounter = 0;
    for (const report of reports) {
        let variationTooBig = false;
        let isSameVariation = undefined;
        for (let i = 0; report.length > i; ++i) {
            const currentVariation: number = report[i] - report[i + 1];
            const difference = Math.abs(report[i] - report[i + 1]);

            // Neither increasing / decreasing
            if (0 === currentVariation) {
                isSameVariation = undefined;
                break;
            }

            if (undefined === isSameVariation) {
                isSameVariation = currentVariation > 0;
            } else if (!Number.isNaN(currentVariation) && isSameVariation != currentVariation > 0) {
                isSameVariation = undefined;
                break;
            }

            if (!Number.isNaN(difference) && !(1 <= difference && 3 >= difference)) {
                variationTooBig = true;
                break;
            }
        }

        if (undefined !== isSameVariation && !variationTooBig)
            safeReportCounter++;
    }

    console.log(` ${fileName}: ${safeReportCounter}`);
}

function formatInput(input: string[]): number[][] {
    const reports: number[][] = [];

    for (const line of input) {
        const parts = line.split(' ');
        let report: number[] = [];
        for (const part of parts)
            report.push(Number(part));
        reports.push(report);
    }

    return reports;
}