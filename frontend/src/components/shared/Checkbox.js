import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input type="checkbox" className="form-checkbox h-5 w-5 accent-blue-700 mr-2" {...props} />
      <span>{children}</span>
    </label>
  );
}

export default Checkbox;
