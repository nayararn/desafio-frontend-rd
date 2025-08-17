import React from 'react';

function SubmitButton({ text }) {
  return <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">{text}</button>;
}

export default SubmitButton;
