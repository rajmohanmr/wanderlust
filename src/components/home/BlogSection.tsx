import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Discover off-the-beaten-path destinations that will take your breath away...",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    author: "Sarah Chen",
    date: "Dec 2, 2025",
    readTime: "5 min read",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Budget Travel in Europe",
    excerpt: "How to experience the best of Europe without breaking the bank...",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    author: "Marco Rossi",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    category: "Budget Travel",
  },
  {
    id: 3,
    title: "Sustainable Tourism: How to Travel Responsibly",
    excerpt: "Learn how to minimize your environmental impact while exploring...",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    author: "Emma Wilson",
    date: "Nov 20, 2025",
    readTime: "6 min read",
    category: "Eco Travel",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-accent font-semibold mb-2">FROM OUR BLOG</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Travel Stories & Tips
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-card rounded-2xl overflow-hidden shadow-travel-md hover-lift animate-fade-up stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary group/btn">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
