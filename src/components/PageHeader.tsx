import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div 
      className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 20, 0.7), rgba(10, 10, 20, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl text-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-light opacity-80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
