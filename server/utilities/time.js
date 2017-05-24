function daysDiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

exports.hoursDiff = function(first, second) {
    return Math.round((second-first)/(1000*60*60));
};