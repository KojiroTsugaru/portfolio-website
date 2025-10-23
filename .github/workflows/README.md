# GitHub Actions Deployment Setup

This workflow automatically deploys your portfolio website to Vercel on every push to the `main` branch and creates preview deployments for pull requests.

## Required GitHub Secrets

You need to add the following secrets to your GitHub repository:

### 1. VERCEL_TOKEN
- Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
- Create a new token with appropriate scope
- Copy the token value

### 2. VERCEL_ORG_ID
- Run this command in your project directory:
  ```bash
  cat .vercel/project.json | grep orgId
  ```
- Copy the `orgId` value

### 3. VERCEL_PROJECT_ID
- Run this command in your project directory:
  ```bash
  cat .vercel/project.json | grep projectId
  ```
- Copy the `projectId` value

## Adding Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of the three secrets above with their respective values

## Workflow Behavior

- **Push to `main`**: Deploys to production
- **Pull Request**: Creates a preview deployment
- **Build verification**: Runs `pnpm build` to ensure the project builds successfully

## Manual Deployment

If you need to manually trigger a deployment, you can:
1. Push a commit to the `main` branch
2. Or use Vercel CLI: `vercel --prod`
