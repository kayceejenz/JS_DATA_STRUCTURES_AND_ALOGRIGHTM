function Stack() {
    this.arr = [];


    Stack.prototype.add = (elem) => {
        this.arr.push(elem);
    };

    Stack.prototype.remove = () => {
        return this.arr.pop();
    }

    Stack.prototype.isEmpty = () => {
        return this.Length() > 0 ? false : true;
    }

    Stack.prototype.peek = () => {
        return !this.isEmpty() ? this.arr[0] : undefined;
    }

    Stack.prototype.Length = () => {
        return this.arr.length;
    }
}

const stack = new Stack();
for (let i = 0; i < 6; i++) {
    stack.add(i);
}

console.log(stack)