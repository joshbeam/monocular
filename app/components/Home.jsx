import { Reapp, React, NestedViewList, View, Button, Card, ViewList } from 'reapp-kit';
import Api from '../data';

class Home extends React.Component {
  componentWillMount() {
    this.state = {
      landmarks: null
    };

    new Api().get('landmarks')
    .then((landmarks) => {
      this.setState({ landmarks });
    });
  }

  render() {
    let landmarks;

    if(this.state.landmarks) {
      landmarks = this.state.landmarks.map((landmark) => {
        let title = landmark.name.split('-').join(' ');
        let children = [
          <img src={landmark.photos[0].src} width="100%" height="100%" />,
          <a href={landmark.photos[0].url}>source</a>
        ];

        return <Card key={landmark.name} title={title} children={children} />
      });
    }

    return (
      <ViewList {...this.props.viewListProps} disableScroll="false">
        <View title="Monocular" isInViewList={true} offsetBottom="500">
          <p>Get a live peek into the major landmarks of San Francisco.</p>

          {landmarks}
        </View>

        {this.props.child()}
      </ViewList>
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