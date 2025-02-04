# **Royal Fitness Website**

**Royal Fitness** is a fun and easy-to-use website for anyone wanting to get fit and lead a healthier lifestyle. On this site, you can find all kinds of fitness services like gym plans, workout routines, and personal training. Whether you’re just starting out or already into fitness, you can sign up, check out different services, and even book free classes to kick off your fitness journey!

## **Design Process**
When creating **Royal Fitness**, the goal was to make a simple and interactive website that’s perfect for anyone excited about getting fit. The design is all about being easy to use and making it simple for users to find what they need—whether it’s choosing a gym plan or learning about different workouts. It's designed to give everyone a smooth and hassle-free way to explore fitness services online!

## **User Stories**
- As a **new user**, I want to explore various gym plans so that I can choose the one that fits my fitness needs.
- As a **returning user**, I want to easily access my previous bookings and services to continue my progress.
- As a **visitor**, I want to book a free class without creating an account so that I can try the services before committing.

## **Features**

### **Existing Features**
- **Home Page** - Displays an introduction to the fitness service with a call-to-action ("Join Us").
- **Navigation Bar** - Allows users to navigate between different sections (Home, Services, About Us, Pricing, Review).
- **Authentication System** - Users can:
  - **Sign Up** with a username, email, and password.
  - **Sign In** using their username and password.
- **Pricing Plans** - Users can view different membership plans (Basic, Pro, Premium).
- **Services Section** - Lists the available fitness services like strength training, weightlifting, and running.
- **Reviews** - Users can leave feedback and read experiences from others.

### **Features Left to Implement**
- **Personalized Fitness Plan Generator** - A tool to generate custom workout plans for users based on their preferences and goals.
- **Member Dashboard** - A private area for users to track progress, upcoming classes, and personalized recommendations.

## **Technologies Used**
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)** - Used for the basic structure and content of the website.
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Utilized for styling the layout, ensuring responsiveness, and creating a visually appealing design.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Used to add interactivity, such as form validation and dynamic content updates.
- **[RestDB](https://restdb.io/)** - NoSQL cloud database for storing and managing data via REST APIs.
- **[Lottie](https://lottiefiles.com/)** - For adding lightweight animations.

## **Testing**

### **Authentication System**
The authentication system allows users to **sign up** and **log in** securely.

### **Sign-Up Process**
Users can create an account by providing:
- **Username**
- **Email**
- **Password**

Steps to test:
1. Go to the "Authentication" page.
2. Try to sign up with an empty form and verify that the "Please fill in this field" message appears.
3. Try to sign up with an invalid email address and verify that the "Please include an @ in the email address" message appears.
4. Try to sign up with all inputs valid and verify that a success message appears at the bottom of the page.

### **Sign-In Process**
Users can log in using:
- **Username**
- **Password**

Steps to test:
1. Proceed to log in using the username and password that you used to sign up.
2. Try to log in with an empty username or password and verify that the "Please fill in this field" message appears.
3. Try to log in with all inputs valid and verify that a success message appears at the bottom of the page.

## **Validation & Security Measures**
- **Form Validation:** Ensures user inputs are correctly formatted before submission.
- **Authentication:** Secure login system to protect user accounts.
- **Data Protection:** Uses HTTPS and encrypted database storage for sensitive data.
- **Access Control:** Restricts unauthorized access to protected content.
- **Input Sanitization:** Prevents SQL injection and XSS attacks.

## **Future Enhancements**
- Implementing OAuth (Google/Facebook login).
- Adding password reset functionality.

## **Cross-Browser Testing**
- **Chrome**: Fully functional, no layout issues.
- **Firefox**: No issues with layout or performance.
- **Safari**: Slight margin issue on the mobile view, pending fix.

## **Responsive Testing**
- **Desktop**: All content appears as intended with a layout that adapts to screen size.
- **Mobile**: The layout adjusts to fit small screens, though the mobile menu requires slight tweaking for optimal usability.

## **Credits**

### **Media**
Image Credits:
- [Adobe Stock](https://stock.adobe.com)
- [Facebook](https://www.facebook.com/photo/?fbid=1119976043464377&set=ecnf.100063559751607&locale=az_AZ)
- [iStock](https://www.istockphoto.com/photo/portrait-of-chinese-personal-trainer-in-gym-gm1018043708-273704619)
- [Evo Fitness](https://evofitness.ch/gaining-weight-while-exercising/)
- [Performance Lab](https://www.performancelab.com/blogs/fitness/training-for-muscle-mass)
- [Thimble](https://www.thimble.com/blog/personal-trainer-salary-guide)

### **Acknowledgements**
- I received inspiration for this project from fitness websites like [Bodybuilding.com](https://shop.bodybuilding.com/) and [Nike Training](https://www.nike.com/sg/ntc-app).
