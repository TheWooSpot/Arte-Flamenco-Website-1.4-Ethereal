import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Workshops = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const workshops = [
    {
      title: "Contemporary Flow",
      level: "All Levels",
      duration: "90 minutes",
      price: "$35",
      description: "Explore fluid movements and emotional expression through contemporary dance techniques.",
      image: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg"
    },
    {
      title: "Classical Ballet",
      level: "Beginner to Advanced",
      duration: "75 minutes",
      price: "$40",
      description: "Master the fundamentals of ballet with proper technique and graceful artistry.",
      image: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg"
    },
    {
      title: "Jazz Fusion",
      level: "Intermediate",
      duration: "60 minutes",
      price: "$30",
      description: "High-energy jazz combinations with modern influences and dynamic choreography.",
      image: "https://images.pexels.com/photos/3094212/pexels-photo-3094212.jpeg"
    },
    {
      title: "Lyrical Expression",
      level: "All Levels",
      duration: "75 minutes",
      price: "$35",
      description: "Connect movement with music and emotion in this expressive dance style.",
      image: "https://images.pexels.com/photos/3094225/pexels-photo-3094225.jpeg"
    },
    // Therapeutic & Somatic Movement (2 out of 4)
    {
      title: "Dance/Movement Therapy",
      level: "All Levels",
      duration: "90 minutes",
      price: "$45",
      description: "Healing through movement with certified dance/movement therapists for emotional wellness.",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
    },
    {
      title: "Movement for Anxiety & Stress Relief",
      level: "Beginner",
      duration: "60 minutes",
      price: "$35",
      description: "Gentle movement practices designed to reduce anxiety and promote inner calm.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    },
    // Adaptive & Healing Classes (2 out of 2)
    {
      title: "Chair-Based Dance",
      level: "All Abilities",
      duration: "45 minutes",
      price: "$25",
      description: "Accessible dance movements performed from a seated position for all mobility levels.",
      image: "https://images.pexels.com/photos/6111563/pexels-photo-6111563.jpeg"
    },
    {
      title: "Dance for Parkinson's",
      level: "Specialized",
      duration: "60 minutes",
      price: "$30",
      description: "Evidence-based dance program specifically designed for people with Parkinson's disease.",
      image: "https://images.pexels.com/photos/6111739/pexels-photo-6111739.jpeg"
    },
    // Cultural & Empowering Styles (2 out of 3)
    {
      title: "Flamenco for Emotional Empowerment",
      level: "Intermediate",
      duration: "90 minutes",
      price: "$50",
      description: "Passionate flamenco techniques that build confidence and emotional expression.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
    },
    {
      title: "Latin Fusion",
      level: "All Levels",
      duration: "75 minutes",
      price: "$40",
      description: "Energetic blend of Cumbia, Bachata, and Reggaetón for vibrant cultural expression.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
    },
    // Trending & Technique-Based Classes (4 out of 9)
    {
      title: "Salsa Social",
      level: "Beginner to Advanced",
      duration: "90 minutes",
      price: "$45",
      description: "Learn salsa in both social partner and solo formats with authentic Latin rhythms.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
    },
    {
      title: "Hip-Hop Therapy",
      level: "All Levels",
      duration: "60 minutes",
      price: "$35",
      description: "High-energy hip-hop movement for emotional release and community building.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
    },
    {
      title: "K-Pop Dance",
      level: "Teen/Young Adult",
      duration: "60 minutes",
      price: "$30",
      description: "Learn popular K-Pop choreography in a fun, energetic group setting.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
    },
    {
      title: "Ecstatic Dance",
      level: "All Levels",
      duration: "90 minutes",
      price: "$25",
      description: "Freeform, judgment-free movement for authentic self-expression and joy.",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg"
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
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref}
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title gold-gradient">Workshops</h1>
            <p className="section-subtitle">ELEVATE YOUR CRAFT</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                className="bg-secondary rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-medium">
                    {workshop.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 text-accent">{workshop.title}</h3>
                  <div className="flex justify-between items-center mb-4 text-sm text-light/60">
                    <span>{workshop.level}</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <p className="text-light/80 mb-6 leading-relaxed">{workshop.description}</p>
                  <button className="btn-primary w-full">Book Workshop</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Workshops;
