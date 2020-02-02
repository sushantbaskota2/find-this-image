import React from 'react';

class SearchBar extends React.Component {
    onInputChange({ target }) {
        console.log(target.value);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        Image Search
                        <input type='text' onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
