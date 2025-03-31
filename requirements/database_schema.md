# 🗄️ Flex Rent - Database Schema

This document outlines the database schema for the Flex Rent application using Prisma with PostgreSQL.

## 📊 Core Tables

### User
Stores information about all users (both tenants and property owners)

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for user identification | @id @default(uuid()) |
| email | String | User's email address | @unique |
| password | String | Hashed password | |
| role | Enum | User role (TENANT, OWNER) | |
| firstName | String | User's first name | |
| lastName | String | User's last name | |
| phoneNumber | String | Contact number | |
| createdAt | DateTime | Account creation timestamp | @default(now()) |
| updatedAt | DateTime | Last update timestamp | @updatedAt |
| isVerified | Boolean | Email verification status | @default(false) |
| subscription | Enum | NONE, STANDARD, PREMIUM | @default(NONE) |

### Property
Stores property listings information

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for property | @id @default(uuid()) |
| ownerId | String | Reference to owner | @references(User) |
| title | String | Property title | |
| description | String | Detailed description | |
| address | String | Physical address | |
| city | String | City location | |
| coordinates | Json | Latitude and longitude | |
| price | Decimal | Base price per day | |
| weeklyDiscount | Decimal? | Weekly booking discount | |
| monthlyDiscount | Decimal? | Monthly booking discount | |
| propertyType | Enum | ROOM, APARTMENT, HOUSE | |
| bedrooms | Int | Number of bedrooms | |
| bathrooms | Int | Number of bathrooms | |
| maxOccupancy | Int | Maximum number of occupants | |
| amenities | Json | List of available amenities | |
| status | Enum | AVAILABLE, UNAVAILABLE | @default(AVAILABLE) |
| createdAt | DateTime | Listing creation date | @default(now()) |
| updatedAt | DateTime | Last update timestamp | @updatedAt |

### Booking
Manages property bookings and reservations

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for booking | @id @default(uuid()) |
| propertyId | String | Reference to property | @references(Property) |
| tenantId | String | Reference to tenant | @references(User) |
| startDate | DateTime | Check-in date | |
| endDate | DateTime | Check-out date | |
| totalPrice | Decimal | Total booking amount | |
| status | Enum | PENDING, APPROVED, REJECTED, CANCELLED | @default(PENDING) |
| paymentStatus | Enum | PENDING, PAID, REFUNDED | @default(PENDING) |
| createdAt | DateTime | Booking creation date | @default(now()) |
| updatedAt | DateTime | Last update timestamp | @updatedAt |

### Transaction
Records all payment transactions

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for transaction | @id @default(uuid()) |
| bookingId | String | Reference to booking | @references(Booking) |
| amount | Decimal | Transaction amount | |
| currency | String | Transaction currency | @default("USD") |
| stripePaymentId | String | Stripe payment reference | |
| status | Enum | PENDING, SUCCESSFUL, FAILED | |
| type | Enum | BOOKING, SUBSCRIPTION | |
| createdAt | DateTime | Transaction timestamp | @default(now()) |

### IdentityVerification
Manages user identity verification documents

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for verification | @id @default(uuid()) |
| userId | String | Reference to user | @references(User) |
| documentType | Enum | ID_CARD, PASSPORT, DRIVERS_LICENSE | |
| documentUrl | String | Document file URL in storage | |
| status | Enum | PENDING, APPROVED, REJECTED | @default(PENDING) |
| submittedAt | DateTime | Submission timestamp | @default(now()) |
| verifiedAt | DateTime? | Verification timestamp | |
| verifiedBy | String? | Admin who verified | @references(User) |

### PropertyImage
Stores property images

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for image | @id @default(uuid()) |
| propertyId | String | Reference to property | @references(Property) |
| url | String | Image URL in storage | |
| isPrimary | Boolean | Primary image flag | @default(false) |
| createdAt | DateTime | Upload timestamp | @default(now()) |

### Subscription
Tracks owner subscription details

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | String | UUID for subscription | @id @default(uuid()) |
| userId | String | Reference to owner | @references(User) |
| plan | Enum | STANDARD, PREMIUM | |
| status | Enum | ACTIVE, CANCELLED, EXPIRED | |
| stripeSubscriptionId | String | Stripe subscription ID | |
| startDate | DateTime | Subscription start date | |
| endDate | DateTime | Subscription end date | |
| createdAt | DateTime | Record creation date | @default(now()) |
| updatedAt | DateTime | Last update timestamp | @updatedAt |

## 🔄 Relationships

1. User (Owner) -> Property: One-to-Many
2. User (Tenant) -> Booking: One-to-Many
3. Property -> Booking: One-to-Many
4. Property -> PropertyImage: One-to-Many
5. Booking -> Transaction: One-to-Many
6. User -> IdentityVerification: One-to-Many
7. User -> Subscription: One-to-One (for owners)

## 🔐 Indexes

- User: email
- Property: ownerId, city, status
- Booking: propertyId, tenantId, startDate, endDate
- Transaction: bookingId, stripePaymentId
- PropertyImage: propertyId
- Subscription: userId, stripeSubscriptionId

## 📝 Notes

1. All IDs use UUID for better security and distribution
2. Timestamps (createdAt, updatedAt) are automatically managed
3. Enums are used for fixed-value fields
4. Json type is used for flexible data storage (coordinates, amenities)
5. Decimal type is used for all monetary values
6. Soft deletion should be implemented where necessary
7. Foreign key constraints ensure data integrity
