import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(category => [inputValue, ...category]);
            console.log('Submit!');
        }
        setInputValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    placeholder='Buscar'
                    onChange={e => setInputValue(e.target.value)}
                />
            </form>
        </div>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
