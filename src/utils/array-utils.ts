export function duplicateArrayUntilMinimumLength(arr: any[], minLength: number) {
  while (arr.length < minLength) {
    arr = arr.concat(arr.slice())
  }
  return arr.slice(0, minLength)
}
