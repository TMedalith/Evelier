# Evelier - K-Beauty E-Commerce Platform

A modern, full-stack e-commerce platform specializing in Korean beauty (K-beauty) products. Built with Next.js 15 and NestJS for optimal performance, scalability, and developer experience.

## Overview

Evelier provides a seamless shopping experience for K-beauty enthusiasts, featuring popular Korean skincare and makeup brands like Innisfree, Etude House, Laneige, Cosrx, and more. The platform includes product browsing, variant selection (shades/sizes), shopping cart, wishlist, checkout with Stripe, and order management.

## Tech Stack

### Backend
- **NestJS 10+** - Progressive Node.js framework
- **TypeScript** - Type-safe development
- **PostgreSQL 15+** - Relational database
- **TypeORM** - Database ORM
- **Passport.js** - JWT authentication
- **Cloudinary** - Image storage and optimization
- **Stripe** - Payment processing

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Zustand** - State management
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Project Structure

```
Evelier/
├── backend/                    # NestJS API
│   ├── src/
│   │   ├── config/            # Database, JWT, Cloudinary config
│   │   ├── common/            # Guards, decorators, interceptors
│   │   ├── modules/
│   │   │   ├── auth/          # Authentication & JWT
│   │   │   ├── users/         # User management
│   │   │   ├── products/      # Product catalog
│   │   │   ├── categories/    # Product categories
│   │   │   ├── brands/        # K-beauty brands
│   │   │   ├── cart/          # Shopping cart
│   │   │   ├── wishlist/      # User wishlist
│   │   │   ├── orders/        # Order management
│   │   │   ├── reviews/       # Product reviews
│   │   │   └── upload/        # Cloudinary integration
│   │   └── database/
│   │       └── seeds/         # Sample K-beauty data
│   ├── .env                   # Environment variables
│   └── package.json
│
└── frontend/                   # Next.js App
    ├── src/
    │   ├── app/               # App Router pages
    │   │   ├── (auth)/        # Login, Register
    │   │   ├── (shop)/        # Home, Products, Cart
    │   │   ├── (user)/        # Account, Orders
    │   │   └── (admin)/       # Admin dashboard
    │   ├── components/
    │   │   ├── layout/        # Header, Footer, Nav
    │   │   ├── products/      # Product components
    │   │   ├── cart/          # Cart components
    │   │   └── ui/            # Reusable UI components
    │   ├── lib/
    │   │   ├── api/           # API service layer
    │   │   ├── hooks/         # Custom hooks
    │   │   ├── store/         # Zustand stores
    │   │   └── utils/         # Helper functions
    │   └── types/             # TypeScript types
    ├── public/                # Static assets
    └── package.json
```

## Features

### MVP (Current Phase)
- ✅ User authentication (register, login, JWT)
- ✅ Product catalog with K-beauty categories
- ✅ Product variants (shades for makeup, sizes for skincare)
- ✅ Shopping cart (guest & authenticated users)
- ✅ Wishlist functionality
- ✅ Stripe checkout integration
- ✅ Order management
- ✅ Product reviews with ratings
- ✅ Basic admin dashboard
- ✅ Responsive design
- ✅ SEO optimization

### Post-MVP Enhancements
- Email notifications
- Advanced analytics
- Product recommendations
- Multi-language support
- Advanced search with filters
- Gift cards and promotions

## K-Beauty Categories

### Skincare
- Cleansers
- Toners & Essences
- Serums & Ampoules
- Moisturizers
- Sunscreen
- Sheet Masks

### Makeup
- Cushion Foundation
- Concealer
- Lipstick & Lip Tint
- Eyeshadow & Eyeliner
- Blush & Highlighter

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL 15+
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials, JWT secret, Cloudinary, and Stripe keys

# Run database migrations
npm run migration:run

# Seed database with sample K-beauty products
npm run seed

# Start development server
npm run start:dev
```

Backend will run on `http://localhost:3001`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with API URL and Stripe publishable key

# Start development server
npm run dev
```

Frontend will run on `http://localhost:3000`

## Environment Variables

### Backend (.env)
```env
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=kbeauty_ecommerce

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Server
PORT=3001
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get current user

### Products
- `GET /products` - List products (with filters)
- `GET /products/:id` - Get product details
- `POST /products` - Create product (admin)
- `PUT /products/:id` - Update product (admin)
- `DELETE /products/:id` - Delete product (admin)

### Cart
- `GET /cart` - Get user cart
- `POST /cart/items` - Add item to cart
- `PUT /cart/items/:id` - Update cart item
- `DELETE /cart/items/:id` - Remove cart item

### Orders
- `POST /orders` - Create order
- `GET /orders` - Get user orders
- `GET /orders/:id` - Get order details

### Wishlist
- `GET /wishlist` - Get user wishlist
- `POST /wishlist` - Add to wishlist
- `DELETE /wishlist/:id` - Remove from wishlist

## Development Workflow

This project follows a structured commit convention for clear development tracking:

1. **Project Setup** (Commits 1-5)
2. **Backend Foundation** (Commits 6-15)
3. **Backend Core Features** (Commits 16-35)
4. **Backend E-Commerce** (Commits 36-50)
5. **Frontend Setup** (Commits 51-60)
6. **Frontend Auth & Pages** (Commits 61-75)
7. **Frontend E-Commerce** (Commits 76-85)
8. **Polish & Deploy** (Commits 86-90)

See the detailed migration plan in the project documentation.

## Contributing

This is a personal project currently under active development. Contributions are welcome once the MVP is complete.

## License

MIT License - see LICENSE file for details

## Status

🚧 **Currently in active development** - MVP implementation in progress

## Contact

For questions or feedback about Evelier, please open an issue on GitHub.

---

Built with ❤️ for K-beauty enthusiasts
