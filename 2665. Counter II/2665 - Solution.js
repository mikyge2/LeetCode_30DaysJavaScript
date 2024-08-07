/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const i=init
    return{
        increment:function(){
            return ++init
        },
        decrement:function(){
            return --init
        },
        reset:function(){
            init=i
            return init
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
/* Key: Saving initial value in a constant variable that will be utilized for reset */
