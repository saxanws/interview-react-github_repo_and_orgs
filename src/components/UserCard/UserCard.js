// Import External libraries
import React from "react";

import "./UserCard.css";

// Component Content
class UserCard extends React.Component {
    displayCard = () => {
        if (this.props.userInfo) {
            const {
                avatar_url,
                name,
                login,
                bio,
                public_repos,
                followers,
                following
            } = this.props.userInfo;

            const {onInfoSelect} = this.props;

            return (
                <div>
                    <div className="row user-card">
                        <div className="col-s-3 col-md-3 col-lg-3 profile-pic-container">
                            <img className="profile-pic rounded" src={avatar_url}/>
                        </div>
                        <div className="col-s-9 col-md-9 col-lg-9 row info-summary-container">
                            <div className="info-summary">
                                <div className="row name">
                                    <h2>{name}</h2>
                                    <span>@{login}</span>
                                </div>
                                <div className="row bio-info">
                                    <p>{bio}</p>
                                </div>
                                <div className="row bottom-link">
                  <span
                      className="col-sm-3 col-md-3 col-lg-3"
                      onClick={() => onInfoSelect("repos")}
                  >
                    Repository
                    <span className="badge">{public_repos}</span>
                  </span>
                                    <span
                                        className="col-sm-3 col-md-3 col-lg-3"
                                        onClick={() => onInfoSelect("orgs")}
                                    >
                    Organization
                    <span className="badge">{this.props.orgs}</span>
                  </span>
                                    <span
                                        className="col-sm-3 col-md-3 col-lg-3"
                                        onClick={() => onInfoSelect("followers")}
                                    >
                    Followers
                    <span className="badge">{followers}</span>
                  </span>
                                    <span
                                        className="col-sm-3 col-md-3 col-lg-3"
                                        onClick={() => onInfoSelect("followings")}
                                    >
                    Followings
                    <span className="badge">{following}</span>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <div>Could not load the user info</div>;
    };

    render() {
        return this.displayCard();
    }
}

// Export the component
export default UserCard;
