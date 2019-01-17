// Import External libraries
import React from 'react';


// Component content
class SearchBar extends React.Component {

    state = {userName: ''};

    onInputChange = async event => {
        // update the userName when user is typing
        await this.setState({userName: event.target.value});

        // submit the input to parent component
        // this.props.onSubmit(this.state.userName);
    };

    onFormSubmit = event => {
        // Prevent the page to refresh
        event.preventDefault();

        // Submit the input to parent component
        this.props.onSubmit(this.state.userName);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field ui grid">
                        <div className="ui row">
                            <label className="two wide column">
                                <i className="huge github alternate icon"></i>
                            </label>
                            <div className="twelve wide column">
                                <div className="ui icon input">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={this.state.userName}
                                        onChange={this.onInputChange}
                                    />
                                    <i className="circular search link icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// Exporting the component
export default SearchBar;