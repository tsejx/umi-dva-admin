import React from 'react';

interface BasicListProps {

}

class BasicList extends React.Component<BasicListProps> {
  constructor(props: BasicListProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>BasicList</div>;
  }
}

export default BasicList;
