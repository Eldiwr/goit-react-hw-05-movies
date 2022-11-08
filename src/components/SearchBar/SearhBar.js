import { useState } from "react";
import { SearchForm, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from "./SearchBar.styled";
import { BsSearch} from 'react-icons/bs'


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
            <SearchForm onSubmit={formSubmit}>
                <SearchFormButton type="submit">
                    <BsSearch />
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                    name="name"
                    onChange={handleInputForm}
                />           
            </SearchForm>
        </>
    )
}