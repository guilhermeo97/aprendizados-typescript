interface WordCounter {
    countWords: (text: string) => { [key: string]: number };
}

let wordCounter: WordCounter = {
    countWords: function(text: string): { [key: string]: number } {
        let words = text.split(/\s+/);
        let count: { [key: string]: number } = {};
        for (let word of words) {
            word = word.toLowerCase();
            count[word] = (count[word] || 0) + 1;
        }
        return count;
    }
};

console.log(wordCounter.countWords("Hello world! Hello everyone."));  // { hello: 2, world: 1, everyone: 1 }
