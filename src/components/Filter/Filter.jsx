import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <label className={css.block}>
        Find contacts by name
        <input
          className={css.block}
          type="text"
          name="filter"
          value={filter}
          onChange={event =>
            dispatch(changeFilter({ filter: event.target.value }))
          }
        ></input>
      </label>
    </div>
  );
};

export default Filter;
