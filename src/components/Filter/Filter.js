import { useSelector, useDispatch } from 'react-redux';
import throttle from 'lodash.throttle';

import { getFilter } from '../../store/filter/selectors';
import { setFilterAction } from 'store/filter/actions';

import Input from 'components/Input/Input.styled';
import { FilterWrapper } from './Filter.styled';

/**
 * Contacts filter component.
 * @returns {React.Component} Filter component.
 */
const Filter = () => {
  const filterText = useSelector(getFilter);
  const dispatch = useDispatch();

  /**
   * Handles input change.
   * Calls provided props callback that handles input change.
   * @param {string} event.target.value Filter value.
   */
  const handleInputChange = ({ target: { value } }) => {
    dispatch(setFilterAction(value));
  };

  return (
    <FilterWrapper>
      Find contacts by name
      <Input
        value={filterText}
        onChange={throttle(handleInputChange, 150, { trailing: false })}
        type="text"
        name="filter"
        title="Search field to filter contact list. Case insensitive."
      />
    </FilterWrapper>
  );
};

export default Filter;
