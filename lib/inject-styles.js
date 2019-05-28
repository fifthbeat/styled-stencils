import stylis_ from './vendor/stylis/stylis.min.js';

const stylis = new stylis_({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false,
});

// create a <style> tag which will hold all our component styles
const sheet = document.createElement('style');
document.head.appendChild(sheet);

/**
 * Parses an array of strings from a template string into an object.
 */
export const injectStyles = (componentId, strings, props = {}, funcs) => {
  // convert hyphenated props to camelCase props
  for (const propKey of Object.keys(props || {})) {
    const camelCaseKey = propKey.replace(/-([a-z])/g, g => g[1].toUpperCase());
    props[camelCaseKey] = props[propKey];
  }

  if (!props) {
    props = {};
  }

  // runs all functions inside the css template, reducing down to pure css
  const css = strings.reduce((acc, cur, i) => {
    return acc + cur + (funcs[i] && typeof funcs[i] === 'function' ? funcs[i](props) : funcs[i] || '');
  }, '');

  // parse the rule with stylis and add to our <style> tag
  const rule = stylis(componentId, css);

  sheet.innerHTML += rule;
};
