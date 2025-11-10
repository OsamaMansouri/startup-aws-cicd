# Next.js Startup Template with AWS S3

Next.js application integrated with AWS S3 for file storage and management.

## Prerequisites

- Node.js 18.x or higher
- AWS Account with S3 bucket created
- AWS Access Key ID and Secret Access Key

## Installation

```bash
npm install
```

## AWS S3 Configuration

1. Create a `.env.local` file in the root directory:

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_S3_BUCKET_NAME=your-bucket-name
NEXT_PUBLIC_S3_BUCKET_NAME=your-bucket-name
NEXT_PUBLIC_AWS_REGION=us-east-1
```

2. Configure your S3 bucket:
   - Create a bucket in AWS S3
   - Set appropriate CORS configuration
   - Configure bucket policies for access

## Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Upload File
```
POST /api/upload
Content-Type: multipart/form-data
Body: { file: File }
```

### Get Signed URL
```
GET /api/s3-url?key=your-file-key
```

## S3 Utilities

The application includes S3 utility functions in `src/lib/s3.ts`:
- `uploadToS3()` - Upload files to S3
- `getSignedUrlForFile()` - Generate signed URLs for private files
- `deleteFromS3()` - Delete files from S3
- `getS3PublicUrl()` - Get public URL for files

## Build for Production

```bash
npm run build
npm start
```
