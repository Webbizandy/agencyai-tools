import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | AgencyAI.tools</title>
        <meta 
          name="description" 
          content="Get in touch with AgencyAI.tools. We're here to help you find the best AI tools for your agency."
        />
        <link rel="canonical" href="https://agencyai.tools/contact" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600">
              Questions about AI tools for your agency? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </div>
                <CardDescription>
                  Send us an email and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:hello@agencyai.tools" 
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                >
                  hello@agencyai.tools
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Feedback</CardTitle>
                </div>
                <CardDescription>
                  Have a suggestion or want to submit a tool for review?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:feedback@agencyai.tools" 
                  className="text-purple-600 hover:text-purple-700 font-medium text-lg"
                >
                  feedback@agencyai.tools
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Us</CardTitle>
              <CardDescription>
                Follow us for the latest AI tool reviews and agency growth tips.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/agencyaitools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/company/agencyaitools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Looking for tool recommendations?{" "}
              <a href="/tools" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse our directory
              </a>
              {" "}or{" "}
              <a href="/newsletter" className="text-blue-600 hover:text-blue-700 font-medium">
                subscribe to our newsletter
              </a>
              .
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
