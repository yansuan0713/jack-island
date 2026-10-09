export const STORAGE_KEY = 'jacks-island:v1';
export const IDS = ['museum', 'studio', 'post', 'lab', 'cabin'];
export function sanitizeState(value) {
  const data = value && typeof value === 'object' ? value : {};
  return { visited: Array.isArray(data.visited) ? [...new Set(data.visited.filter(id => IDS.includes(id)))] : [], night: data.night === true };
}
export function readState(storage) {
  try { return sanitizeState(JSON.parse(storage.getItem(STORAGE_KEY) || '{}')); }
  catch { return sanitizeState(null); }
}
export function saveState(storage, state) {
  try { storage.setItem(STORAGE_KEY, JSON.stringify(sanitizeState(state))); return true; }
  catch { return false; }
}
export function visit(visited, id) { return IDS.includes(id) ? [...new Set([...visited, id])] : visited; }
