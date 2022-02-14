'use strict'

class AppleTree {
    constructor(tree_name, tree_age, tree_height, treeMatureAge, treeHealthStatus, treeLimitAge, treeStopAge) {
        this._name = tree_name;
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = treeHealthStatus;
        this._matureAge = treeMatureAge;
        this._limitsAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }
    // Getter
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get height() {
        return this.height;
    }
    
    get fruits() {
        return this._fruits
    }

    get harvested() {
        return this._harvested
    }

    get healthStatus() {
        return this._healthStatus
    }

    get matureAge() {
        return this._matureAge
    }

    get limitAge() {
        return this._limitsAge  
    }

    get stopAge() {
        return this._stopAge
    }

    // Setter

    set age(value) {
        this._age = value;
    }

    // Grow
    groq() {
        this._age++;
        
    }
    // Produce some fruits
    produceFruits() {}

    // Get some fruits
    harvest() {}
}

