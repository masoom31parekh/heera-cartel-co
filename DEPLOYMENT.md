# Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Prepare for Deployment

```bash
npm run build
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option B: GitHub Integration
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import `heera-cartel-co` repository
4. Set environment variables:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://api.heeracartel.co`)
5. Deploy

### Step 3: Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records at your registrar

---

## Backend Deployment (Railway or Render)

### Option A: Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select `heera-cartel-backend` repository
4. Add environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   DATABASE_NAME=heera_cartel
   CORS_ORIGINS=https://heeracartel.co,https://www.heeracartel.co
   ENVIRONMENT=production
   DEBUG=False
   ```
5. Deploy
6. Note the URL (e.g., `https://api.railway.app`)
7. Update frontend `VITE_API_URL` to this URL

### Option B: Render

1. Go to [render.com](https://render.com)
2. Click "New+" → "Web Service"
3. Connect GitHub repository
4. Select `heera-cartel-backend`
5. Configure:
   - **Name**: `heera-cartel-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0`
   - **Plan**: Free or Paid
6. Add environment variables (same as Railway)
7. Deploy

---

## MongoDB Setup

### Create MongoDB Atlas Database

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster
4. Create database user with password
5. Whitelist IP addresses (or allow 0.0.0.0 for testing)
6. Copy connection string
7. Replace in `.env`:
   ```
   mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority
   ```

---

## Post-Deployment Checklist

- [ ] Frontend loads without errors
- [ ] API health check passes (`/health`)
- [ ] Diamond filter works
- [ ] Contact form submits
- [ ] Certificate verification works
- [ ] CORS configured correctly
- [ ] Environment variables set
- [ ] Database connected
- [ ] Custom domain working
- [ ] SSL certificate active
- [ ] Email notifications configured (optional)

---

## Environment Variables Summary

### Frontend (.env)
```
VITE_API_URL=https://api.heeracartel.co
```

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/?retryWrites=true&w=majority
DATABASE_NAME=heera_cartel
CORS_ORIGINS=https://heeracartel.co,https://www.heeracartel.co,https://vercel-domain.vercel.app
JWT_SECRET=your-secret-key
ENVIRONMENT=production
DEBUG=False
```

---

## Monitoring

### Vercel
- Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- Logs: Real-time deployment logs
- Analytics: Performance metrics

### Railway/Render
- Logs: View in deployment dashboard
- Metrics: CPU, Memory usage
- Alerts: Set up email notifications

---

## Troubleshooting

### CORS Errors
- Check `CORS_ORIGINS` in backend `.env`
- Should include frontend domain

### API Connection Failed
- Verify `VITE_API_URL` in frontend
- Check backend is running (`/health`)
- Verify network connectivity

### Database Connection Failed
- Check `MONGODB_URI` is correct
- Verify IP whitelist in MongoDB Atlas
- Check credentials

---

## Next Steps

1. Deploy backend first
2. Test API endpoints
3. Deploy frontend
4. Connect and test end-to-end
5. Set up monitoring
6. Configure email notifications
7. Set up SSL certificates
