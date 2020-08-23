/**
 * @class Represents a collection os numbers
 */
export class NumbersCollection {
  /**
   * Constructor for NumbersCollection class
   * @param {Array<number>} data - Array of numbers
   */
  constructor(public data: number[]) {}

  /**
   * Getter for the number of elements present in the collection
   * @returns {number} Length of the collection
   */
  get length(): number {
    return this.data.length;
  }

  /**
   * Function compares two numbers in the array and returns true if they need to be swapped
   * @param {number} leftIndex - Index of left element
   * @param {number} rightIndex - Index of right element
   * @returns {boolean} - If the numbers need to be swapped
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /**
   * Function swaps to numbers in array
   * @param {number} leftIndex - Index of left element
   * @param {number} rightIndex - Index of right element
   * @returns {void} - Returns void
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
