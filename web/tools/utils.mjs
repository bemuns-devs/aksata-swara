/**
 *
 * @param {string} str
 * @param {Record<string,any>} vars
 * @returns string
 */
export const replaceMustacheVars = (str, vars) => {
  const mustacheRegex = /\{\{\s{0,}(\w+)\s{0,}\}\}/gi;
  return str.replace(mustacheRegex, (match, key) => vars[key] || match);
}
