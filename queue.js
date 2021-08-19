function Queue() {
    this.arr = [];

    Queue.prototype.enqueue = (element) => {
        this.arr.push(element);
    }

    Queue.prototype.dequeue = () => {
        return this.arr.shift();
    }
    Queue.prototype.Length = () => {
        return this.arr.length;
    }

    Queue.prototype.isEmpty = () => {
        return this.Length() > 0 ? false : true;
    }

    Queue.prototype.peek = () => {
        return !this.isEmpty() ? this.arr[0] : undefined;
    }

    Queue.prototype.fetch = () => {
        return this.arr;
    }
}