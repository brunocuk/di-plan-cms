module.exports = ({ env }) => {
  console.log('=== UPLOAD PROVIDER DEBUG ===');
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID') ? 'SET' : 'NOT SET');
  console.log('AWS_SECRET_ACCESS_KEY:', env('AWS_SECRET_ACCESS_KEY') ? 'SET' : 'NOT SET');
  console.log('AWS_REGION:', env('AWS_REGION'));
  console.log('AWS_BUCKET:', env('AWS_BUCKET'));
  console.log('AWS_ACL:', env('AWS_ACL'));
  console.log('=== END DEBUG ===');

  return {
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};