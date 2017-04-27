import React from 'react';
import * as API from '..api';

export default  class Page extends React.Component {
  state = { page: {} }
  componentDidMount() {
    API.pages.child(this.props.params.id).on('value', this.updateContent);
  }
  updateContent = (snapshot) => {
    let json = snapshot.exportVal();
    this.setState({
      page: json,
      sections: json.sections
    });
  }
}
