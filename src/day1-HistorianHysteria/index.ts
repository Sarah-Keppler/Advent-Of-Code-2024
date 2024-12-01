import { getDay1GoldStar } from "./getDay1GoldStar";
import { getDay1SilverStar } from "./getDay1SilverStar";

export async function getDay1Star() {
    console.log('\t> Day 1 <');

    console.log('Silver:');
    await getDay1SilverStar();

    console.log('Gold:');
    await getDay1GoldStar();
}