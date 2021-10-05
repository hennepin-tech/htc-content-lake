
/**
 * @name   fetchData 
 * @param  {string} {endpoint - Resource to fetch from
 * @param  {function} stateHook - Setter hook to pass json data to}
 * 
 * @returns {Promise} - Invocation of stateHook, while passing the parsed JSON data
 */

export const fetchData = async ({endpoint, stateHook}) => {
  const res = await fetch(endpoint)
  const data = await res.json()
  return stateHook(data)
}