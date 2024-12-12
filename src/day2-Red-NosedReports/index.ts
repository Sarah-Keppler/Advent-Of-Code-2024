import { getDay2GoldStar } from "./getDay2GoldStar";
import { getDay2SilverStar } from "./getDay2SilverStar";

export async function getDay2Star() {
    console.log('\t> Day 1 <');

    console.log('Silver:');
    await getDay2SilverStar();

    console.log('Gold:');
    await getDay2GoldStar();
}