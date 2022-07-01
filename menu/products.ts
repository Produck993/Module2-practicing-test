export class Products {
    _id : number = 0
    _name : string;
    _type : string;
    _price : number;
    _mount : number;
    _description : string
    _date : number
    constructor(name : string, type:string, price : number, mount : number, description : string, date : number) {

        this._name = name
        this._type = type
        this._price = price
        this._mount = mount
        this._description = description
        this._date = date
    }   

    get id() {
        return this._id
    }
    set id(value : number) {
        this._id = value
    }

    get name() {
        return this._name
    }
    set name(value : string) {
        this._name = value
    }

    get type() {
        return this._type
    }
    set type(value : string) {
        this._type = value
    }

    get price() {
        return this._price
    }
    set price(value : number) {
        this._price = value
    }

    get mount() {
        return this._mount
    }
    set mount(value : number) {
        this._mount = value
    }

    get description() {
        return this._description
    }
    set description(value : string) {
        this._description = value
    }

    get date() {
        return this._date
    }
    set date(value : number) {
        this._date = value
    }
}