# Serenity Spa & Wellness Website

A responsive and user-friendly website for Serenity Spa & Wellness showcasing services, pricing, booking options, and customer testimonials.

## Features

- **Home Page**: Hero section with tagline and 'Book Now' CTA, service gallery preview, testimonials slider, and "why choose us" section
- **Services Page**: Categorized services with descriptions and pricing
- **Booking Page**: Online booking form with email notifications
- **About Us Page**: Spa history and team member information
- **Contact Page**: Address, phone, email, embedded Google Map, and contact form
- **Gallery & Testimonials Page**: Client reviews and photos of services and spa environment

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Form Handling**: Formik with Yup validation
- **Email Integration**: EmailJS (configured but requires your credentials)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dhnraihan/serenity-spa.git
   cd serenity-spa
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Configuring EmailJS (for Production)

To enable the contact and booking forms to send emails:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Uncomment and update the EmailJS configuration in `src/pages/BookingPage.tsx` and `src/pages/ContactPage.tsx` with your credentials:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     values,
     'YOUR_USER_ID'
   );
   ```

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with optimized production files that can be deployed to any static hosting service.

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.js`
- **Content**: Update text, images, and service information in the respective component files
- **Google Map**: Replace the iframe source in `ContactPage.tsx` with your actual Google Maps embed code

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
# Serenity-Spa
