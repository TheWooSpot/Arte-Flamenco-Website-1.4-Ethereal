import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Membership = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  // Demo credentials
  const demoUsers = [
    { email: 'demo@arteflamenco.com', password: 'demo123', name: 'Demo User' },
    { email: 'maria@arteflamenco.com', password: 'maria123', name: 'Maria Garcia' },
    { email: 'carlos@arteflamenco.com', password: 'carlos123', name: 'Carlos Rodriguez' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Use requestAnimationFrame instead of setTimeout to avoid timeout issues
    requestAnimationFrame(() => {
      if (isLogin) {
        // Handle login
        const user = demoUsers.find(
          u => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          // Store user info in localStorage (demo purposes)
          localStorage.setItem('arteFlamencoUser', JSON.stringify({
            email: user.email,
            name: user.name,
            isLoggedIn: true
          }));
          
          // Redirect to dashboard
          navigate('/dashboard');
        } else {
          setError('Invalid email or password. Try demo@arteflamenco.com / demo123');
          setIsLoading(false);
        }
      } else {
        // Handle registration
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setIsLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setIsLoading(false);
          return;
        }

        // Check if email already exists
        const existingUser = demoUsers.find(u => u.email === formData.email);
        if (existingUser) {
          setError('Email already exists. Try logging in instead.');
          setIsLoading(false);
          return;
        }

        // Simulate successful registration
        localStorage.setItem('arteFlamencoUser', JSON.stringify({
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          isLoggedIn: true
        }));

        navigate('/dashboard');
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const fillDemoCredentials = () => {
    setFormData({
      ...formData,
      email: 'demo@arteflamenco.com',
      password: 'demo123'
    });
    setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-20 bg-dark min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref}
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title gold-gradient">Member Portal</h1>
            <p className="section-subtitle">ACCESS YOUR DANCE JOURNEY</p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary rounded-lg p-8"
            >
              {/* Demo Credentials Info */}
              {isLogin && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <h3 className="text-accent font-medium mb-2 text-sm">Demo Credentials</h3>
                  <div className="text-light/70 text-xs space-y-1">
                    <p><strong>Email:</strong> demo@arteflamenco.com</p>
                    <p><strong>Password:</strong> demo123</p>
                  </div>
                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="mt-2 text-accent hover:text-accent/80 text-xs underline"
                  >
                    Fill demo credentials
                  </button>
                </div>
              )}

              {/* Toggle Buttons */}
              <div className="flex mb-8 bg-dark rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setError('');
                  }}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    isLogin 
                      ? 'bg-accent text-dark' 
                      : 'text-light/70 hover:text-light'
                  }`}
                >
                  Existing Member
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setError('');
                  }}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    !isLogin 
                      ? 'bg-accent text-dark' 
                      : 'text-light/70 hover:text-light'
                  }`}
                >
                  New Member
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-light/70 mb-2 text-sm">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                          required={!isLogin}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-light/70 mb-2 text-sm">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="email" className="block text-light/70 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="phone" className="block text-light/70 mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="block text-light/70 mb-2 text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-light/70 mb-2 text-sm">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                      required={!isLogin}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full btn-primary py-4 text-center ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Signing in...' : (isLogin ? 'Sign In' : 'Create Account')}
                </button>
              </form>

              {/* Additional Links */}
              <div className="mt-6 text-center space-y-3">
                {isLogin && (
                  <Link 
                    to="/forgot-password" 
                    className="block text-accent hover:text-accent/80 text-sm transition-colors duration-300"
                  >
                    Forgot your password?
                  </Link>
                )}
                
                <div className="text-light/60 text-sm">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                    }}
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    {isLogin ? 'Sign up here' : 'Sign in here'}
                  </button>
                </div>
              </div>

              {/* Benefits Section for New Members */}
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 pt-6 border-t border-light/10"
                >
                  <h3 className="text-accent font-medium mb-4 text-center">Membership Benefits</h3>
                  <ul className="space-y-2 text-light/70 text-sm">
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      Book workshops online
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      Track your dance journey
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      Member-only discounts
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      Priority booking access
                    </li>
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Membership;
