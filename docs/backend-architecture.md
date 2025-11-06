# Backend & Database Architecture

## 📋 Overview

This document outlines the complete backend architecture, database models, API endpoints, and implementation strategy for the Event Planner website.

---

## 🛠️ Recommended Tech Stack

### Backend
- **Next.js API Routes** - Serverless functions built into Next.js
- **Prisma ORM** - Type-safe database client
- **NextAuth.js** - Authentication for admin panel

### Database
- **PostgreSQL** - Primary database (via Supabase or Vercel Postgres)
- **Prisma** - Database ORM and migration tool

### File Storage
- **Cloudinary** - Image hosting and optimization (Recommended)
- **Vercel Blob** - Alternative for Vercel deployments
- **AWS S3** - Alternative for full control

### Additional Services
- **Resend** or **SendGrid** - Email notifications
- **Google Maps API** - Location maps on contact page

---

## 🗄️ Database Schema

### 1. Users/Admins
Manages admin users who can create and edit content.

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String   // Hashed with bcrypt
  name      String
  role      Role     @default(ADMIN)
  avatar    String?
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  blogPosts BlogPost[]
  
  @@map("users")
}

enum Role {
  ADMIN
  EDITOR
}
```

**Purpose:** Authentication and authorization for content management.

---

### 2. Services
Event planning service offerings.

```prisma
model Service {
  id          String      @id @default(uuid())
  title       String
  slug        String      @unique
  description String      @db.Text
  icon        String?     // Icon identifier or URL
  category    ServiceCategory
  features    Json        // Array of feature strings
  pricing     Json?       // Pricing tier information
  image       String?
  isActive    Boolean     @default(true)
  isFeatured  Boolean     @default(false)
  order       Int         @default(0)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  
  @@map("services")
}

enum ServiceCategory {
  CORPORATE
  WEDDING
  PRIVATE
  VIRTUAL
}
```

**Purpose:** Display service categories on Services page and home page.

**Features JSON Example:**
```json
[
  "Venue selection and booking",
  "Vendor coordination",
  "Day-of coordination",
  "Post-event wrap-up"
]
```

**Pricing JSON Example:**
```json
{
  "basic": { "price": 2500, "features": ["..."] },
  "pro": { "price": 5000, "features": ["..."] },
  "premium": { "price": 10000, "features": ["..."] }
}
```

---

### 3. Portfolio Items
Event case studies and past work.

```prisma
model Portfolio {
  id            String      @id @default(uuid())
  title         String
  slug          String      @unique
  category      ServiceCategory
  eventDate     DateTime?
  location      String?
  clientName    String?
  heroImage     String
  challenge     String      @db.Text
  solution      String      @db.Text
  results       String      @db.Text
  tags          Json        // Array of tags
  isFeatured    Boolean     @default(false)
  isPublished   Boolean     @default(true)
  viewCount     Int         @default(0)
  seoTitle      String?
  seoDescription String?    @db.Text
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
  
  // Relations
  images        PortfolioImage[]
  
  @@map("portfolio")
}

model PortfolioImage {
  id          String    @id @default(uuid())
  portfolioId String
  imageUrl    String
  caption     String?
  order       Int       @default(0)
  createdAt   DateTime  @default(now())
  
  // Relations
  portfolio   Portfolio @relation(fields: [portfolioId], references: [id], onDelete: Cascade)
  
  @@map("portfolio_images")
}
```

**Purpose:** Showcase past events on Portfolio page.

**Tags JSON Example:**
```json
["luxury", "outdoor", "500+ guests", "corporate gala"]
```

---

### 4. Blog Posts
Articles and content marketing.

```prisma
model BlogPost {
  id             String      @id @default(uuid())
  title          String
  slug           String      @unique
  excerpt        String      @db.Text
  content        String      @db.Text // Markdown or HTML
  featuredImage  String
  authorId       String
  category       BlogCategory
  tags           Json        // Array of tags
  isPublished    Boolean     @default(false)
  isFeatured     Boolean     @default(false)
  viewCount      Int         @default(0)
  readTime       Int?        // Minutes
  seoTitle       String?
  seoDescription String?     @db.Text
  publishedAt    DateTime?
  createdAt      DateTime    @default(now())
  updatedAt      DateTime    @updatedAt
  
  // Relations
  author         User        @relation(fields: [authorId], references: [id])
  comments       Comment[]
  
  @@map("blog_posts")
}

enum BlogCategory {
  TIPS
  TRENDS
  CASE_STUDIES
  INSPIRATION
  HOW_TO
}
```

**Purpose:** Content marketing and SEO.

---

### 5. Comments (Optional)
Blog post comments.

```prisma
model Comment {
  id          String    @id @default(uuid())
  blogPostId  String
  authorName  String
  authorEmail String
  content     String    @db.Text
  isApproved  Boolean   @default(false)
  createdAt   DateTime  @default(now())
  
  // Relations
  blogPost    BlogPost  @relation(fields: [blogPostId], references: [id], onDelete: Cascade)
  
  @@map("comments")
}
```

**Purpose:** User engagement on blog posts.

---

### 6. Testimonials
Client reviews and feedback.

```prisma
model Testimonial {
  id             String    @id @default(uuid())
  clientName     String
  clientRole     String    // e.g., "CEO, Tech Corp"
  clientPhoto    String?
  testimonialText String   @db.Text
  rating         Int       @default(5) // 1-5
  eventType      String?
  isActive       Boolean   @default(true)
  isFeatured     Boolean   @default(false)
  order          Int       @default(0)
  createdAt      DateTime  @default(now())
  
  @@map("testimonials")
}
```

**Purpose:** Social proof on home page and throughout site.

---

### 7. Contact Submissions
Contact form inquiries.

```prisma
model ContactSubmission {
  id          String    @id @default(uuid())
  name        String
  email       String
  phone       String?
  eventType   String?
  eventDate   DateTime?
  guestCount  Int?
  budget      String?
  message     String    @db.Text
  status      ContactStatus @default(NEW)
  source      String?   // Which page they submitted from
  ipAddress   String?
  notes       String?   @db.Text // Admin notes
  createdAt   DateTime  @default(now())
  respondedAt DateTime?
  
  @@map("contact_submissions")
}

enum ContactStatus {
  NEW
  CONTACTED
  QUALIFIED
  CONVERTED
  ARCHIVED
}
```

**Purpose:** Lead capture and management.

---

### 8. Newsletter Subscribers
Email marketing list.

```prisma
model Subscriber {
  id             String    @id @default(uuid())
  email          String    @unique
  name           String?
  isActive       Boolean   @default(true)
  source         String?   // Where they subscribed from
  subscribedAt   DateTime  @default(now())
  unsubscribedAt DateTime?
  
  @@map("subscribers")
}
```

**Purpose:** Build email list for newsletters.

---

### 9. Site Settings
Global configuration.

```prisma
model SiteSettings {
  id                String   @id @default(uuid())
  siteName          String   @default("Event Planner")
  tagline           String?
  logoUrl           String?
  email             String
  phone             String?
  address           String?  @db.Text
  socialMedia       Json     // Social media links
  officeHours       Json     // Business hours
  seoTitle          String?
  seoDescription    String?  @db.Text
  googleAnalyticsId String?
  facebookPixelId   String?
  updatedAt         DateTime @updatedAt
  
  @@map("site_settings")
}
```

**Purpose:** Centralized site configuration.

**Social Media JSON Example:**
```json
{
  "instagram": "https://instagram.com/eventplanner",
  "facebook": "https://facebook.com/eventplanner",
  "linkedin": "https://linkedin.com/company/eventplanner",
  "twitter": "https://twitter.com/eventplanner"
}
```

**Office Hours JSON Example:**
```json
{
  "monday": "9:00 AM - 6:00 PM",
  "tuesday": "9:00 AM - 6:00 PM",
  "wednesday": "9:00 AM - 6:00 PM",
  "thursday": "9:00 AM - 6:00 PM",
  "friday": "9:00 AM - 6:00 PM",
  "saturday": "10:00 AM - 4:00 PM",
  "sunday": "Closed"
}
```

---

## 🔌 API Endpoints

### Public Endpoints (No Authentication)

#### Services
```
GET  /api/services
     Query: ?category=CORPORATE&featured=true
     Response: Array of services

GET  /api/services/[slug]
     Response: Single service details
```

#### Portfolio
```
GET  /api/portfolio
     Query: ?category=WEDDING&page=1&limit=9
     Response: Paginated portfolio items

GET  /api/portfolio/[slug]
     Response: Single portfolio item with images
```

#### Blog
```
GET  /api/blog
     Query: ?category=TIPS&page=1&limit=10&featured=true
     Response: Paginated blog posts

GET  /api/blog/[slug]
     Response: Single blog post with author info
     
POST /api/blog/[slug]/comment
     Body: { authorName, authorEmail, content }
     Response: Comment created (pending approval)
```

#### Testimonials
```
GET  /api/testimonials
     Query: ?featured=true&limit=5
     Response: Array of testimonials
```

#### Contact
```
POST /api/contact
     Body: { name, email, phone?, eventType?, message }
     Response: { success: true, message: "..." }
```

#### Newsletter
```
POST /api/newsletter/subscribe
     Body: { email, name? }
     Response: { success: true }
     
POST /api/newsletter/unsubscribe
     Body: { email }
     Response: { success: true }
```

#### Settings
```
GET  /api/settings
     Response: Public site settings (contact info, social media)
```

---

### Admin Endpoints (Authentication Required)

#### Authentication
```
POST /api/admin/auth/login
     Body: { email, password }
     Response: { token, user }
     
POST /api/admin/auth/logout
     Response: { success: true }
     
GET  /api/admin/auth/me
     Response: Current user info
```

#### Services Management
```
GET    /api/admin/services
       Response: All services (including inactive)
       
POST   /api/admin/services
       Body: Service data
       Response: Created service
       
PUT    /api/admin/services/[id]
       Body: Updated service data
       Response: Updated service
       
DELETE /api/admin/services/[id]
       Response: { success: true }
```

#### Portfolio Management
```
GET    /api/admin/portfolio
       Response: All portfolio items
       
POST   /api/admin/portfolio
       Body: Portfolio data + images
       Response: Created portfolio item
       
PUT    /api/admin/portfolio/[id]
       Body: Updated data
       Response: Updated portfolio item
       
DELETE /api/admin/portfolio/[id]
       Response: { success: true }
```

#### Blog Management
```
GET    /api/admin/blog
       Response: All blog posts (including drafts)
       
POST   /api/admin/blog
       Body: Blog post data
       Response: Created blog post
       
PUT    /api/admin/blog/[id]
       Body: Updated data
       Response: Updated blog post
       
DELETE /api/admin/blog/[id]
       Response: { success: true }
```

#### Contact Management
```
GET  /api/admin/contacts
     Query: ?status=NEW&page=1
     Response: Paginated contact submissions
     
PUT  /api/admin/contacts/[id]
     Body: { status, notes? }
     Response: Updated contact
     
DELETE /api/admin/contacts/[id]
       Response: { success: true }
```

#### Testimonials Management
```
GET    /api/admin/testimonials
       Response: All testimonials
       
POST   /api/admin/testimonials
       Body: Testimonial data
       Response: Created testimonial
       
PUT    /api/admin/testimonials/[id]
       Body: Updated data
       Response: Updated testimonial
       
DELETE /api/admin/testimonials/[id]
       Response: { success: true }
```

#### Comments Management
```
GET  /api/admin/comments
     Query: ?approved=false
     Response: Comments (pending approval)
     
PUT  /api/admin/comments/[id]/approve
     Response: Approved comment
     
DELETE /api/admin/comments/[id]
       Response: { success: true }
```

#### Subscribers Management
```
GET  /api/admin/subscribers
     Query: ?active=true
     Response: Newsletter subscribers
     
POST /api/admin/subscribers/export
     Response: CSV file download
```

#### Settings Management
```
GET  /api/admin/settings
     Response: All settings
     
PUT  /api/admin/settings
     Body: Updated settings
     Response: Updated settings
```

#### Upload
```
POST /api/admin/upload
     Body: FormData with file
     Response: { url: "cloudinary-url" }
```

---

## 📁 File Storage Requirements

### Images to Store:
1. **Portfolio Images** - High-res event photos (multiple per project)
2. **Blog Featured Images** - 16:9 ratio, optimized for web
3. **Service Images** - Icons or hero images for each service
4. **Team Photos** - Square 1:1 ratio for About page
5. **Testimonial Photos** - Client headshots
6. **Site Logo & Branding** - Logo variations (light/dark)
7. **Hero Images** - Large background images for hero sections

### Image Specifications:
```javascript
{
  portfolio: {
    hero: { width: 1920, height: 1080, format: 'webp' },
    gallery: { width: 1200, height: 900, format: 'webp' }
  },
  blog: {
    featured: { width: 1200, height: 675, format: 'webp' }
  },
  testimonials: {
    photo: { width: 400, height: 400, format: 'webp' }
  },
  team: {
    photo: { width: 600, height: 600, format: 'webp' }
  }
}
```

### Cloudinary Configuration:
```javascript
// Example transformation
cloudinary.url('portfolio-image.jpg', {
  transformation: [
    { width: 1920, height: 1080, crop: 'fill', gravity: 'auto' },
    { quality: 'auto', fetch_format: 'auto' }
  ]
});
```

---

## 🔐 Authentication Strategy

### NextAuth.js Configuration

```typescript
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, email: user.email, name: user.name, role: user.role };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  }
});
```

---

## 📧 Email Notifications

### When to Send Emails:

1. **Contact Form Submission**
   - To Admin: New inquiry notification
   - To User: Confirmation of submission

2. **Newsletter Subscription**
   - To User: Welcome email + confirmation

3. **Blog Comment** (if enabled)
   - To Admin: New comment for approval

### Email Service Setup (Resend):

```typescript
// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(data: ContactSubmission) {
  await resend.emails.send({
    from: 'Event Planner <noreply@eventplanner.com>',
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `
  });
}
```

---

## 🚀 Implementation Phases

### Phase 1: Database Setup (Week 1)
- [ ] Install Prisma and PostgreSQL
- [ ] Create Prisma schema
- [ ] Run initial migrations
- [ ] Seed database with sample data

### Phase 2: Public API (Week 2)
- [ ] Services endpoints
- [ ] Portfolio endpoints
- [ ] Blog endpoints
- [ ] Contact form endpoint
- [ ] Newsletter subscription

### Phase 3: Admin Authentication (Week 3)
- [ ] Set up NextAuth.js
- [ ] Create login page
- [ ] Protect admin routes
- [ ] Create admin layout

### Phase 4: Admin CMS (Week 4-5)
- [ ] Services management
- [ ] Portfolio management
- [ ] Blog post editor
- [ ] Contact submissions dashboard
- [ ] Testimonials management

### Phase 5: File Upload (Week 6)
- [ ] Cloudinary integration
- [ ] Image upload component
- [ ] Image optimization
- [ ] Gallery management

### Phase 6: Email Integration (Week 7)
- [ ] Resend/SendGrid setup
- [ ] Contact form emails
- [ ] Newsletter emails
- [ ] Admin notifications

---

## 🔧 Environment Variables Required

```bash
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-random-secret"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email
RESEND_API_KEY="re_..."
ADMIN_EMAIL="admin@eventplanner.com"

# Optional
GOOGLE_MAPS_API_KEY="..."
GOOGLE_ANALYTICS_ID="G-..."
```

---

## 📊 Database Indexes for Performance

```prisma
// Add to models for better query performance

model BlogPost {
  // ...existing fields...
  
  @@index([slug])
  @@index([category, isPublished])
  @@index([publishedAt])
}

model Portfolio {
  // ...existing fields...
  
  @@index([slug])
  @@index([category, isPublished])
  @@index([isFeatured])
}

model Service {
  // ...existing fields...
  
  @@index([slug])
  @@index([category, isActive])
}
```

---

## 🎯 Next Steps

1. **Choose your database provider:**
   - Supabase (Recommended - Free tier, built-in auth)
   - Vercel Postgres (Good if deploying to Vercel)
   - Railway/Render (Alternative options)

2. **Set up Prisma:**
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

3. **Create the schema and migrate:**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Start building API routes!**

---

**Ready to implement?** Let me know which phase you'd like to start with, and I'll provide the complete code for that section!
