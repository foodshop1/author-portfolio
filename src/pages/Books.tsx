import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Calendar, BookOpen } from 'lucide-react';
import bookEchoes from '@/assets/book-echoes.jpg';
import bookGarden from '@/assets/book-garden.jpg';
import bookMidnight from '@/assets/book-midnight.jpg';

const Books = () => {
  const books = [
    {
      title: "Wash Your Hands Juno!",
      image: bookEchoes,
      description: "In this thought-provoking novel, we follow Maya as she discovers her ability to glimpse potential futures. But with every vision comes a choice, and every choice reshapes not just her destiny, but the lives of everyone she loves. A masterful exploration of free will, consequence, and the power of human connection.",
      genre: "Contemporary Fiction",
      pages: 342,
      published: "2024",
      status: "Available Now",
      rating: 4.8,
      awards: ["National Book Award Finalist", "Goodreads Choice Award Winner"],
      excerpt: "The future isn't written in stone—it's written in the choices we make today. Maya learned this the hard way when the visions began..."
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
    hidden: { opacity: 0, y: 50 },
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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6"
            variants={itemVariants}
          >
            My Books
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Each story is a journey into the human experience, exploring themes of love, loss, 
            identity, and the connections that bind us together. Discover narratives that will 
            stay with you long after you turn the final page.
          </motion.p>
        </motion.div>

        {/* Books Grid */}
        <motion.div 
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              variants={bookVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="book-card overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                  {/* Book Cover */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-[3/4] max-w-sm mx-auto">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg shadow-[var(--shadow-book)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          {book.status}
                        </Badge>
                        <Badge variant="outline">
                          {book.genre}
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        {book.title}
                      </h2>

                      {/* Book Meta */}
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{book.published}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen size={16} />
                          <span>{book.pages} pages</span>
                        </div>
                        {book.rating && (
                          <div className="flex items-center gap-1">
                            <Star size={16} className="fill-accent text-accent" />
                            <span>{book.rating}/5</span>
                          </div>
                        )}
                      </div>

                      {/* Awards */}
                      {book.awards.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary mb-2">Awards & Recognition</h4>
                          <div className="flex flex-wrap gap-2">
                            {book.awards.map((award) => (
                              <Badge key={award} variant="outline" className="text-xs">
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>

                    {/* Excerpt */}
                    <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-accent">
                      <h4 className="font-semibold text-primary mb-2">Excerpt</h4>
                      <p className="text-muted-foreground italic">
                        "{book.excerpt}"
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {book.status === "Available Now" || book.status === "Bestseller" ? (
                        <>
                          <Button className="literary-button">
                            <ExternalLink size={16} className="mr-2" />
                            Buy Now
                          </Button>
                          <Button variant="outline">
                            Read Sample
                          </Button>
                        </>
                      ) : (
                        <Button className="accent-button">
                          Pre-order Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20 py-16 bg-gradient-to-r from-secondary/30 to-accent/10 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-primary mb-4">
            Looking for Your Next Great Read?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have discovered the power of storytelling. 
            Subscribe to my newsletter for updates on new releases and exclusive content.
          </p>
          <Button className="accent-button text-lg px-8 py-4">
            Stay Updated
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Books;