import React from 'react';
import PropTypes from 'prop-types';

const escapeRegExp = (str = '') => (
  str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
);

const Highlight = ({ text = '', highlight = '' }) => {
  if(!highlight.trim()) {
    return <span>{text}</span>;
  }

  const re = new RegExp(`(${escapeRegExp(highlight)})`,'gi');
  const parts = text.split(re);

  return (
    <span>
      {parts.filter(part => part).map((part, index) => (
        re.test(part) ? <mark key={index}>{part}</mark> : <span key={index}>{part}</span>
      ))}
    </span>
  );
};

Highlight.propTypes = {
  text: PropTypes.string,
  highlight: PropTypes.string
};

export default Highlight;

