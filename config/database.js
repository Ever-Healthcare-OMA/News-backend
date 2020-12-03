module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '35.247.141.96'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', '30050'),
        database: env('DATABASE_NAME', 'everNews'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'ZXZlck5ld3M='),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
