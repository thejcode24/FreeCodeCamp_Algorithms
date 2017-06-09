function factorialize(num) {
    
    if(num === 0 || num === 1) {
        num = 1;
    } else if(num<0) {
        num = -1;
    }

    for(var i=num-1; i > 0; i--) {
        num *= i;
    }
    return num;
}

factorialize(0);
factorialize(1);
factorialize(-5);
factorialize(5);
