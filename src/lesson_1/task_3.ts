// Реализовать двустороннюю очередь

export {};

type Optional<T> = T | null

interface LinkedItem {
    value: number;
    next: Optional<LinkedItem>;
    prev: Optional<LinkedItem>;
}

function Queue() {
    let head: Optional<LinkedItem> = null;
    let last: Optional<LinkedItem> = null;

    return {
        push(value: number) {
            if (!head) {
                head = {
                    value,
                    next: null,
                    prev: null
                };

                last = head;

                return;
            }

            if (head === last) {
                last = {
                    value,
                    prev: head,
                    next: null
                };

                head.next = last;

                return;
            }

            const prevLast = last as LinkedItem;

            last = {
                value,
                prev: prevLast,
                next: null
            };

            prevLast.next = last;
        },

        unshift(value: number) {
            if (!head) {
                head = {
                    value,
                    next: null,
                    prev: null
                };

                last = head;

                return;
            }

            if (head === last) {
                head = {
                    value,
                    prev: null,
                    next: last
                };

                last.prev = head;

                return;
            }

            const prevNext = head as LinkedItem;

            head = {
                value,
                prev: null,
                next: prevNext
            };

            prevNext.prev = head;
        },

        pop(): number {
            if (last && head && last === head) {
                const value: number = last.value;

                head = null;
                last = null;

                return value;
            }

            if (last) {
                const value: number = last.value;

                last = last.prev;

                if (last) {
                    last.next = null;
                }

                return value;
            } else {
                throw new Error('Exception');
            }
        },
        shift(): number {
            if (last && head && last === head) {
                const value: number = last.value;

                head = null;
                last = null;

                return value;
            }

            if (head) {
                const value: number = head.value;

                head = head.next;

                if (head) {
                    head.prev = null;
                }

                return value;
            } else {
                throw new Error('Exception');
            }
        },

        print() {
            let item = head;
            const items: number[] = [];

            while (item) {
                items.push(item.value);
                item = item.next;
            }

            console.log('List:', items.join(' -> '));
        },
    };
}

const dequeue = Queue();

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

dequeue.print(); // List: 11 -> 10 -> 12

console.log(dequeue.pop());   // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop());   // 10
console.log(dequeue.pop());   // Exception
