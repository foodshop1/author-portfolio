import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, BookOpen, Users, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactReasons = [
    {
      icon: BookOpen,
      title: "Book Clubs & Reading Groups",
      description: "I love connecting with book clubs! Request discussion guides or virtual author visits."
    },
    {
      icon: Users,
      title: "Media & Interviews",
      description: "Press inquiries, podcast appearances, and interview requests are always welcome."
    },
    {
      icon: Calendar,
      title: "Speaking Events",
      description: "Available for literary festivals, library events, and writing workshops."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            I'd love to hear from you! Whether you're a reader, fellow writer, or industry 
            professional, I try to respond to every message personally.
          </p>
        </div>

        {/* Contact Reasons */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactReasons.map((reason) => (
            <Card key={reason.title} className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <reason.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-primary font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-primary font-medium">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-primary font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell me what's on your mind..."
                />
              </div>

              <Button type="submit" className="literary-button w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">hello@alexandrareed.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      I typically respond within 48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-muted-foreground">Portland, Oregon</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for local events and book signings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Professional Inquiries</h3>
                    <p className="text-muted-foreground">Via my literary agent</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Please email for agent contact information
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/30 to-accent/10">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                Response Time
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I read every email personally and do my best to respond thoughtfully. 
                During book launch periods or when I'm deep in a writing project, 
                responses may take a bit longer.
              </p>
              <p className="text-sm text-muted-foreground">
                For urgent media requests, please mention "URGENT" in your subject line.
              </p>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                For Book Clubs
              </h3>
              <p className="leading-relaxed opacity-90 mb-4">
                I'm passionate about connecting with readers and often join book club 
                discussions via video call. I also provide custom discussion guides 
                for all my published works.
              </p>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Book Club Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;