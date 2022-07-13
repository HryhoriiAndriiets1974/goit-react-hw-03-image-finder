import { Component } from "react";

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
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
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
