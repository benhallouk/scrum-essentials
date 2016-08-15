export class Item {

    constructor(public id:number, public subject:string, public body:string, public done:boolean) {
    }

    toggleDone() {
        this.done = !this.done;
    }
}