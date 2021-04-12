const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.arrList = [];
  }

  get size() {
    return this.arrList.length;
  }

  enqueue(element) {
    if (this.size === 0) {
      this.arrList.push(new ListNode(element));
    } else {
      const node = new ListNode(element);
      this.arrList[this.size - 1].next = node;
      this.arrList.push(node);
    }
  }

  dequeue() {
    return this.arrList.shift().value;
  }
}
module.exports = Queue;
