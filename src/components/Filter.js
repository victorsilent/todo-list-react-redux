import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

const Filter = ({ onClick }) => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <a href="#" onClick={() => {onClick('SHOW_ALL')}}>Show All</a>
                    <a href="#" onClick={() => {onClick('SHOW_DONE')}}>Show Done</a>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: filter => {
            dispatch(changeFilter(filter))
        }
    }
}
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;