module.exports = {
  app: {
    name: 'Pikachu',
    version: '1.0.0'
  },
  server: {
    port: 3000
  },
  template: {
    path: 'app/views',
    options: {
      map: {html: 'ect'}
    }
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'myKoajsSecretKey'
  }
};
