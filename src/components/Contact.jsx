// src/sections/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MailIcon, PhoneIcon, LocationMarkerIcon, AnnotationIcon } from '@heroicons/react/outline';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted! (In a real app, this would send an email/API call)');
  };

  const contactInfo = [
    { icon: MailIcon, label: 'Email', value: 'johnrohithmidhun@gmail.com', href: 'mailto:johnrohithmidhun@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', value: '(+91)7010888645', href: 'tel:+917010888645' },
    { icon: LocationMarkerIcon, label: 'Location', value: 'Tamil Nadu, India', href: '#' },
  ];

  const InputField = ({ label, name, type = 'text', register, error }) => (
    <div className="relative">
      <input
        type={type}
        id={name}
        {...register(name, { required: `${label} is required` })}
        placeholder=" "
        className={`w-full p-3 pt-6 bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300 peer ${
          error ? 'border-red-500' : 'border-transparent'
        } border-2`}
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-1 text-xs text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs transition-all duration-200"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-card transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <item.icon className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 space-y-6 p-8 bg-gray-50 dark:bg-dark-bg rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-secondary">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Your Name" name="name" register={register} error={errors.name} />
              <InputField label="Your Email" name="email" type="email" register={register} error={errors.email} />
            </div>

            <InputField label="Subject" name="subject" register={register} error={errors.subject} />

            <div className="relative">
              <textarea
                id="message"
                rows="4"
                {...register('message', { required: 'Message is required' })}
                placeholder=" "
                className={`w-full p-3 pt-6 bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary outline-none transition-all duration-300 peer ${
                  errors.message ? 'border-red-500' : 'border-transparent'
                } border-2`}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-1 text-xs text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs transition-all duration-200"
              >
                Your Message
              </label>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;