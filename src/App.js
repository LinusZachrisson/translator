import React, { Component } from "react";
import GetText from "./GetText";

import ShowText from "./ShowText";
import Translator from "./Translator";

class App extends Component {
  state = {
    textToTranslate: "jag vill spela fotboll",
    translatedText: "hello world",
    lang: "en",
  };

  componentDidUpdate = () => {
    Translator((data) => {
      this.setState({ translatedText: data });
    }, this.state.textToTranslate);
  };

  translateText = (translatedText) => {
    console.log(translatedText);
    this.setState({ textToTranslate: translatedText });
  };

  render() {
    return (
      <div>
        <ShowText translatedText={this.state.translatedText} />
        <GetText textToTranslate={this.translateText} />
      </div>
    );
  }
}

export default App;
