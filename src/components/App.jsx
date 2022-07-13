import { Component } from "react";
import Searchbar from "./Searchbar";
import imagesApi from './Services/imagesApi';
import ImageGallery from "./ImageGallery";
import Loader from './Loader/Loader';
import css from './App.module.css';


class App extends Component {
  state = {
    imageQuery: '',
    images: [],
    currentPage: 1,
    isLoader: false,
    error: null,
  };

  handleFormSubmit = imageQuery => {
    this.setState({
      imageQuery: imageQuery,
      images: [],
      page: 1,
    })
  };

  searchImages = () => {
    const {imageQuery, currentPage} = this.state;
    this.setState({isLoader: true});

    imagesApi
      .fetch(imageQuery, currentPage)
      .then(images =>{
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }))
      })
      .catch(error => this.setState(error))
      .finally(() => this.setState({isLoader: false}))

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageQuery !== this.state.imageQuery) {
      this.searchImages();
    }
  };

render() {
  const {images, isLoader} = this.state;
    return (
    <div className={css.app}>
      <Searchbar propsQuery={this.handleFormSubmit} />
      <ImageGallery
        images={images}
      />
      {isLoader && <Loader/>}
    </div>
  );
}

};

export default App;
