# Next.js Startup Template

Next.js application ready for static hosting on AWS S3.

## Build & Deploy

The `buildspec.yaml` is configured for AWS CodeBuild/CodePipeline.

1. **Add buildspec.yaml to your CodeBuild project**
2. **Build will create static files in `out` directory**
3. **Deploy `out` directory to S3**

That's it! No additional configuration needed.

## Local Development

```bash
npm install
npm run dev
```

## Build Locally

```bash
npm run build
```

Static files will be in the `out` directory.
