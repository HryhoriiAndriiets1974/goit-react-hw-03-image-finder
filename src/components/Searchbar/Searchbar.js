import { Component } from "react";
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.propsQuery(this.state.query);
    this.setState({query: ''})
  }

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase()
    })
  }

  render() {
    const {query} = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchbar__form} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.searchbar__button}>
              <span className={css.searchbar__label}>Search</span>
            </button>

            <input
              className={css.searchbar__input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleChange}
            />
        </form>
      </header>
    )
  }
}

export default Searchbar;
