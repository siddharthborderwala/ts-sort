import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const collection = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection('Siddharth');
const linkedList = new LinkedList();

linkedList.add(-3);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(500);

linkedList.sort();
linkedList.print();

chars.sort();
console.log(chars.data);

collection.sort();
console.log(collection.data);
