import { useState } from "react";


export const SearchBar = ({onSubmit}) => {

    const [name, setName] = useState('');

    const handleInputForm = (event) => {
        setName(event.target.value);
    };

    const formSubmit = (event) => {
        
        event.preventDefault();

        onSubmit(name);
        
        setName('');
    };

    return (
        <>
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                    name="name"
                    onChange={handleInputForm}
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}