let translationDirection = 'id_to_en'; // Arah terjemahan default adalah dari Indonesia ke Inggris

const translationDictionaryIdToEn = {
    "suka": "like",
    "makan": "eat",
    "kucing": "cat",
    "anjing": "dog",
    "burung": "bird",
    "ikan": "fish",
    "jerapah": "giraffe",
    "kuda": "horse",
    "singa": "lion",
    "rumah": "house",
    "meja": "table",
    "kursi": "chair",
    "mobil": "car",
    "sepeda": "bike",
    "sekolah": "school",
    "buku": "book",
    "apel": "apple",
    "pisang": "banana",
    "susu": "milk",
    "hai" : "hello",
    "buku" : "book",
    "nama saya fina" : "my name is fina",
    "saya berasal dari jawa tengah" : "I come from Central Java",
    "nuris suka makan es krim" : "nuris like to eat ice cream",
    "epa pergi ke pasar bersama ibu" : "epa went to the market with mother",
    "rina berlibur di pantai" : "rina is on holiday at the beach"
    // ... tambahkan kata-kata lainnya dari Indonesia ke Inggris (total 200 kata)
    // ... tambahkan 100 kata percakapan dari Indonesia ke Inggris
};

const translationDictionaryEnToId = {
    "like": "suka",
    "eat": "makan",
    "cat": "kucing",
    "dog": "anjing",
    "bird": "burung",
    "fish": "ikan",
    "giraffe": "jerapah",
    "horse": "kuda",
    "lion": "singa",
    "house": "rumah",
    "table": "meja",
    "chair": "kursi",
    "car": "mobil",
    "bike": "sepeda",
    "school": "sekolah",
    "book": "buku",
    "apple": "apel",
    "banana": "pisang",
    "milk": "susu",
    "hello" : "hai",
    "book" : "buku",
    "my name is fina" : "nama saya fina",
    "I come from Central Java" : "saya berasal dari jawa tengah",
    "nuris like to eat ice cream" : "nuris suka makan es krim",
    "epa went to the market with mother" : "epa pergi ke pasar bersama ibu",
    "rina is on holiday at the beach" : "rina berlibur di pantai"
    // ... tambahkan kata-kata lainnya dari Inggris ke Indonesia (total 200 kata)
    // ... tambahkan 100 kata percakapan dari Inggris ke Indonesia
};

document.getElementById('translateButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const outputText = translate(inputText);
    document.getElementById('outputText').value = outputText;
});

document.getElementById('toggleDirectionButton').addEventListener('click', function () {
    toggleTranslationDirection();
});

function translate(text) {
    const words = text.split(' ');
    const translatedWords = words.map(word => {
        if (translationDirection === 'id_to_en') {
            return translationDictionaryIdToEn[word.toLowerCase()] || word;
        } else {
            return translationDictionaryEnToId[word.toLowerCase()] || word;
        }
    });
    return translatedWords.join(' ');
}

function toggleTranslationDirection() {
    if (translationDirection === 'id_to_en') {
        translationDirection = 'en_to_id';
    } else {
        translationDirection = 'id_to_en';
    }
    document.getElementById('toggleDirectionButton').textContent = translationDirection === 'id_to_en' ? 'Ubah Indonesia ke Inggris' : 'Ubah Inggris ke Indonesia';
}

