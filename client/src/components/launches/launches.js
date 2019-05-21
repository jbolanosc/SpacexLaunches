import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from './launchItem';
import MissionKey from '../missionKey';
 
const launches_query = gql`

query LaunchesQuery{
    launches{
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}

`;

export class Launches extends Component {
  render() {
    return <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={launches_query}>
            {
                ({ loading, error, data}) => {
                    if(loading) return <h4>Loading...</h4>
                    if (error) console.error(error);

                    return <Fragment>
                        {
                            data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch}/>)
                        }
                    </Fragment>
                }
            }
        </Query>
    </Fragment>
  }
}

export default Launches;