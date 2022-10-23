// Реализовать структуру на основе массива

export {};

type Optional<T> = T | null

interface LinkedItem {
    value: number;
    prev: Optional<LinkedItem>;
}

function Structure(props: string[]) {
    const indexes: Record<string, any> = props.reduce((prev, next, currentIndex) => {
        return {
            ...prev,
            [next]: currentIndex,
        }
    }, {});

    const values: any[] = new Array(props.length);

    return {
        get(propName: string): any {
            const index = indexes[propName];

            return values[index];
        },

        set(propName: string, value: any) {
            const index = indexes[propName];

            values[index] = value;
        },
        values() {
            return values;
        }
    };
}

interface Props {
    name: string;
    lastName: string;
    age: number
}

const jackBlack = Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

jackBlack.get('name'); // 'Jack'

console.log(jackBlack.values());
