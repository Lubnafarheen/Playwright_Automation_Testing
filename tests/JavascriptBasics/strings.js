function checkIfWordsAreAnagram(str1, str2)
{
    let firstWord = str1.toLowerCase();
    let secondWord = str2.toLowerCase();

    if(firstWord.length === secondWord.length){
        if(firstWord.split('').sort().join('')=== secondWord.split('').sort().join('')){
            console.log("Both words are Anagram set")
        }
    }else{
        console.log("Both words are not Anagram set")
    }
}

checkIfWordsAreAnagram('evil', 'live');

