import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, type: null }); // type: 'success' | 'error' | null

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, type: null });

    // Simulate sending process (simple delay)
    setTimeout(() => {
      try {
        // 1. Retrieve existing messages from localStorage (if any)
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        
        // 2. Create new message object with timestamp
        const newMessage = {
          ...formData,
          id: Date.now(), // Simple unique ID
          timestamp: new Date().toLocaleString()
        };
        
        const updatedMessages = [...existingMessages, newMessage];

        // 3. Save the updated list back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));

        // 4. Update status to success and reset form
        setStatus({ loading: false, type: 'success' });
        setFormData({ name: '', email: '', message: '' });
        
        console.log('Message saved to localStorage:', newMessage); // For debugging

      } catch (error) {
        console.error("Error saving to localStorage:", error);
        setStatus({ loading: false, type: 'error' });
      }
    }, 1000); // 1 second delay
  };

  const contacts = [
    { icon: Mail, label: 'Email', val: 'maramahmed1818@gmail.com', href: 'mailto:maramahmed1818@gmail.com' },
    { icon: Phone, label: 'Phone', val: '+20 1551131442', href: 'tel:+201551131442' },
    { icon: Linkedin, label: 'LinkedIn', val: 'Maram Ahmed', href: 'https://www.linkedin.com/in/maramahmed10', target: '_blank' },
    { icon: Github, label: 'GitHub', val: 'MaramAhmed18', href: 'https://github.com/MaramAhmed18', target: '_blank' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">Get in Touch</h3>
          <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-indigo-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side: Contact Info */}
          <div className="p-10 bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's discuss your project</h3>
              <p className="text-indigo-200 mb-8">I'm always open to discussing product design work or partnership opportunities.</p>
              <div className="space-y-6">
                {contacts.map((c, i) => (
                  <a key={i} href={c.href} target={c.target} rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors"><c.icon size={20} /></div>
                    <div><p className="text-sm text-indigo-300">{c.label}</p><p className="font-medium">{c.val}</p></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
                  <input 
                    type={field === 'email' ? 'email' : 'text'} 
                    name={field} 
                    value={formData[field]} 
                    onChange={handleChange} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                    placeholder={`Your ${field === 'email' ? 'Email' : 'Name'}`} 
                    required 
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="How can I help you?" required></textarea>
              </div>

              {status.type === 'success' && <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg text-sm"><CheckCircle size={18} /> Message saved locally!</div>}
              {status.type === 'error' && <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm"><AlertCircle size={18} /> Error saving message.</div>}

              <button disabled={status.loading} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition-all disabled:opacity-70 flex justify-center items-center gap-2">
                {status.loading ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
