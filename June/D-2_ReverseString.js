var reverseString = function(s) {
    let l = 0, r = s.length - 1;
    while(l<r){
        [s[l], s[r]] = [s[r], s[l]];
        l++, r--;
    }
};

// TC -> O(n);
// SC -> O(1);