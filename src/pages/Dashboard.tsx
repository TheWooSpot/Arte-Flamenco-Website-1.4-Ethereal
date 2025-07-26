import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('arteFlamencoUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to membership page if not logged in
      navigate('/membership');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('arteFlamencoUser');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="pt-20 min-h-screen bg-dark flex items-center justify-center">
        <div className="text-light">Loading...</div>
      </div>
    );
  }

  const upcomingWorkshops = [
    {
      title: "Contemporary Flow",
      date: "March 15, 2024",
      time: "7:00 PM",
      instructor: "Elena Vasquez"
    },
    {
      title: "Flamenco for Emotional Empowerment",
      date: "March 18, 2024",
      time: "6:30 PM",
      instructor: "Isabella Rodriguez"
    }
  ];

  const recentActivity = [
    {
      action: "Booked workshop",
      workshop: "Contemporary Flow",
      date: "March 10, 2024"
    },
    {
      action: "Completed workshop",
      workshop: "Latin Fusion",
      date: "March 8, 2024"
    },
    {
      action: "Joined Arte Flamenco",
      workshop: "",
      date: "March 1, 2024"
    }
  ];

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
            className="mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="section-title gold-gradient">Welcome back, {user.name}!</h1>
                <p className="section-subtitle">YOUR DANCE JOURNEY CONTINUES</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-secondary text-light border border-light/20 rounded hover:bg-light/10 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary rounded-lg p-6"
            >
              <h2 className="text-accent font-display text-2xl mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Link
                  to="/workshops"
                  className="block w-full btn-primary text-center py-3"
                >
                  Browse Workshops
                </Link>
                <button className="block w-full px-6 py-3 bg-dark border border-accent text-accent rounded-full hover:bg-accent hover:text-dark transition-all duration-300">
                  View Schedule
                </button>
                <button className="block w-full px-6 py-3 bg-dark border border-accent text-accent rounded-full hover:bg-accent hover:text-dark transition-all duration-300">
                  Update Profile
                </button>
              </div>
            </motion.div>

            {/* Upcoming Workshops */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-secondary rounded-lg p-6"
            >
              <h2 className="text-accent font-display text-2xl mb-6">Upcoming Workshops</h2>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <div key={index} className="bg-dark rounded-lg p-4">
                    <h3 className="text-light font-medium mb-2">{workshop.title}</h3>
                    <p className="text-light/60 text-sm mb-1">{workshop.date} at {workshop.time}</p>
                    <p className="text-accent text-sm">with {workshop.instructor}</p>
                  </div>
                ))}
                {upcomingWorkshops.length === 0 && (
                  <p className="text-light/60 text-center py-8">
                    No upcoming workshops. <Link to="/workshops" className="text-accent hover:underline">Browse available workshops</Link>
                  </p>
                )}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-secondary rounded-lg p-6"
            >
              <h2 className="text-accent font-display text-2xl mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-light text-sm">
                        {activity.action} {activity.workshop && <span className="text-accent">{activity.workshop}</span>}
                      </p>
                      <p className="text-light/60 text-xs">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
          >
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-display text-accent mb-2">12</div>
              <div className="text-light/70 text-sm">Workshops Completed</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-display text-accent mb-2">3</div>
              <div className="text-light/70 text-sm">Upcoming Sessions</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-display text-accent mb-2">45</div>
              <div className="text-light/70 text-sm">Hours Danced</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-display text-accent mb-2">Gold</div>
              <div className="text-light/70 text-sm">Member Status</div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dashboard;
