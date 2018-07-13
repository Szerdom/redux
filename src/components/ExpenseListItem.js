import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
        <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);