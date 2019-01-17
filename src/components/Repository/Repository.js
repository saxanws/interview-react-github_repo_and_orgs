import React from 'react';
import './Repository.css'


const Repository = (props) => {
    const {
        name, description, html_url, updated_at, language, watchers, forks, stargazers_count
    } = props.repository;

    const navigateToRepository = () => {
        window.open(html_url, '_blank');
    }
    return (
        <div className="row repo-wraper" onClick={navigateToRepository}>
            <div className="col-md-9">
                <div className="basic info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="more-info">
                    <span>{language}</span>
                    <span>updated on june 02 2014</span>
                </div>
            </div>
            <div className="col-md-3">
                <div className="pull-right">
                    <div className="row">
                    <span className="badge badge-pill badge-primary">
                      <i className="eye icon"></i>
                      watchers
                    </span>
                        <span className="badge badge-pill badge-primary pull-right">
                        {watchers}
                    </span>
                    </div>
                    <div className="row">
                    <span className="badge badge-pill badge-primary">
                      <i className="eye icon"></i>
                      Stars
                    </span>
                        <span className="badge badge-pill badge-primary pull-right">
                        {stargazers_count}
                    </span>
                    </div>
                    <div className="row">
                    <span className="badge badge-pill badge-primary">
                      <i className="eye icon"></i>
                      Forks
                    </span>
                        <span className="badge badge-pill badge-primary pull-right">
                        {forks}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

// Export the component
export default Repository;