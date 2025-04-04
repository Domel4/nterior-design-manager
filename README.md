# Interior Design Project Manager

A specialized project management SaaS for interior designers that helps manage projects, clients, materials, and tasks efficiently.

## Features

- Project dashboard with visual timeline and milestones
- Client management with communication history
- Budget tracking and expense management
- Vendor/supplier database and ordering system
- Materials and finish selections tracker
- Drag-and-drop room planning/layouts
- Document management for contracts, invoices, and receipts
- Photo galleries for inspiration and project progress
- Task management with assignments and deadlines
- Integration with accounting software

## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React.js (to be implemented)
- Authentication: JWT
- File Storage: Multer (for local development)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd interior-design-manager
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/interior-design-manager
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
interior-design-manager/
├── models/             # MongoDB models
│   ├── User.js
│   ├── Project.js
│   ├── Task.js
│   └── MoodBoard.js
├── routes/             # API routes (to be implemented)
├── controllers/        # Route controllers (to be implemented)
├── middleware/         # Custom middleware (to be implemented)
├── config/             # Configuration files (to be implemented)
├── client/             # React frontend (to be implemented)
├── server.js           # Entry point
├── package.json
└── README.md
```

## API Documentation

API documentation will be added as the endpoints are implemented.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 