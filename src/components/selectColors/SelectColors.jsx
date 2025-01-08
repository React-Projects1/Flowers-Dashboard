import Select from 'react-select';
import './selectColors.scss';
import { colorOptions } from '../../colorOptions';

const SelectColors = ({ selectedColors, onColorChange }) => {
    const handleColorChange = (selectedOption) => {
        if (selectedColors.length >= 3) {
            alert('You can only select up to 3 colors.');
            return;
        }

        if (!selectedColors.some((color) => color.value === selectedOption.value)) {
            onColorChange([...selectedColors, selectedOption]);
        }
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? state.data.value : state.data.value,
            cursor: 'none',
        }),
        control: (provided) => ({
            ...provided,
            borderColor: selectedColors.length > 0 ? selectedColors[selectedColors.length - 1].value : '#ccc',
            outline: 'none',
            boxShadow: 'none',
            cursor: 'default',
        }),
        menu: (provided) => ({
            ...provided,
            userSelect: 'none',
        }),
    };

    return (
        <div>
            <Select
                id="selectColors"
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Select item colors"
                onChange={handleColorChange}
                options={colorOptions}
                styles={customStyles}
                isDisabled={selectedColors.length >= 3} 
            />
        </div>
    );
};

export default SelectColors;
