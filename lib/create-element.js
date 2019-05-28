import {injectStyles} from './inject-styles';
import hash from './utils/hash';
import generateAlphabeticName from './utils/generateAlphabeticName';

const h = require('hyperscript');

let counter = 0;

export default Tag => (strings, ...values) => {
  return (props, children) => {
    //STEP: generate a unique component ID
    counter++;
    const componentId = 'sc-' + generateAlphabeticName(hash('sc' + counter));

    //STEP: inject styles into stylesheet
    injectStyles(`.${componentId}`, strings, props, values);

    // STEP: return a JSX element
    return h(Tag, {class: componentId, ref: props && props.ref}, children);
  };
};
