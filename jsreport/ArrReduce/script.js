/* const data = [5, 10, 15, 20, 25];

const res = data.reduce((total,currentValue) => {
  return total + currentValue;
});

console.log(res) */


/* const theLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0)
    return null;
    
    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord.length > currentWord.length ? theLongestWord : currentWord;
    }, wordList[0]);
};

const wordList = ['Orange', 'Red', 'Green', 'Yellow'];

console.log(theLongestWord(wordList)); */

const arrayList = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        itemMap[item.id] = item.value;
        return itemMap;
    }, {}); 
}

const itemList = [
    {id: 'foo', value: 'bar'},
    {id: 'one', value: 'two'},
];

console.log(arrayList(itemList));