function acmTeam(topic) {
    // Write your code here

    var maxT = 0;
    var max = 0;
    
    for(var i = 0; i < topic.length-1; i++) {
        for(var j = i + 1; j < topic.length; j++ ) {
            // known is their combined knowledge while totalKnown 
            // is a count of every non-0 character in known
            // had to use BigInt for known to prevent javscript
            // defaulting to scientific notation
            let known = BigInt(topic[i]) + BigInt(topic[j]);
            console.log(known);
            let totalKnown = known.toString().split('').filter((topic) => topic !== 0).length;
            if (totalKnown > max) {
                max = totalKnown;
                maxT = 1;
            } else if (totalKnown === max) {
                maxT++;
            };
        };
    };

    return [max, maxT];

};

const resp = acmTeam(['10101','11110','00010']);
console.log(resp);