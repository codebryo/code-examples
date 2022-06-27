export function getReadableFilesize(filesizeInByte) {
  if (filesizeInByte > 999) {
    return `${filesizeInByte / 1000} kb`;
  }

  return `${filesizeInByte} byte`;
}
