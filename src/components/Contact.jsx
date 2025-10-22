import React, { useState, useCallback, useMemo } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';

// Define theme colors using standard Tailwind classes for portability
const THEME = {
    primary: 'indigo-600',
    secondary: 'pink-500',
    darkCard: 'gray-800',
    darkBg: 'gray-900',
    lightCard: 'gray-50',
};

// Custom Success Message Component (replaces alert())
const SuccessMessage = ({ onClose }) => (
    <div 
        role="alert"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">
                Thank you for reaching out. The message has been sent to the owner's email.
            </p>
            <button
                onClick={onClose}
                className={`mt-6 w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold`}
            >
                Close
            </button>
        </div>
    </div>
);

// Form Validation and State Handler with Formspree integration
const useContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New state for loading
    
    // IMPORTANT: Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID
    // Sign up at Formspree.io to get your unique ID linked to johnrohithmidhun@gmail.com
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgwjgrq";

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change if it exists
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    }, [errors]);

    const validate = useCallback(() => {
        let newErrors = {};
        let isValid = true;
        
        // Basic required check
        Object.keys(formData).forEach(key => {
            if (!formData[key].trim()) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                isValid = false;
            }
        });

        // Email format check
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }, [formData]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true); // Start loading
            
            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Formspree automatically maps these fields to the email body
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('Form submitted successfully via Formspree.');
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
                } else {
                    // Log error for debugging, no alert shown to the user
                    console.error('Form submission failed (Formspree error):', response.status, await response.json());
                }
            } catch (error) {
                // Log network error for debugging
                console.error('Network error during form submission:', error);
            } finally {
                setIsLoading(false); // Stop loading regardless of success or failure
            }
        }
    }, [formData, validate]);

    const handleClose = useCallback(() => {
        setIsSubmitted(false);
    }, []);

    return { formData, errors, isSubmitted, isLoading, handleChange, handleSubmit, handleClose };
};


// Custom Input Field Component
const InputField = React.memo(({ label, name, type = 'text', value, onChange, error }) => (
    <div className="relative">
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            className={`w-full p-3 pt-6 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-pink-500 outline-none transition-all duration-300 peer ${
                error ? 'border-red-500' : 'border-transparent'
            } border-2 text-gray-900 dark:text-white`}
        />
        <label
            htmlFor={name}
            className="absolute left-3 top-1 text-xs text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs transition-all duration-200 pointer-events-none"
        >
            {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
));


// Custom Textarea Component
const TextareaField = React.memo(({ label, name, value, onChange, error }) => (
    <div className="relative">
        <textarea
            id={name}
            name={name}
            rows="4"
            value={value}
            onChange={onChange}
            placeholder=" "
            className={`w-full p-3 pt-6 bg-gray-100 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-pink-500 outline-none transition-all duration-300 peer ${
                error ? 'border-red-500' : 'border-transparent'
            } border-2 text-gray-900 dark:text-white`}
        ></textarea>
        <label
            htmlFor={name}
            className="absolute left-3 top-1 text-xs text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs transition-all duration-200 pointer-events-none"
        >
            {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
));


// Main App Component
const App = () => {
    // Destructure isLoading
    const { formData, errors, isSubmitted, isLoading, handleChange, handleSubmit, handleClose } = useContactForm();

    const contactInfo = useMemo(() => [
        { icon: Mail, label: 'Email', value: 'johnrohithmidhun@gmail.com', href: 'mailto:johnrohithmidhun@gmail.com' },
        { icon: Phone, label: 'Phone', value: '(+91)7010888645', href: 'tel:+917010888645' },
        { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: '#' },
    ], []);

    // Helper function to safely apply dynamic classes
    const getThemeClass = (prop) => {
        // Simple switch to apply colors based on THEME object keys safely
        if (prop === 'primary') return 'indigo-600';
        if (prop === 'secondary') return 'pink-500';
        if (prop === 'darkCard') return 'gray-800';
        if (prop === 'darkBg') return 'gray-900';
        if (prop === 'lightCard') return 'gray-50';
        return '';
    };

    return (
        <section 
            id="contact" 
            className={`py-20 min-h-screen bg-white dark:bg-${getThemeClass('darkBg')} transition-colors duration-500 font-sans`}
        >
            {/* Tailwind utility script inclusion is necessary for the single file */}
            <script src="https://cdn.tailwindcss.com"></script>
            <style dangerouslySetInnerHTML={{
                __html: `
                    /* Setting up a custom font */
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                    .font-sans {
                        font-family: 'Inter', sans-serif;
                    }

                    /* Configuring custom colors for the theme */
                    :root {
                        --color-primary: #4f46e5; /* indigo-600 */
                        --color-secondary: #ec4899; /* pink-500 */
                    }
                    .text-primary { color: var(--color-primary); }
                    .dark .text-secondary { color: var(--color-secondary); }
                    .bg-primary { background-color: var(--color-primary); }
                    .hover\\:bg-indigo-700:hover { background-color: #4338ca; }
                    .focus\\:ring-primary:focus { --tw-ring-color: var(--color-primary); }
                    .dark .focus\\:ring-secondary:focus { --tw-ring-color: var(--color-secondary); }
                    .dark .bg-dark-bg { background-color: #111827; } /* gray-900 */
                `
            }} />

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Heading */}
                <h2 
                    className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white transition-opacity duration-500"
                >
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6 lg:col-span-1">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:translate-x-1`}
                            >
                                <item.icon className={`w-6 h-6 text-indigo-600 dark:text-pink-500 flex-shrink-0`} />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.label}</p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className={`lg:col-span-2 space-y-6 p-8 bg-gray-50 dark:bg-dark-bg rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-transform duration-600`}
                    >
                        <h3 className={`text-2xl font-bold mb-4 text-indigo-600 dark:text-pink-500`}>Send a Message</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField 
                                label="Your Name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange} 
                                error={errors.name} 
                            />
                            <InputField 
                                label="Your Email" 
                                name="email" 
                                type="email" 
                                value={formData.email}
                                onChange={handleChange} 
                                error={errors.email} 
                            />
                        </div>

                        <InputField 
                            label="Subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange} 
                            error={errors.subject} 
                        />

                        <TextareaField
                            label="Your Message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange} 
                            error={errors.message} 
                        />

                        <button
                            type="submit"
                            disabled={isLoading} // Disable button while loading
                            className={`w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {/* Show loading spinner or send icon */}
                            {isLoading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            ) : (
                                <Send className="w-5 h-5 mr-2" />
                            )}
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            
            {/* Success Modal */}
            {isSubmitted && <SuccessMessage onClose={handleClose} />}
        </section>
    );
};

export default App;
