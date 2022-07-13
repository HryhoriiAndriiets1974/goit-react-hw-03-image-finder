import { Component } from "react";
import Searchbar from "./Searchbar";

class App extends Component {
  state = {
    imageQuery: '',
    images: [],
    currentPage: 1,
  }

  handleFormSubmit = imageQuery => {
    this.setState({
      imageQuery: imageQuery,
      images: [],
      page: 1,
    })
  }

render() {
    return (
    <div>
      <Searchbar propsQuery={this.handleFormSubmit} />
    </div>
  );
}

};

export default App;
