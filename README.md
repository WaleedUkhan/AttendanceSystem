# Online Attendance Management App

Online Attendance Management App is a web application designed to manage attendance for students. It provides features to mark attendance, view attendance history, and manage user records.

## Features

- **User Authentication**: Secure login and registration for users.
- **Attendance Marking**: Multiple ways to mark attendance:
  - QR Code-based attendance marking
  - Manual attendance marking by admin
  - Leave request system
- **View Attendance**: Users can view their own attendance records, including present, absent, and leave statuses.
- **Data Export**: Export attendance records in excel format (CSV).
- **Search and Filter**: Search attendance by user name, date.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (React.js, NEXT.js, plain JS)
- **Backend**: Node.js, Express.
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens), bcrypt, js-cookie
- **Other Libraries**: xlsx, mysql2, react-toastify

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Admin Features

- **QR Code Attendance**: Generate QR codes for students to scan and mark attendance
- **Manual Attendance**: Mark attendance manually for any student on any date
- **Approve or Reject**: Admin can approve/reject attendance marked/requested
- **View Reports**: View attendance reports for specific users and export to CSV/xlsx
- **Mark Working Days**: Mark dates as working days for attendance marking

### Regular User Features

- **Mark Attendance**: Users can mark their attendance by scanning QR codes
- **View Attendance**: Check individual attendance records and history
- **Leave Requests**: Request leave for specific dates
- **Profile Picture**: Add and update profile pictures

## API Documentation

The backend exposes a REST API to handle various requests. Here are some of the key endpoints:

- `POST /api/auth/signIn` – Login to the system
- `POST /api/auth/signUp` – Register new users
- `GET /api/viewRecords` – Get attendance data for a specific user
- `POST /api/markAttendance` – Mark attendance via QR code
- `POST /api/admin/manualAttendance` – Mark attendance manually (admin only)
- `GET /api/admin/students` – Get list of students (admin only)

## Recent Updates

- Added manual attendance marking feature for admins
- Improved UI/UX with toast notifications
- Enhanced error handling and validation
- Added new API endpoints for manual attendance management

## Known Issues

- QR code expiration handling needs improvement
- Leave request submission needs error handling review
- Deployment configuration pending
- Real user testing required

## Contributing

Feel free to submit issues and enhancement requests!

<!-- Remaining Tasks -->

-Deployment
-check working by real users
-Take Help/discuss with teacher. 
-manual attendance lag rahi ha but status update karne ka kam baqi ha. for users-> Attendance Report 
 for admin -> dashboard? why these are not updating solve them but first deploy it correctly. then these can 
 tracked easily. 


