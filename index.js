import domElements from './lib/utils/domElements';
import createElement from './lib/create-element';
const styled = {};
for (const a of domElements) styled[a] = createElement(a);
export default styled;
