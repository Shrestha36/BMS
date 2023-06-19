const nonAlphanumeric= (str) => {
  return str.replace(/[.\/,\'\;\]\[\\=\-+~ ]/g, '%')
}
  export default nonAlphanumeric