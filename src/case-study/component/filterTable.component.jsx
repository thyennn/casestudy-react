import React from 'react';
import PropTypes from 'prop-types';
import { entryFields } from './tableHeader.component';

export default function FilterColumnsComponent({
  hiddenColumnsIds,
  onColumnsChange,
}) {
  const onCheckboxClick = (field) => {
    console.log(hiddenColumnsIds);
    const newHiddenColumnsIds = hiddenColumnsIds.includes(field.id)
      ? hiddenColumnsIds.filter((id) => id !== field.id)
      : [...hiddenColumnsIds, field.id];
    onColumnsChange(newHiddenColumnsIds);
  };

  return (
    <div>
      {entryFields.map((field, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <input
            type='checkbox'
            checked={hiddenColumnsIds.some((id) => id === field.id)}
            onChange={() => onCheckboxClick(field)}
          />
          {field.label}
        </div>
      ))}
    </div>
  );
}

FilterColumnsComponent.propTypes = {
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onColumnsChange: PropTypes.func.isRequired,
};
