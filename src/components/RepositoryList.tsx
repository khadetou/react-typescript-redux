import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';

const RepositoryList: React.FC = () => {

    const { searchRepositories } = useAction();
    const [term, setTerm] = useState('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }
    const { data, error, loading } = useTypedSelector((state) => state.repositories);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((name) => (<div key={name}>{name}</div>))}
        </div>
    )
}

export default RepositoryList;
