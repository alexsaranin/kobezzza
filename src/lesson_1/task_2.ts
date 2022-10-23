// Реализовать очередь на основе связанного списка

export {};

type Optional<T> = T | null

interface LinkedItem {
    value: number;
    next: Optional<LinkedItem>;
}

function Queue() {
    let head: Optional<LinkedItem> = null;
    let last: Optional<LinkedItem> = null;

    return {
        get head() {
            return head ? head.value : null;
        },

        push(value: number) {
            if (!head) {
                head = {
                    value,
                    next: null
                };

                last = head;

                return;
            }

            if (head === last) {
                last = {
                    value,
                    next: null
                };

                head.next = last;

                return;
            }

            const prevLast = last as LinkedItem;

            last = {
                value,
                next: null,
            }

            prevLast.next = last;
        },

        pop(): number {
            if (head) {
                const value: number = head.value;

                head = head.next;

                return value;
            } else {
                throw new Error('Exception');
            }
        }
    };
}

const queue = Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10
console.log(queue.pop()); // 10
console.log(queue.head);  // 11
console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
