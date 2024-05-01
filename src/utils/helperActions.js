/* -------------------- cache checker ------------------- */
//const nodeCache = new Map();
export async function fetchCachedData(url, nodeCache) {
  // Check if the cache already has the data for this URL
  if (nodeCache.has(url)) {
    return nodeCache.get(url);
  }
  // Fetch data from the URL if it's not in the cache
  const response = await fetch(url);
  // Properly handle network errors and HTTP status errors
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const resData = await response.json();
  // Consider checking for data consistency before caching
  if (!resData || !resData.items) {
    throw new Error('Invalid data received from API');
  }
  // Cache the retrieved data
  nodeCache.set(url, resData.items); // Ensure that you are caching the correct part of the response
  //console.log(resData.items)
  return resData.items;
}
