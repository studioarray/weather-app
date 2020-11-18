# Deploy with netlify:

Make sure netlify CLI is installed.

```
npm install netlify-cli -g
```

Build app and deploy to draft URL

```
npm run build

netlify deploy --dir=build
```

Follow on-screen instructions.

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.

```
netlify deploy --dir=build --prod
```
