import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeItem from './RecipeItem';
import Highlight from './Highlight';
import recipes from '../sample_data/recipes.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;

    this.state = {
      searchString: '',
      items: this.recipes
    };
  }

  handleSearch = (evt) => {
    let items = this.recipes;
    const searchString = evt.target.value;
    
    items = items.filter(item => {
      let elem = [item.title, item.ingredients].join('');

      return elem.toLowerCase().search(searchString.toLowerCase()) !== -1;
    });
    
    this.setState({ items, searchString });
  }

  render() {
    const { searchString, items } = this.state;

    return (
      <div className="App">
        <Navbar value={searchString} onChange={this.handleSearch} />

        <div className="container mt-10">
          <div className="row">
            {
              items.length === 0 ?
                <div className="notfound">Nenhum item encontrado para "{searchString}"</div> :
                this.renderRecipeItem()
            }
          </div>
        </div>
      </div>
    );
  }

  renderRecipeItem() {
    const { items, searchString } = this.state;
    
    return items.map((item, index) => (
      <RecipeItem
        key={`${item.title.replace(/\s/g,'')}__${index}`}
        thumbnail={item.thumbnail}
        title={<Highlight text={item.title} highlight={searchString} />}
        ingredients={<Highlight text={item.ingredients} highlight={searchString} />}
      />
    ));
  }
}

export default App;
