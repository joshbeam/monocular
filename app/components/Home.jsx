import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class Home extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="Monocular">
          <p>Get a live peek into the major landmarks of San Francisco.</p>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/