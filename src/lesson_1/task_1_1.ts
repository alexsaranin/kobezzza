export {}

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

            const prevLast: LinkedItem = last as LinkedItem;

            last = {
                value,
                prev: prevLast,
                next: null
            };

            prevLast.next = last;
        },

        [Symbol.iterator]() {
            return {
                current: this.first,

                next() {
                    if (!this.current) {
                        return { done: true };
                    }

                    const value = this.current.value;
                    this.current = this.current.next;

                    return { done: false, value };
                }
            };
        }
    };
}


const list2 = LinkedList();

list2.add(100);
list2.add(2);
list2.add(3);
list2.add(5);
list2.add(50);

for (const value of list2) {
    console.log('Value is ', value);
}
