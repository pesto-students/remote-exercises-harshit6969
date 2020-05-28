String.prototype.getDeletions = function(){
    let Deletions = 0;
    for(let i = 0; i < this.length - 1; i++){
        if(this[i] == this[i+1]) ++Deletions;
    }
    return Deletions;
}

function alternatingCharacters(arr) {
    return arr.map(string => string.getDeletions());
}

export { alternatingCharacters };
