import React from 'react';
import Dayz from 'dayz';
// could also import the sass if you have a loader at dayz/dayz.scss
import 'dayz/dist/dayz.css';
import moment from 'moment';

// would come from a network request in a "real" app
const EVENTS = new Dayz.EventsCollection([
    { content: 'A short event',
      range: (new Date(2018, 5, 14), new Date(2018, 5, 15) )}

]);

class Calendar2 extends React.PureComponent {

    render() {
        return <Dayz
                   display='week'
                   date={this.props.date}
                   events={EVENTS}
               />
    }

}

export default Calendar2
