import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4>
          <Moment format="YYYY-MM-DD HH:mm">
            <p>Date: {launch_date_local}</p>
          </Moment>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn_secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
