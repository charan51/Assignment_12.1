function counterReducer(actionType, counter) {
    if (actionType === 'INC') {
        return ++counter;
    } else if (actionType === 'DEC') {
        return counter--;
    }
};
counterReducer('INC', 0);