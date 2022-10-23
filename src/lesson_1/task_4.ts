// Реализовать стек на основе массива фиксированной длины

export {};

type Optional<T> = T | null

interface LinkedItem {
    value: number;
    prev: Optional<LinkedItem>;
}

function Stack() {
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
                    prev: null
                };

                last = head;

                return;
            }

            if (head === last) {
                head = {
                    value,
                    prev: last
                };

                return;
            }

            const prevHead = head as LinkedItem;

            head = {
                value,
                prev: prevHead,
            }
        },

        pop(): number {
            if (last && head && last === head) {
                const value: number = last.value;

                head = null;
                last = null;

                return value;
            }

            if (head) {
                const value: number = head.value;

                head = head.prev;

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
                item = item.prev;
            }

            console.log('List:', items.join(' -> '));
        },
    };
}

const stack = Stack();

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
