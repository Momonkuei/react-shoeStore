import React from "react";
import { withRouter } from "react-router-dom"; 
class ToolBox extends React.Component {
  state = {
    searchText: "",
    
  };

  handleSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };

  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };

  goCart = () => {
    this.props.history.push("/cart");
  }

  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">STORE</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search Product"
                value={this.state.searchText}
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                X
              </button>
            </div>
          </div>
        </div>
        <div to="/Cart" className="card-box" onClick={this.goCart}>
          <i className="fas fa-shopping-cart">
            <span className="cart-num">({this.props.cartNum})</span>
          </i>
        </div>
      </div>
    );
  }
}

export default withRouter(ToolBox);
