/** Оценка
 * 1.       30 min      40 min (JS)     +5 min (TS)
 * 1.1.     30 min
 * 2.       30 min
 * 3.       30 min
 * 4.       30 min
 * 5.       30 min
*/
type Optional<T> = T | null

interface LinkedItem {
    value: number;
    next: Optional<LinkedItem>;
    prev: Optional<LinkedItem>;
}

function LinkedList() {
    let head: Optional<LinkedItem> = null;
    let last: Optional<LinkedItem> = null;

    return {
        get first(): Optional<LinkedItem> {
            return head ? head : null;
        },

        get last(): Optional<LinkedItem> {
            return last ? last : null;
        },

        add(value: number): void {
            if (!head) {
                head = {
                    value,
                    prev: null,
                    next: null
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

            const prevLast = last;

            last = {
                value,
                prev: prevLast,
                next: null
            };
        }
    };
}


const list = LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list.first?.value);             // 1
console.log(list.last?.value);              // 3
console.log(list.first?.next?.value);       // 2
console.log(list.first?.next?.prev?.value); // 1
