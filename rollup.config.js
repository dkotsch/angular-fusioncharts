export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/dist/index.js',
    sourcemap: false,
    format: 'umd',
    name: 'ng.angular-fusioncharts',
    globals: {
      '@angular/core': 'ng.core'
    }
  }
}
