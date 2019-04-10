import React from 'react';


function withModal(Component) {
  return class WithModal extends React.Component {
    state = {
      open: false,
      data: {},
    };

    render() {
      return (
        <Component modal={{
          open: this.state.open,
          data: this.state.data,
          onOpen: data => this.setState({ open: true, data: data }),
          onClose: () => this.setState({ open: false, data: {} }),
        }}/>
      );
    }
  }
}

export default withModal;
