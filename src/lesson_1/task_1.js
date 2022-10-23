var _a, _b, _c, _d, _e, _f, _g;
function LinkedList() {
    let head = null;
    let last = null;
    return {
        get first() {
            return head ? head : null;
        },
        get last() {
            return last ? last : null;
        },
        add(value) {
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
console.log((_a = list.first) === null || _a === void 0 ? void 0 : _a.value); // 1
console.log((_b = list.last) === null || _b === void 0 ? void 0 : _b.value); // 3
console.log((_d = (_c = list.first) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.value); // 2
console.log((_g = (_f = (_e = list.first) === null || _e === void 0 ? void 0 : _e.next) === null || _f === void 0 ? void 0 : _f.prev) === null || _g === void 0 ? void 0 : _g.value); // 1
