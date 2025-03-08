import React, { useState, useRef } from 'react';
import { 
  Shield, 
  X, 
  Home, 
  FileText, 
  Info, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Plus,
  MoreHorizontal,
  Check
} from 'lucide-react';

type Page = 'home' | 'terms' | 'about' | 'contact';

function App() {
  const [showTermsCard, setShowTermsCard] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const HomeContent = () => (
    <div className="max-w-3xl p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-black">
        Welcome to the Future
      </h1>
      <p className="text-gray-600 leading-relaxed text-lg">
        Step into a world of endless possibilities. Our platform combines cutting-edge technology
        with intuitive design to deliver an unparalleled user experience. Discover what makes
        us different and how we can help you achieve your goals.
      </p>
    </div>
  );

  const TermsContent = () => (
    <div className="max-w-3xl p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-black">
        Terms of Service
      </h1>
      <div className="prose prose-black max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          By using our service, you agree to these terms. We reserve the right to modify these terms
          at any time. Please read these terms carefully before using our services. These terms
          govern your use of our website and services. If you do not agree with any part of these
          terms, you may not use our services.
        </p>
      </div>
    </div>
  );

  const AboutContent = () => (
    <div className="max-w-3xl p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-black">
        About Us
      </h1>
      <p className="text-gray-600 leading-relaxed text-lg">
        We are a team of passionate innovators dedicated to pushing the boundaries of what's
        possible. Our mission is to create solutions that not only meet your needs but exceed
        your expectations. With years of experience and a commitment to excellence, we're here
        to help you succeed in the digital age.
      </p>
    </div>
  );

  const ContactContent = () => (
    <div className="max-w-5xl p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-black">
        Contact Us
      </h1>
      <form className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={8}
              className="w-full h-[calc(100%-2rem)]"
              placeholder="Your message here..."
            />
          </div>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-[#006699] text-white py-3 px-6 rounded-xl
              hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );

  const handleFileSelect = (files: FileList | null) => {
    setSelectedFiles(files);
    setUploadSuccess(false);
  };

  const handleUpload = () => {
    if (selectedFiles && selectedFiles.length > 0) {
      // Simulate upload process
      setTimeout(() => {
        setUploadSuccess(true);
        setSelectedFiles(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 1500);
    }
  };

  const UploadCard = () => (
    <div className="w-96 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 animate-scale-in">
      <div className="flex flex-col items-center">
        <div className="bg-[#006699] p-4 rounded-full shadow-lg cursor-pointer"
             onClick={() => fileInputRef.current?.click()}>
          <Plus className="w-8 h-8 text-white" />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          Please Add your BGV Documents
        </h2>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="mt-2 text-sm text-[#006699] hover:text-blue-800 cursor-pointer"
        >
          Or select folder
        </button>
        <div className="mt-6 w-full space-y-4">
          {selectedFiles && (
            <div className="bg-gray-50/80 rounded-xl p-4">
              <p className="text-sm font-medium text-gray-700">Selected files:</p>
              {Array.from(selectedFiles).map((file, index) => (
                <p key={index} className="text-sm text-gray-600 truncate">
                  {file.name}
                </p>
              ))}
            </div>
          )}
          <select className="w-full border-0 bg-gray-50/80 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300">
            <option value="">- Select recipient -</option>
            <option value="hr">HR Department</option>
            <option value="manager">Manager</option>
            <option value="team">Team Lead</option>
          </select>
          <input
            type="email"
            placeholder="Email from"
            className="w-full"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full"
          />
          <div className="flex items-center gap-2">
            <button 
              onClick={handleUpload}
              disabled={!selectedFiles}
              className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300
                ${selectedFiles 
                  ? 'bg-[#006699] text-white hover:bg-blue-700 transform hover:scale-[1.02]' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg`}
            >
              Upload
            </button>
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Success Message */}
        {uploadSuccess && (
          <div className="mt-6 w-full bg-green-50 border border-green-200 rounded-xl p-4 animate-scale-in">
            <div className="flex items-center gap-2 text-green-600">
              <Check size={20} />
              <span className="font-medium">Files uploaded successfully!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const TermsCard = () => (
    <div className="w-96 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 animate-scale-in">
      <button
        onClick={() => setShowTermsCard(false)}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={20} />
      </button>
      <div className="flex flex-col items-center">
        <div className="bg-[#006699] p-4 rounded-2xl shadow-lg">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          Accept Terms of Service
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Please accept our Terms of Service to continue using our platform
        </p>
        <div className="mt-8 flex flex-col w-full gap-4">
          <button
            onClick={() => {
              setShowTermsCard(false);
              setTermsAccepted(true);
            }}
            className="w-full bg-[#006699] text-white py-3 px-6 rounded-xl
              hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
          >
            Accept Terms
          </button>
          <button
            onClick={() => {
              setCurrentPage('terms');
              setShowTermsCard(false);
            }}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            View Terms
          </button>
        </div>
      </div>
    </div>
  );

  const NavButton = ({ page, icon: Icon }: { page: Page; icon: React.ElementType }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
        ${currentPage === page
          ? 'bg-white/80 text-gray-900 shadow-md'
          : 'text-gray-600 hover:bg-white/40 hover:text-gray-900'
        }`}
    >
      <Icon size={18} />
      <span className="font-medium">{page.charAt(0).toUpperCase() + page.slice(1)}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM Logo"
                className="h-8 w-auto mr-4"
              />
              <div className="flex items-center gap-2">
                <NavButton page="home" icon={Home} />
                <NavButton page="terms" icon={FileText} />
                <NavButton page="about" icon={Info} />
                <NavButton page="contact" icon={Mail} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Cards */}
      <div className="flex-1 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="flex gap-12 items-start">
          {/* Main Content Area */}
          <div className="flex-1">
            {currentPage === 'home' && <HomeContent />}
            {currentPage === 'terms' && <TermsContent />}
            {currentPage === 'about' && <AboutContent />}
            {currentPage === 'contact' && <ContactContent />}
          </div>

          {/* Right Side Cards */}
          {currentPage === 'home' && (
            <div className="sticky top-24">
              {showTermsCard && !termsAccepted && <TermsCard />}
              {termsAccepted && <UploadCard />}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-lg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM Logo"
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                Empowering innovation through technology and expertise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} IBM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;