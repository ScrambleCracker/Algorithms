Function.prototype.myapply = function (thisObj, ...args) {
    const symbol = new Symbol();
    const context = thisObj ?? window;
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}
