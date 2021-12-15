import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../hooks/useAction';

const RepositoryList: React.FC = () => {

    const { searchRepositories } = useAction();
    const [term, setTerm] = useState('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }
    const { data, error, loading } = useSelector((state: any) => state.repositories);

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
