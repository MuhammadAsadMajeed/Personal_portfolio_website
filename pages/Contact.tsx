import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { contactAPI, ContactFormData } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await contactAPI.submit(formData);

      if (response.success) {
        setStatus({
          type: 'success',
          message: response.message || 'Message sent successfully!'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      }
    } catch (error: any) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-black tracking-tighter uppercase">Let's Talk</h1>
          <p className="text-gray-400 text-xl">Have a project in mind? Reach out and let's create something extraordinary together.</p>
          
          <div className="space-y-6 pt-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-white"><Mail /></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email me</p>
                <p className="text-lg font-medium">muhammadasadmajeed2@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-white"><MapPin /></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Office</p>
                <p className="text-lg font-medium">Remote Worldwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-white"><Linkedin size={20} /></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">LinkedIn</p>
                <p className="text-lg font-medium">linkedin.com/in/muhammadasad</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={50}
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={1000}
              rows={4}
              placeholder="Tell me about your project..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          {/* Status Message */}
          {status.type !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl text-center font-medium ${
                status.type === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                  : status.type === 'error'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <button 
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                <span>SENDING...</span>
              </>
            ) : (
              <>
                <span>SEND MESSAGE</span>
                <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;