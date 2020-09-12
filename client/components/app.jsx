import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params
      }
    });
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const viewName = this.state.view.name;
    if (viewName === 'catalog') {
      return (
        <div className="bg-light">
          <Header setView={this.setView}/>
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (viewName === 'details') {
      return (
        <div>
          <Header setView={this.setView} />
          <ProductDetails product={this.props.product}
            setView={this.setView} viewParams={this.state.view.params} />
        </div>
      );
    }
  }
}
