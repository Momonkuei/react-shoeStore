// 1.一次渲染，隨需調用
// 2.裝載組件
//     2-1子組件作為參數傳遞被渲染
//     2-2子元件可以關閉彈出層
//     2-3子元件與調用者可以通訊

import React from "react";
import { render } from "react-dom";

class Panel extends React.Component {
  state = {
    active: false,
    component: null,
    callback: () => {},
  };

  open = (
    options = {
      props: {},
      component: null,
      callback: () =>{}
    }
  ) => {
    const { props, component, callback } = options;
    const _key = new Date().getTime();
    const _component = React.createElement(component, {
      ...props,
      close: this.close,
      key: _key,
    });
    this.setState({
      active: true,
      component: _component,
      callback: callback,
    });
  };

  close = (data) => {
    // alert(data); //測試
    this.setState({
      active: false,
    });
    this.state.callback(data);
  };

  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper ",
    };

    return (
      <div className={_class[this.state.active]}>
        <div
          className="over-layer"
          onClick={() => {
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              X
            </span>
          </div>
          {this.state.component}
        </div>
      </div>
    );
  }
}

const _div = document.createElement("div");

document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
console.log("_panel", _panel);

export default _panel;
