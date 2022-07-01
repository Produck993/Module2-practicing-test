"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
class Products {
    constructor(id, name, type, price, mount, description) {
        this._id = 0;
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._mount = mount;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get mount() {
        return this._mount;
    }
    set mount(value) {
        this._mount = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Products = Products;
