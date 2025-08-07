import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-writing.jpg';
import authorPortrait from '@/assets/author-portrait.jpg';
import bookEchoes from '@/assets/book-echoes.jpg';
import bookGarden from '@/assets/book-garden.jpg';
import bookMidnight from '@/assets/book-midnight.jpg';

const Landing = () => {
  const featuredBooks = [
    {
      title: "Wash Your Hands Juno!",
      image: bookEchoes,
      description: "A thought-provoking exploration of time, memory, and the choices that define us.",
      status: "Available Now"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const bookVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            variants={itemVariants}
          >
            Karen Quan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light"
            variants={itemVariants}
          >
            Award-winning author of contemporary fiction and literary novels
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/books">
              <Button className="accent-button text-lg px-8 py-4">
                Explore My Books
              </Button>
            </Link>
            <Link to="/story">
              <Button variant="outline" className="text-black">
                My Story
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover stories that explore the depths of human experience with 
              compelling characters and unforgettable narratives.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.title}
                variants={bookVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`${index === 1 ? 'order-first md:order-none' : ''}`}
              >
                <Card className="book-card overflow-hidden group max-w-sm">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        {book.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/books">
              <Button className="literary-button text-lg px-8 py-4">
                View All Books
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Author Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                About Alexandra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience crafting stories that resonate with readers 
                worldwide, Alexandra Reed has established herself as one of today's most 
                compelling contemporary fiction authors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Her work explores themes of identity, belonging, and the intricate relationships 
                that shape our lives. Each novel is a journey into the human heart, 
                revealing truths that linger long after the final page.
              </p>
              <Link to="/story">
                <Button className="literary-button">
                  Read My Full Story
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={authorPortrait} 
                alt="Alexandra Reed" 
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be the first to know about new releases, book events, and behind-the-scenes insights 
            into my writing process.
          </p>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;