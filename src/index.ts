import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const collection = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection('Siddharth');
const sorter = new Sorter(collection);
const sorter_two = new Sorter(chars);
sorter.sort();
sorter_two.sort();
console.log(collection.data);
console.log(chars.data);
