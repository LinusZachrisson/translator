function Translator(cb, textToTranslate) {
  fetch(
    "https://api.mymemory.translated.net/get?q=" +
      textToTranslate +
      "!&langpair=sv|it"
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.responseData.translatedText);

      cb(data.responseData.translatedText);
    });
}

export default Translator;
