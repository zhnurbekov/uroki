import React from 'react';


function withModal(Component) {
  return class WithModal extends React.Component {
    state = {
      open: false,
      data: this.props.modal
    };



    render() {
      return (
        <Component modal={{
          open: this.state.open,
          data: this.state.data,
          onOpen: () => this.setState({ open: true }),
          onClose: () => this.setState({ open: false }),
        }}/>
      );
    }
  }
}

export default withModal;
