import React from "react";

class Login extends React.Component {
  // 受控組件
  // 非受控組件

  state = {
    email: "",
    password: "",
  };

  // 1.命名綁定
  // 2.event
  // 3.this
  // 4.傳遞參數

  handleSubmit = (e) => {
    //   1.阻止默認行為
      e.preventDefault();
    //   2.獲取表單數據
      console.log(this.state);
    //   3.處理登入邏輯
    //   4.跳轉首頁
  };
  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g. alexsmith@gmail.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="e.g. alexsmith@gmail.com"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-fullwidth is-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
