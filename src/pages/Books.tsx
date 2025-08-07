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
      title: "Echoes of Tomorrow",
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
    {
      title: "The Garden of Memories",
      image: bookGarden,
      description: "When Elena inherits her grandmother's garden, she discovers more than overgrown roses and forgotten pathways. Hidden among the blooms are letters that reveal family secrets spanning three generations. A heartwarming tale of family, loss, healing, and the memories that connect us across time.",
      genre: "Literary Fiction",
      pages: 298,
      published: "2023",
      status: "Bestseller",
      rating: 4.9,
      awards: ["New York Times Bestseller", "Book Club Favorite"],
      excerpt: "Every flower in Grandmother's garden had a story, Elena discovered. But some stories were meant to stay buried..."
    },
    {
      title: "Midnight Whispers",
      image: bookMidnight,
      description: "Detective Sarah Chen thought she'd seen everything in her twenty-year career. But when a series of seemingly unconnected disappearances reveals a pattern only she can see, she must confront her own past to catch a killer who knows her better than she knows herself.",
      genre: "Mystery Thriller",
      pages: 387,
      published: "Coming Spring 2025",
      status: "Coming Soon",
      rating: null,
      awards: [],
      excerpt: "The whispers started at midnight, just like they had twenty years ago. Sarah knew she should walk away, but some cases refuse to let you go..."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 animate-fade-in">
            My Books
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Each story is a journey into the human experience, exploring themes of love, loss, 
            identity, and the connections that bind us together. Discover narratives that will 
            stay with you long after you turn the final page.
          </p>
        </div>

        {/* Books Grid */}
        <div className="space-y-16">
          {books.map((book, index) => (
            <Card key={book.title} className="book-card overflow-hidden">
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-secondary/30 to-accent/10 rounded-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default Books;