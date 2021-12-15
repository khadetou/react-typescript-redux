import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatros } from '../state';

const RepositoryList: React.FC = () => {
    const dispatch = useDispatch();

    const [term, setTerm] = useState('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actionCreatros.searchRepositories(term));
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoryList;
