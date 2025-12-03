/**
 * Built-in commands for the AI Chat System
 * Organized by role: admin, coordinator, student, tutor
 * Each command includes:
 * - name: Command identifier (used with / prefix)
 * - description: What the command does
 * - usage: Example usage with parameters
 * - roles: Array of roles that can use this command
 * - answer: Default response message
 */
export const commands = [
  // ========== GENERAL COMMANDS (All Roles) ==========
  {
    name: "list",
    description: "List all available commands",
    usage: "/list",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "Available commands:/help, /clear, /tracking, /students, /tutors, /reports, /export, /rewards, /reward_student, /visitors, /feedback_trends, /trending_courses, /dashboard, /assign, /assign_student, /pending_actions, /satisfaction, /tutor_activity, /student_activity, /feedback_by_dept, /my_sessions, /upcoming, /completed, /find_tutor, /find_tutor_ai, /book_tutor, /reschedule, /cancel_session, /rate_session, /session_details, /join_session, /my_profile, /library, /download_book"
  },
  {
    name: "help",
    description: "Show all available commands for your role",
    usage: "/help",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "❓ To get help with commands:\n1. Type '/help' in the chat input\n2. The AI will display a list of all available commands for your role\n3. Commands are organized by category:\n   - General commands (available to all)\n   - Role-specific commands (Admin, Coordinator, Student, or Tutor)\n   - Library commands (available to all)\n4. Each command shows:\n   - Command name (use with / prefix)\n   - Description of what it does\n   - Example usage\n5. Type any command with / prefix to get a detailed tutorial on how to use that feature\n6. For example: '/tracking' will show you how to view the tracking dashboard."
  },
  {
    name: "clear",
    description: "Clear the chat history",
    usage: "/clear",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "🗑️ To clear chat history:\n1. Type '/clear' in the chat input\n2. Press Enter or click the send button\n3. The chat history will be cleared immediately\n4. You'll see a fresh chat window with only the initial greeting message\n5. All previous messages and conversations will be removed\n6. This is useful when you want to start a new conversation or remove clutter\n7. Note: This action cannot be undone, so make sure you've saved any important information before clearing"
  },

  // ========== ADMIN COMMANDS ==========
  {
    name: "tracking",
    description: "View tracking dashboard statistics (students, tutors, trending courses)",
    usage: "/tracking",
    roles: ["admin"],
    answer: "📊 To view the tracking dashboard:\n1. Navigate to the Admin section in the sidebar\n2. Click on 'Tracking' in the navigation menu\n3. You'll see three main cards: Students, Tutors, and Trending Courses\n4. The dashboard displays real-time statistics including online counts, status breakdowns, and visitor charts\n5. Scroll down to see the Visitors bar chart and Feedback Trends line chart"
  },
  {
    name: "students",
    description: "View total number of students and online count",
    usage: "/students",
    roles: ["admin"],
    answer: "👥 To view student statistics:\n1. Go to Admin → Tracking in the sidebar\n2. Look at the first card labeled 'Students'\n3. You'll see the total number of students displayed prominently\n4. Below that, check the green indicator showing online students count\n5. The donut chart shows student status breakdown: Completed, Progressed, and Studying\n6. Each status is color-coded with a legend below the chart"
  },
  {
    name: "tutors",
    description: "View total number of tutors and online count",
    usage: "/tutors",
    roles: ["admin"],
    answer: "👨‍🏫 To view tutor statistics:\n1. Go to Admin → Tracking in the sidebar\n2. Look at the second card labeled 'Tutors'\n3. You'll see the total number of tutors displayed prominently\n4. Check the green indicator showing online tutors count\n5. The donut chart shows tutor type breakdown: Teacher Assistant (TA), Lecturer, and Professor\n6. Each type is color-coded with a legend below the chart"
  },
  {
    name: "reports",
    description: "View student engagement reports",
    usage: "/reports [semester] [department]",
    roles: ["admin"],
    answer: "📈 To view student engagement reports:\n1. Navigate to Admin → Reports in the sidebar\n2. Use the filters at the top:\n   - Select a semester from the dropdown (e.g., '2024 - 1')\n   - Choose a department/faculty from the dropdown (or 'All Faculties')\n3. View the summary KPIs showing Active Students, Avg. Active Time, and Avg. Completion Rate\n4. Use the search bar to find specific students by ID or name\n5. Review the detailed table showing Student ID, Name, Faculty, Total Logins, Courses, Avg. Progress, and Last Active date\n6. Use pagination at the bottom to navigate through pages"
  },
  {
    name: "export",
    description: "Export student engagement data to CSV",
    usage: "/export [semester] [department]",
    roles: ["admin"],
    answer: "💾 To export student engagement data:\n1. Go to Admin → Reports in the sidebar\n2. Set your filters (Semester and Department) if you want specific data\n3. Click the green 'Export CSV' button in the top-right corner of the filters section\n4. The system will generate a CSV file with all the student engagement data currently displayed\n5. The file will download automatically with columns: Student ID, Name, Faculty, Total Logins, Courses, Avg. Progress, and Last Active"
  },
  {
    name: "rewards",
    description: "View and manage student rewards",
    usage: "/rewards [student_id] [status]",
    roles: ["admin"],
    answer: "🎁 To view and manage student rewards:\n1. Navigate to Admin → Rewards in the sidebar\n2. Use the filter section to:\n   - Search by Student ID or Name in the search box\n   - Filter by Outcome Status (All Statuses, Good, Medium, Bad)\n   - Set a date range for Reward Date\n3. Click 'Apply / Reset Page' to apply filters\n4. Review the Students Reward List table showing: Student ID, Name, Participation %, Status, Date, and Actions\n5. To reward a student, click the 'Reward' button in the Actions column\n6. In the popup modal, enter reward points (suggested points are auto-filled based on participation)\n7. Add an optional note/message\n8. Click 'Confirm Reward' to complete"
  },
  {
    name: "reward_student",
    description: "Reward a student with points",
    usage: "/reward_student",
    roles: ["admin"],
    answer: "⭐ To reward a student with points:\n1. Go to Admin → Rewards in the sidebar\n2. Search for the student using the search box (by ID or name)\n3. Find the student in the table and click the 'Reward' button in the Actions column\n4. A modal will open showing the student's information and participation percentage\n5. Enter the reward points in the 'Reward Points / Gift Value' field (suggested points are pre-filled based on participation: 500 for 90%+, 300 for 70%+, 100 for 50%+)\n6. Optionally add a message/note in the textarea\n7. Click 'Confirm Reward' to submit\n8. The reward will be processed and the modal will close"
  },
  {
    name: "visitors",
    description: "View visitor statistics chart",
    usage: "/visitors",
    roles: ["admin"],
    answer: "📊 To view visitor statistics:\n1. Navigate to Admin → Tracking in the sidebar\n2. Scroll down to the bottom section with two charts\n3. Look at the left chart labeled 'VISITORS'\n4. The bar chart shows daily visitor counts for the week (Mon through Sun)\n5. Each bar represents the number of visitors for that day\n6. Click 'View more' in the top-right of the chart section for additional details"
  },
  {
    name: "feedback_trends",
    description: "View feedback trends over time",
    usage: "/feedback_trends [period]",
    roles: ["admin"],
    answer: "📈 To view feedback trends:\n1. Go to Admin → Tracking in the sidebar\n2. Scroll down to the bottom section with two charts\n3. Look at the right chart labeled 'FEEDBACK TRENDS'\n4. The line chart shows feedback trends over the last 6 months (Jan through Jun)\n5. Two lines are displayed: Student Feedback (green) and Tutor Feedback (blue)\n6. Use the dropdown in the top-right to change the time period (Last 6 Months or Last Year)\n7. The chart shows the trend of feedback volume over time"
  },
  {
    name: "trending_courses",
    description: "View trending courses statistics",
    usage: "/trending_courses",
    roles: ["admin"],
    answer: "🔥 To view trending courses:\n1. Navigate to Admin → Tracking in the sidebar\n2. Look at the third card on the top row labeled 'TRENDING COURSES'\n3. You'll see a list of courses with progress bars showing their popularity percentage\n4. Courses are displayed with their names and corresponding percentage bars\n5. The courses are sorted by popularity (highest percentage first)\n6. Each course shows a colored progress bar indicating its trending status"
  },

  // ========== COORDINATOR COMMANDS ==========
  {
    name: "dashboard",
    description: "View coordinator dashboard with pending actions and statistics",
    usage: "/dashboard",
    roles: ["coordinator"],
    answer: "📊 To view the coordinator dashboard:\n1. Navigate to Coordinator → Dashboard in the sidebar\n2. You'll see three main cards at the top:\n   - PENDING ACTIONS: Shows urgent items needing attention (red border)\n   - SATISFACTION SCORE: Displays overall satisfaction with donut chart (green border)\n   - TUTOR ACTIVITY: Shows active tutors and activity metrics (indigo border)\n3. Below, view the RECENT STUDENT ACTIVITY table and FEEDBACK BY DEPT chart\n4. Click 'View Detailed Queue' or 'View Detailed Report' for more information"
  },
  {
    name: "assign",
    description: "Assign students to tutors",
    usage: "/assign [subject] [status]",
    roles: ["coordinator"],
    answer: "👥 To assign students to tutors:\n1. Navigate to Coordinator → Assigning in the sidebar\n2. Use the filter section at the top:\n   - Select a Subject/Course from the dropdown (or 'All Subjects')\n   - Choose Assignment Status (All, Unassigned, Assigned, Needs Adjustment)\n   - Click 'Refresh List' to reset filters\n3. In the left panel, review the 'Students Needing Support' table\n4. Check the boxes next to students you want to assign\n5. In the right panel 'ASSIGN SUPPORT' form:\n   - Selected students will appear in the 'Selected Students' field\n   - Choose a tutor from the 'Select Supporting Tutor' dropdown\n   - Enter the expected schedule in the textarea\n   - Add an optional internal note\n6. Click 'Confirm Assignment' to complete"
  },
  {
    name: "assign_student",
    description: "Assign a student to a tutor",
    usage: "/assign_student",
    roles: ["coordinator"],
    answer: "✅ To assign a specific student to a tutor:\n1. Go to Coordinator → Assigning in the sidebar\n2. Use filters to find the student, or search by Student ID in the table\n3. Check the checkbox next to the student's name in the 'Students Needing Support' table\n4. In the right panel 'ASSIGN SUPPORT' form:\n   - Verify the selected student appears in the 'Selected Students' field\n   - Select a tutor from the 'Select Supporting Tutor' dropdown (tutors are matched by skills)\n   - Enter the expected schedule (e.g., 'Tue (19h-21h), Thu (19h-21h) via Google Meet')\n   - Optionally add an internal note\n5. Click 'Confirm Assignment' button\n6. A success message will confirm the assignment"
  },
  {
    name: "pending_actions",
    description: "View pending actions queue",
    usage: "/pending_actions",
    roles: ["coordinator"],
    answer: "⏳ To view pending actions:\n1. Navigate to Coordinator → Dashboard in the sidebar\n2. Look at the first card on the left labeled 'PENDING ACTIONS'\n3. You'll see a list of items requiring attention:\n   - Tutor Registration Request (with count)\n   - Course Approval Needed (with count)\n   - Negative Feedback (Tutor) (with count)\n   - Content Change Request (with count)\n   - Leave Application (Tutor) (with count)\n4. Each item shows its count and color-coded status (red for urgent, yellow for review, gray for processed)\n5. The total number of pending actions is displayed at the top\n6. Click 'View Detailed Queue' button at the bottom for more details"
  },
  {
    name: "satisfaction",
    description: "View satisfaction scores and feedback statistics",
    usage: "/satisfaction",
    roles: ["coordinator"],
    answer: "😊 To view satisfaction scores:\n1. Go to Coordinator → Dashboard in the sidebar\n2. Look at the middle card labeled 'SATISFACTION SCORE'\n3. You'll see the overall satisfaction score (e.g., 4.5 / 5.0) prominently displayed\n4. Below that, see the number of reviews the score is based on\n5. A donut chart shows the breakdown:\n   - Positive feedback (green, 80%)\n   - Neutral feedback (yellow, 15%)\n   - Negative feedback (red, 5%)\n6. The legend below the chart explains each category"
  },
  {
    name: "tutor_activity",
    description: "View tutor activity statistics",
    usage: "/tutor_activity",
    roles: ["coordinator"],
    answer: "📊 To view tutor activity:\n1. Navigate to Coordinator → Dashboard in the sidebar\n2. Look at the third card on the right labeled 'TUTOR ACTIVITY'\n3. You'll see the total number of active tutors in the last 7 days\n4. Below that, view key metrics:\n   - Avg Response / 24h: Average response time\n   - On-time Rate: Percentage of on-time sessions\n   - Courses to Watch: Number of courses needing attention\n5. Each metric is color-coded (indigo for response, green for on-time, red for courses to watch)"
  },
  {
    name: "student_activity",
    description: "View recent student activity",
    usage: "/student_activity",
    roles: ["coordinator"],
    answer: "👨‍🎓 To view recent student activity:\n1. Go to Coordinator → Dashboard in the sidebar\n2. Scroll down to the bottom section\n3. Look at the left table labeled 'RECENT STUDENT ACTIVITY'\n4. The table shows:\n   - Student ID\n   - Name\n   - Course\n   - Progress (color-coded: green for high, yellow for medium, red for low)\n   - Time (when the activity occurred)\n5. Click 'View Detailed Report' in the top-right for more comprehensive data\n6. The table is sortable and shows the most recent activities first"
  },
  {
    name: "feedback_by_dept",
    description: "View feedback statistics by department",
    usage: "/feedback_by_dept",
    roles: ["coordinator"],
    answer: "🏫 To view feedback by department:\n1. Navigate to Coordinator → Dashboard in the sidebar\n2. Scroll down to the bottom section\n3. Look at the right card labeled 'FEEDBACK BY DEPT'\n4. A bar chart displays average feedback scores for different departments:\n   - CSE (Computer Science & Engineering)\n   - Mech (Mechanical Engineering)\n   - Civil (Civil Engineering)\n   - Electrical (Electrical Engineering)\n5. Each bar shows the average score out of 5 for that department\n6. Bars are color-coded for easy comparison\n7. A note below explains it's the average feedback score per department"
  },

  // ========== STUDENT COMMANDS ==========
  {
    name: "my_sessions",
    description: "View your upcoming and completed sessions",
    usage: "/my_sessions [upcoming|completed]",
    roles: ["student"],
    answer: "📅 To view your sessions:\n1. Navigate to Student → Dashboard in the sidebar\n2. You'll see two main sections:\n   - 'Upcoming Sessions' (teal border at top)\n   - 'Completed Sessions' (green border at top)\n3. For upcoming sessions: Click on a session to expand and see options (Detail, Reschedule, Cancel)\n4. For completed sessions: Click the 'Rating' button to rate a completed session\n5. Each session shows: Subject, Date, Time, Tutor name, and Mode (Online/In-person)\n6. Use the chevron icon to expand/collapse session details"
  },
  {
    name: "upcoming",
    description: "View your upcoming tutoring sessions",
    usage: "/upcoming",
    roles: ["student"],
    answer: "📆 To view upcoming sessions:\n1. Go to Student → Dashboard in the sidebar\n2. Look at the 'Upcoming Sessions' section (teal border)\n3. Each session card shows:\n   - Subject name\n   - Date and time\n   - Tutor name\n   - Session mode (Online Session or location like BKH3-311)\n4. Click on a session to expand it\n5. When expanded, you'll see three action buttons:\n   - Detail: View session materials\n   - Reschedule: Change the session time\n   - Cancel: Cancel the session\n6. If it's an online session, you'll see a 'Go Online' button to join the meeting"
  },
  {
    name: "completed",
    description: "View your completed sessions",
    usage: "/completed",
    roles: ["student"],
    answer: "✅ To view completed sessions:\n1. Navigate to Student → Dashboard in the sidebar\n2. Scroll down to the 'Completed Sessions' section (green border)\n3. Each completed session shows:\n   - Subject name\n   - Date and time\n   - Tutor name\n4. Click the yellow 'Rating' button to rate the session\n5. In the rating modal:\n   - Select stars (1-5) for your rating\n   - Add a comment in the textarea\n   - Click 'Submit' to save your rating\n6. You can also view old sessions in Student → Old Sessions"
  },
  {
    name: "find_tutor",
    description: "Search and find available tutors",
    usage: "/find_tutor [subject] [day] [time]",
    roles: ["student"],
    answer: "🔍 To find a tutor:\n1. Navigate to Student → Find Tutor in the sidebar\n2. Use the search bar at the top to search by tutor name or expertise\n3. In the left filter panel:\n   - Select a Date (All, Mon, Tue, Wed, Thu, Fri, Sat, Sun)\n   - Choose a Time range (All Time, Morning 6:00-12:00, Afternoon 12:00-18:00, Evening 18:00-22:00)\n4. The tutor list will filter based on your selections\n5. Each tutor card shows:\n   - Name and major/subject\n   - Rating and number of reviews\n   - Bio/description\n   - Weekly schedule grid showing available times\n6. Click 'Detail', 'Review', or 'Book Tutor' buttons for each tutor"
  },
  {
    name: "find_tutor_ai",
    description: "Get AI-recommended tutor based on your needs",
    usage: "/find_tutor_ai [subject] [preferences]",
    roles: ["student"],
    answer: "🤖 To get AI-recommended tutor:\n1. Go to Student → Find Tutor in the sidebar\n2. Click the blue 'Find Tutor by AI' button next to the search bar\n3. A modal will appear showing an AI-recommended tutor based on your needs\n4. The modal displays:\n   - Tutor's name and major\n   - Rating and number of reviews\n   - Bio/description\n5. You can then:\n   - Click 'Detail' to see full academic profile\n   - Click 'Review' to see student reviews\n   - Click 'Book Tutor' to book a session\n6. The AI recommendation is based on your preferences and the tutor's expertise"
  },
  {
    name: "book_tutor",
    description: "Book a session with a tutor",
    usage: "/book_tutor",
    roles: ["student"],
    answer: "📝 To book a tutor:\n1. Navigate to Student → Find Tutor in the sidebar\n2. Find the tutor you want to book (use search or filters)\n3. Click the orange 'Book Tutor' button on the tutor's card\n4. A booking modal will open\n5. Fill in the booking form:\n   - Select or confirm the date\n   - Choose a time slot from the tutor's available schedule\n   - Specify if you prefer online or in-person session\n6. Review the tutor's information and click 'Confirm Booking'\n7. Your booking request will be sent to the tutor for approval\n8. You'll see it in your 'Pending Requests' once confirmed"
  },
  {
    name: "reschedule",
    description: "Reschedule an upcoming session",
    usage: "/reschedule",
    roles: ["student"],
    answer: "🔄 To reschedule a session:\n1. Go to Student → Dashboard in the sidebar\n2. Find your session in the 'Upcoming Sessions' section\n3. Click on the session to expand it\n4. Click the yellow 'Reschedule' button\n5. A reschedule modal will open\n6. Fill in the form:\n   - Select a new date using the date picker\n   - Choose a new time using the time picker\n7. Click 'Confirm' to submit the reschedule request\n8. The tutor will be notified of your request\n9. Once approved, your session will be updated with the new date and time"
  },
  {
    name: "cancel_session",
    description: "Cancel an upcoming session",
    usage: "/cancel_session",
    roles: ["student"],
    answer: "❌ To cancel a session:\n1. Navigate to Student → Dashboard in the sidebar\n2. Find your session in the 'Upcoming Sessions' section\n3. Click on the session to expand it\n4. Click the red 'Cancel' button\n5. A confirmation dialog may appear\n6. Confirm the cancellation\n7. The session will be removed from your upcoming sessions\n8. The tutor will be notified of the cancellation\n9. Note: Cancelled sessions may appear in your 'Old Sessions' for reference"
  },
  {
    name: "rate_session",
    description: "Rate a completed session",
    usage: "/rate_session",
    roles: ["student"],
    answer: "⭐ To rate a session:\n1. Go to Student → Dashboard in the sidebar\n2. Scroll to the 'Completed Sessions' section\n3. Find the session you want to rate\n4. Click the yellow 'Rating' button\n5. A rating modal will open\n6. Rate the session:\n   - Click on the stars (1-5) to select your rating\n   - Write a comment in the textarea (required)\n7. Click 'Submit' to save your rating\n8. Your rating and comment will be saved and may be visible to other students viewing the tutor's profile"
  },
  {
    name: "session_details",
    description: "View details of a specific session including materials",
    usage: "/session_details",
    roles: ["student"],
    answer: "📋 To view session details:\n1. Navigate to Student → Dashboard in the sidebar\n2. Find your session in the 'Upcoming Sessions' section\n3. Click on the session to expand it\n4. Click the blue 'Detail' button\n5. A detail modal will open showing:\n   - Session subject/topic\n   - Materials from Tutor section\n6. If materials are available:\n   - Each material shows title, author, and a 'Download' button\n   - Click 'Download' to get the material\n7. If no materials are uploaded, you'll see a message indicating that\n8. Close the modal when done reviewing"
  },
  {
    name: "join_session",
    description: "Join an online session",
    usage: "/join_session",
    roles: ["student"],
    answer: "💻 To join an online session:\n1. Go to Student → Dashboard in the sidebar\n2. Find your upcoming session in the 'Upcoming Sessions' section\n3. Look for sessions with 'Online Session' mode\n4. When it's time for the session, click the green 'Go Online' button\n5. This will open Google Meet (or your configured meeting platform) in a new tab\n6. Make sure your microphone and camera are ready\n7. The session link is automatically generated and will connect you to the tutor\n8. Note: The 'Go Online' button only appears for online sessions, not in-person ones"
  },
  {
    name: "tutor_profile",
    description: "View detailed profile of a tutor",
    usage: "/tutor_profile",
    roles: ["student"],
    answer: "👤 To view tutor profile:\n1. Navigate to Student → Find Tutor in the sidebar\n2. Find the tutor you're interested in\n3. Click the blue 'Detail' button on the tutor's card\n4. A detailed modal will open showing the 'ACADEMIC PROFILE'\n5. The profile includes:\n   - Full name and date of birth\n   - Faculty and department\n   - Contact phone and email\n   - Academic degree and country of graduation\n   - Major and specialization\n   - Academic title\n   - Current field of expertise\n   - Main research interests (list)\n   - Thesis supervision information\n   - Postgraduate courses taught (list)\n6. Scroll through the modal to see all information\n7. Click the X button to close"
  },
  {
    name: "tutor_reviews",
    description: "View reviews for a tutor",
    usage: "/tutor_reviews",
    roles: ["student"],
    answer: "📝 To view tutor reviews:\n1. Go to Student → Find Tutor in the sidebar\n2. Find the tutor you want to review\n3. Click the blue 'Review' button on the tutor's card\n4. A review modal will open showing:\n   - Tutor's name, major, and overall rating at the top\n   - List of all student reviews below\n5. Each review shows:\n   - Student username\n   - Rating (stars out of 5)\n   - Comment text\n6. Scroll through the reviews to see what other students have said\n7. Use this information to help decide if the tutor is right for you\n8. Close the modal when done"
  },
  {
    name: "old_sessions",
    description: "View your old/past sessions",
    usage: "/old_sessions",
    roles: ["student"],
    answer: "📚 To view old sessions:\n1. Navigate to Student → Old Sessions in the sidebar\n2. You'll see a list of all your past tutoring sessions\n3. Each session entry shows:\n   - Subject/topic name\n   - Date and time when it occurred\n   - Tutor name\n   - Session mode (Online or In-person)\n4. Sessions are typically sorted by date (most recent first)\n5. You can review past sessions to:\n   - See your learning history\n   - Reference previous topics\n   - Check which tutors you've worked with\n6. Use this page to track your tutoring history over time"
  },
  {
    name: "my_profile",
    description: "View your student profile",
    usage: "/my_profile",
    roles: ["student"],
    answer: "👤 To view your profile:\n1. Navigate to Student → Profile in the sidebar\n2. Your student profile page will display your information\n3. The profile typically includes:\n   - Student ID\n   - Full name\n   - Email address\n   - Department/Faculty\n   - Contact information\n   - Academic information\n4. You may be able to edit certain fields if the profile is editable\n5. Review your information to ensure it's up to date\n6. Your profile information is used for tutor matching and session management"
  },

  // ========== TUTOR COMMANDS ==========
  {
    name: "my_schedule",
    description: "View and manage your tutoring schedule",
    usage: "/my_schedule [date]",
    roles: ["tutor"],
    answer: "📅 To view and manage your schedule:\n1. Navigate to Tutor → Schedule in the sidebar\n2. You'll see a calendar view showing the current month\n3. The calendar displays:\n   - Days of the week (Mon-Sun) as columns\n   - Available time slots for each day\n4. Each time slot shows:\n   - Start and end time\n   - Status (Available)\n5. Use the arrow buttons (◀ ▶) to navigate between months\n6. Click on any day to add a new availability slot\n7. Click on an existing slot to view or edit it\n8. Use 'Cancel Selection' button to clear any selected dates"
  },
  {
    name: "add_availability",
    description: "Add available time slot to your schedule",
    usage: "/add_availability",
    roles: ["tutor"],
    answer: "➕ To add availability:\n1. Go to Tutor → Schedule in the sidebar\n2. Click on the day you want to add availability to\n3. A modal will open titled 'Add Availability'\n4. The selected date is shown at the top\n5. Set your time:\n   - Use the 'Start Time' time picker to select start time\n   - Use the 'End Time' time picker to select end time\n   - Or use the quick adjust buttons (Reduce/Extend) to modify duration\n6. Review your time slot in the modal\n7. Click 'Save Slot' to confirm\n8. The new availability will appear on your calendar\n9. Students can now see this time slot when searching for tutors"
  },
  {
    name: "remove_availability",
    description: "Remove a time slot from your schedule",
    usage: "/remove_availability",
    roles: ["tutor"],
    answer: "➖ To remove availability:\n1. Navigate to Tutor → Schedule in the sidebar\n2. Find the time slot you want to remove on the calendar\n3. Click on the specific time slot card\n4. The slot will be highlighted or a menu will appear\n5. Look for a delete/remove option (may be an X button or trash icon)\n6. Confirm the removal when prompted\n7. The time slot will be removed from your schedule\n8. Note: If students have already booked this slot, you may need to notify them or the system will handle it automatically"
  },
  {
    name: "upcoming_sessions",
    description: "View your upcoming tutoring sessions",
    usage: "/upcoming_sessions",
    roles: ["tutor"],
    answer: "📆 To view upcoming sessions:\n1. Go to Tutor → Dashboard in the sidebar\n2. Click on the 'Upcoming Sessions' tab at the top\n3. You'll see a list of all your scheduled sessions\n4. Each session shows:\n   - Subject/topic name\n   - Date and time\n   - Student name\n   - Session mode (Online or In-person with location)\n5. For online sessions, you'll see a green 'Join Meeting' button\n6. Click the blue 'Detail' button to:\n   - View session information\n   - Share materials with the student\n   - Search library for materials to add\n7. Sessions are sorted by date (soonest first)"
  },
  {
    name: "pending_requests",
    description: "View pending session requests from students",
    usage: "/pending_requests",
    roles: ["tutor"],
    answer: "⏳ To view pending requests:\n1. Navigate to Tutor → Dashboard in the sidebar\n2. Click on the 'Pending Requests' tab at the top\n3. You'll see a list of session requests from students\n4. Each request shows:\n   - Subject/topic\n   - Proposed date and time\n   - Student name\n   - Session type (Online or In-person)\n5. For each request, you have two options:\n   - Click 'Accept' to approve the request\n   - Click 'Decline' (red button) to reject it\n6. For in-person sessions, clicking 'Accept' will open a location selection modal\n7. Once accepted, the session moves to your 'Upcoming Sessions'"
  },
  {
    name: "accept_request",
    description: "Accept a pending session request",
    usage: "/accept_request",
    roles: ["tutor"],
    answer: "✅ To accept a request:\n1. Go to Tutor → Dashboard → Pending Requests tab\n2. Find the session request you want to accept\n3. Click the blue 'Accept' button\n4. If it's an in-person session:\n   - A modal will open asking you to 'Choose Location'\n   - Enter the location (e.g., 'BKH6 - 110') in the input field\n   - Click 'Accept' to confirm\n5. If it's an online session:\n   - The request is accepted immediately\n   - The session is added to your upcoming sessions\n6. The student will be notified of your acceptance\n7. The session will appear in your 'Upcoming Sessions' tab"
  },
  {
    name: "decline_request",
    description: "Decline a pending session request",
    usage: "/decline_request",
    roles: ["tutor"],
    answer: "❌ To decline a request:\n1. Navigate to Tutor → Dashboard → Pending Requests tab\n2. Find the session request you want to decline\n3. Click the red 'Decline' button\n4. A confirmation dialog may appear\n5. Confirm the decline\n6. The request will be removed from your pending requests\n7. The student will be notified that their request was declined\n8. The student can then search for another tutor or resubmit a request"
  },
  {
    name: "completed_sessions",
    description: "View your completed sessions",
    usage: "/completed_sessions",
    roles: ["tutor"],
    answer: "✅ To view completed sessions:\n1. Go to Tutor → Dashboard in the sidebar\n2. Click on the 'Completed Sessions' tab at the top\n3. You'll see a list of all your past tutoring sessions\n4. Each session shows:\n   - Subject/topic name\n   - Date and time\n   - Student name\n   - Session type (Online or In-person)\n5. Click the blue 'Summary' button to:\n   - Record a session summary\n   - Add student progress notes\n   - Document what was covered\n6. Completed sessions help you track your teaching history\n7. You can also view old sessions in Tutor → Old Sessions"
  },
  {
    name: "session_summary",
    description: "Record summary for a completed session",
    usage: "/session_summary",
    roles: ["tutor"],
    answer: "📝 To record a session summary:\n1. Navigate to Tutor → Dashboard → Completed Sessions tab\n2. Find the session you want to summarize\n3. Click the blue 'Summary' button\n4. A summary modal will open with two sections:\n5. Section 1 - Student Progress Tracking:\n   - View existing progress notes for the student\n   - Click 'Add New Progress Note' to add notes about student understanding\n6. Section 2 - Session Summary:\n   - Enter a description of what was covered in the session\n   - Include topics discussed, exercises completed, etc.\n7. Fill in all relevant information\n8. Click 'Save' to save the summary\n9. Click 'Cancel' to discard changes\n10. The summary will be stored for future reference"
  },
  {
    name: "share_materials",
    description: "Share materials with students for a session",
    usage: "/share_materials",
    roles: ["tutor"],
    answer: "📚 To share materials:\n1. Go to Tutor → Dashboard → Upcoming Sessions tab\n2. Find the session you want to share materials for\n3. Click the blue 'Detail' button\n4. In the detail modal, you'll see 'Share new materials in this Session' section\n5. To add materials:\n   - Use the search box to 'Search HCMUT Library' for books\n   - Or manually add materials by entering URLs/titles\n6. Click the search icon to find library materials\n7. Selected materials will appear in 'Shared materials for students' section\n8. Each material shows:\n   - Title and author\n   - A 'Remove' button to delete it\n9. Materials you share will be visible to students in their session details\n10. Students can download these materials before or during the session"
  },
  {
    name: "search_library",
    description: "Search library for materials to share",
    usage: "/search_library",
    roles: ["tutor"],
    answer: "🔍 To search library for materials:\n1. Navigate to Tutor → Dashboard → Upcoming Sessions\n2. Click 'Detail' on a session\n3. In the detail modal, find the 'Share new materials' section\n4. Type your search query in the 'Search HCMUT Library' input box\n5. Click the search icon (magnifying glass) button\n6. Results from the library will appear\n7. You can also go directly to Library → Books in the sidebar\n8. Use the search bar at the top of the library page\n9. Search by book title, author, or keywords\n10. Click on a book to view details\n11. Use the 'Share' or 'Download' options to add it to your session materials"
  },
  {
    name: "join_meeting",
    description: "Join an online session meeting",
    usage: "/join_meeting",
    roles: ["tutor"],
    answer: "💻 To join an online meeting:\n1. Go to Tutor → Dashboard → Upcoming Sessions tab\n2. Find the online session you want to join\n3. Look for sessions marked as 'Online Session'\n4. When it's time for the session, click the green 'Join Meeting' button\n5. This will open Google Meet (or your configured meeting platform) in a new tab\n6. Make sure your microphone and camera are set up\n7. The meeting link is automatically generated and will connect you to the student\n8. Note: The 'Join Meeting' button only appears for online sessions, not in-person ones\n9. Both you and the student need to click join to start the session"
  },
  {
    name: "student_progress",
    description: "View or add progress notes for a student",
    usage: "/student_progress",
    roles: ["tutor"],
    answer: "📊 To track student progress:\n1. Navigate to Tutor → Dashboard → Completed Sessions tab\n2. Find the session for the student you want to track\n3. Click the blue 'Summary' button\n4. In the summary modal, look for 'Student Progress Tracking' section\n5. To add a new progress note:\n   - Click 'Add New Progress Note' button\n   - Enter notes about the student's understanding\n   - Document what concepts they've mastered or need work on\n6. Existing progress notes will be displayed if any\n7. Each note typically shows:\n   - Student name and ID\n   - Date of the note\n   - Progress description\n8. Progress notes help you track student development over time\n9. Click 'Save' to store your progress notes"
  },
  {
    name: "old_sessions",
    description: "View your old/past sessions",
    usage: "/old_sessions",
    roles: ["tutor"],
    answer: "📚 To view old sessions:\n1. Navigate to Tutor → Old Sessions in the sidebar\n2. You'll see a list of all your past tutoring sessions\n3. Each session entry shows:\n   - Subject/topic name\n   - Date and time when it occurred\n   - Student name\n   - Session mode (Online or In-person)\n4. Sessions are typically sorted by date (most recent first)\n5. You can review past sessions to:\n   - See your teaching history\n   - Reference previous topics covered\n   - Check which students you've worked with\n6. Use this page to track your tutoring history and patterns over time\n7. You may be able to view summaries and progress notes from these sessions"
  },
  {
    name: "my_profile",
    description: "View your tutor profile",
    usage: "/my_profile",
    roles: ["tutor"],
    answer: "👤 To view your profile:\n1. Navigate to Tutor → Profile in the sidebar\n2. Your tutor profile page will display your information\n3. The profile typically includes:\n   - Full name and contact information\n   - Academic credentials (degree, title)\n   - Faculty and department\n   - Specialization and expertise areas\n   - Research interests\n   - Courses you teach\n   - Your tutoring schedule availability\n4. Students can view this profile when searching for tutors\n5. You may be able to edit certain fields to keep your profile up to date\n6. Ensure your profile accurately represents your expertise to help students find you"
  },

  // ========== LIBRARY COMMANDS (All Roles) ==========
  {
    name: "library",
    description: "Browse library books and materials",
    usage: "/library",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "📚 To browse the library:\n1. Navigate to Library → Books in the sidebar (available to all roles)\n2. You'll see the library homepage with a search bar at the top\n3. Browse the list of available books below\n4. Each book card shows:\n   - Book title\n   - Author name\n   - Brief description\n   - A 'View' button\n5. Click on any book card or the 'View' button to see details\n6. Use the search bar to find specific books by title, author, or keywords\n7. The library contains educational materials, textbooks, and reference books\n8. All books are available for download and sharing"
  },
  {
    name: "search_books",
    description: "Search for books in the library",
    usage: "/search_books",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "🔍 To search for books:\n1. Go to Library → Books in the sidebar\n2. Use the search bar at the top of the page\n3. Type your search query (book title, author name, or keywords)\n4. The search is performed in real-time as you type\n5. Results will filter automatically to show matching books\n6. You can search by:\n   - Book title (e.g., 'Data Structures')\n   - Author name (e.g., 'Robert Sedgewick')\n   - Keywords from the description\n7. Matching books will appear in the list below\n8. If no results are found, try different keywords or check spelling\n9. Click on any result to view book details"
  },
  {
    name: "book_details",
    description: "View details of a specific book",
    usage: "/book_details",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "📖 To view book details:\n1. Navigate to Library → Books in the sidebar\n2. Find the book you want to view (use search if needed)\n3. Click on the book card or the 'View' button\n4. A detail modal will open showing:\n   - Full book title\n   - Author name\n   - Complete description\n5. In the modal, you'll see two action buttons:\n   - 'Share' button (green): Get a shareable link\n   - 'Download' button (blue): Download the book file\n6. Click 'Share' to copy a link you can share with others\n7. Click 'Download' to download the book PDF/file to your device\n8. Close the modal by clicking the X button or clicking outside"
  },
  {
    name: "download_book",
    description: "Download a book from the library",
    usage: "/download_book",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "💾 To download a book:\n1. Go to Library → Books in the sidebar\n2. Find the book you want to download\n3. Click on the book card to open the detail modal\n4. In the book detail modal, click the blue 'Download' button\n5. The book file (typically PDF) will start downloading to your device\n6. The download location depends on your browser settings\n7. Once downloaded, you can:\n   - Open the file to read it\n   - Share it with students (if you're a tutor)\n   - Save it for offline reading\n8. Note: Make sure you have sufficient storage space on your device\n9. The download button is available for all books in the library"
  },
  {
    name: "share_book",
    description: "Get shareable link for a book",
    usage: "/share_book",
    roles: ["admin", "coordinator", "student", "tutor"],
    answer: "🔗 To share a book:\n1. Navigate to Library → Books in the sidebar\n2. Find the book you want to share\n3. Click on the book card to open the detail modal\n4. In the book detail modal, click the green 'Share' button\n5. The shareable link will be copied to your clipboard\n6. You'll see a 'Copied!' confirmation message\n7. The link can be:\n   - Pasted in messages to students\n   - Shared via email\n   - Added to session materials\n   - Posted in course announcements\n8. Anyone with the link can access the book details and download it\n9. This is especially useful for tutors sharing materials with students"
  }
];