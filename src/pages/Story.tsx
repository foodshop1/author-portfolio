import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Award, BookOpen, Users, Coffee } from 'lucide-react';
import authorPortrait from '@/assets/author-portrait.jpg';

const Story = () => {
  const milestones = [
    {
      year: "2010",
      title: "First Short Story Published",
      description: "My short story 'Whispers in the Wind' was published in Literary Quarterly, marking the beginning of my professional writing career."
    },
    {
      year: "2015", 
      title: "Debut Novel Released",
      description: "Published my first novel 'Fragments of Light', which became a surprise bestseller and launched my career as a novelist."
    },
    {
      year: "2018",
      title: "National Book Award Nomination",
      description: "Received my first major literary award nomination for 'The Color of Silence', a deeply personal exploration of grief and healing."
    },
    {
      year: "2021",
      title: "International Recognition",
      description: "My work was translated into 12 languages, allowing me to connect with readers around the world."
    },
    {
      year: "2023",
      title: "New York Times Bestseller",
      description: "'The Garden of Memories' reached #1 on the NYT Bestseller list and has been optioned for film adaptation."
    }
  ];

  const achievements = [
    { icon: BookOpen, label: "8 Published Novels", count: "8" },
    { icon: Award, label: "Literary Awards", count: "12" },
    { icon: Users, label: "Readers Worldwide", count: "500K+" },
    { icon: Coffee, label: "Cups of Coffee", count: "∞" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 animate-fade-in">
            My Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Every author has a story behind their stories. This is mine—a journey of words, 
            wonder, and the relentless pursuit of human truth through fiction.
          </p>
        </div>

        {/* Introduction with Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <img 
              src={authorPortrait} 
              alt="Alexandra Reed" 
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full"
            />
          </div>
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-heading font-bold text-primary">
              The Writer's Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've been writing stories since I could hold a pencil, but it took decades 
              to find my voice. Growing up in a small coastal town, I was fascinated by 
              the stories that lived in the spaces between what people said and what they meant.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work explores the intricate dance of human relationships—how we connect, 
              disconnect, and find our way back to each other. Each novel is an exploration 
              of what it means to be human in all its messy, beautiful complexity.
            </p>
          </div>
        </div>

        {/* Philosophy Quote */}
        <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-none mb-20">
          <div className="p-8 text-center">
            <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-primary mb-4">
              "Stories are how we make sense of the world. They're how we find meaning 
              in the chaos and beauty in the ordinary."
            </blockquote>
            <cite className="text-lg text-muted-foreground">— Alexandra Reed</cite>
          </div>
        </Card>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement) => (
            <Card key={achievement.label} className="text-center p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <achievement.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {achievement.count}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
            Writing Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                    {milestone.year}
                  </Badge>
                </div>
                <Card className="flex-1 p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Process */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-primary">
              Behind the Words
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My writing process is equal parts discipline and magic. I write every morning 
              from 5 AM to 9 AM, when the world is quiet and my mind is clear. These hours 
              belong to the stories and the characters who refuse to let me sleep.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of revision—that first drafts are just the beginning 
              of the conversation between writer and story. Each book goes through countless 
              iterations until it becomes what it was always meant to be.
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-secondary/30 to-accent/10">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              Current Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">Novel in Progress</h4>
                <p className="text-muted-foreground">
                  "The Architecture of Forgetting" - A story about memory, identity, 
                  and the houses that hold our secrets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Research Project</h4>
                <p className="text-muted-foreground">
                  Exploring the intersection of neuroscience and storytelling for 
                  my next literary fiction series.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Touch */}
        <Card className="p-8 text-center bg-primary text-primary-foreground">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Beyond the Books
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            When I'm not writing, you'll find me tending to my garden (much like Elena in 
            "The Garden of Memories"), practicing yoga, or getting lost in used bookstores. 
            I live with my partner and our two cats, who are excellent writing companions 
            and terrible editors.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Story;