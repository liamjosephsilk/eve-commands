import { uppercase } from "../utils/uppercase.js";

export function script(name) {
  const className = uppercase(name);
  const script = `
class ${className} extends HTMLElement {
	constructor() {
		super()
	}
}

customElements.define('${name}', ${className})
`;
  script.replace(/ /g, "");
  return script.trim();
}
