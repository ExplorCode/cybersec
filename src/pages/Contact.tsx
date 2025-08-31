import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Widget from '../components/UI/Widget';
import { MessageSquare, Send, Shield, Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEncrypting(true);
    
    // Simulate encryption process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsEncrypting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // In a real app, you'd send the data to your backend
    alert('Message encrypted and transmitted securely!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-mono text-emerald-400 mb-2">
          SECURE COMMUNICATION
        </h1>
        <p className="text-gray-400 font-mono text-lg">
          [ENCRYPTED] Establish secure channel for communication
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Widget title="Secure Message Terminal" icon={MessageSquare} delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-emerald-400 mb-2">
                [USER_NAME]
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-emerald-500/30 rounded font-mono text-sm text-green-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                placeholder="Enter your identification..."
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-emerald-400 mb-2">
                [EMAIL_ADDRESS]
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-emerald-500/30 rounded font-mono text-sm text-green-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                placeholder="secure.channel@domain.com"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-emerald-400 mb-2">
                [MESSAGE_SUBJECT]
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-emerald-500/30 rounded font-mono text-sm text-green-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                placeholder="Subject classification..."
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-emerald-400 mb-2">
                [ENCRYPTED_MESSAGE]
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-black/50 border border-emerald-500/30 rounded font-mono text-sm text-green-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"
                placeholder="Enter your secure message here..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isEncrypting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded font-mono text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEncrypting ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                  ENCRYPTING...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  TRANSMIT MESSAGE
                </>
              )}
            </motion.button>
          </form>
        </Widget>

        <div className="space-y-6">
          <Widget title="Contact Protocols" icon={Shield} delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded border border-cyan-500/30">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-mono text-sm text-cyan-400">PRIMARY CHANNEL</div>
                  <div className="font-mono text-xs text-gray-400">contact@cybersec-portfolio.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded border border-purple-500/30">
                <Linkedin className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-mono text-sm text-purple-400">PROFESSIONAL NETWORK</div>
                  <div className="font-mono text-xs text-gray-400">linkedin.com/in/cybersec-specialist</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded border border-emerald-500/30">
                <Github className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="font-mono text-sm text-emerald-400">SOURCE CODE</div>
                  <div className="font-mono text-xs text-gray-400">github.com/cybersec-specialist</div>
                </div>
              </div>
            </div>
          </Widget>

          <Widget title="Security Notice" icon={Shield} delay={0.3}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <div className="font-mono text-sm text-emerald-400 mb-1">ENCRYPTION STATUS</div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    All communications are secured with end-to-end encryption using industry-standard protocols.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <div className="font-mono text-sm text-cyan-400 mb-1">RESPONSE TIME</div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    Typical response time: 24-48 hours for non-critical communications.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <div className="font-mono text-sm text-purple-400 mb-1">AVAILABILITY</div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    Available for cybersecurity consulting, research collaboration, and employment opportunities.
                  </div>
                </div>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </div>
  );
};

export default Contact;