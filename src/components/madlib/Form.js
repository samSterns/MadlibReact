import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ text, onChange, onSubmit, onReset }) => (
  <form onSubmit={onSubmit}>
    <input name="0" value={text['0']} onChange={onChange} type="text" placeholder="adjective" />
    <input name="1" value={text['1']} onChange={onChange} type="text" placeholder="noun" />
    <input name="2" value={text['2']} onChange={onChange} type="text" placeholder="verb, past tense" />
    <input name="3" value={text['3']}onChange={onChange} type="text" placeholder="adverb" />
    <input name="4" value={text['4']} onChange={onChange} type="text" placeholder="adjective" />
    <input name="5" value={text['5']} onChange={onChange} type="text" placeholder="noun" />
    <input name="6" value={text['6']} onChange={onChange} type="text" placeholder="noun" />
    <input name="7" value={text['7']} onChange={onChange} type="text" placeholder="adjective" />
    <input name="8" value={text['8']} onChange={onChange} type="text" placeholder="verb" />
    <input name="9" value={text['9']} onChange={onChange} type="text" placeholder="adverb" />
    <input name="10" value={text['10']} onChange={onChange} type="text" placeholder="verb, past tense" />
    <input name="11" value={text['11']} onChange={onChange} type="text" placeholder="adjective" />
    <button>Create Madlib</button>
    <button type="reset" onClick={onReset} value="Reset">Reset</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Form;
