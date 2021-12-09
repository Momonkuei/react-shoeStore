import React from "react";
import {toast} from 'react-toastify'
import axios from "commons/axios";

class EditInventory extends React.Component {
  state = {
    name: "",
    price: "",
    tages: "",
    image: "",
    status: "available",
  };

  componentDidMount() {
    const { id, name, image, tags, price, status } = this.props.product;
    this.setState({
      id, name, image, tags, price, status
    })
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  submit = e => {
    e.preventDefault();
    const product = { ...this.state }
    console.log(product);
    axios.put(`products/${this.state.id}`, product).then(res => {
      this.props.close(res.data);
      // 重新渲染
      toast.success("Edit Success");
    });
  };
  
  onDelete = () => {
    axios.delete(`products/${this.state.id}`).then((res) => {
      this.props.deleteProduct(this.state.id)
      this.props.close();
      // 重新渲染
      toast.success("Edit Success");
    });
  };

  render() {
    return (
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <form onSubmit={this.submit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <textarea
                className="textarea"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="number"
                className="input"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tages</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="tages"
                value={this.state.tages}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                >
                  <option value="">available</option>
                  <option value="">unavailable</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button
                className="button is-danger"
                type="button"
                onClick ={this.onDelete}
              >Delete</button>
            </div>
            <div className="control">
              <button
                className="button"
                type="button"
                onClick={() => {
                  this.props.close();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
}

export default EditInventory;
