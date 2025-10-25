export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white text-center lg:text-left">
            {/* Animated greeting */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Hi, I'm Muhammad Anees
              </h1>
              <div className="text-4xl mb-8 animate-bounce-slow">👋</div>
            </div>
            
            {/* Animated subtitle */}
            <div className="animate-slide-up delay-300">
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                SQA Automation Engineer | Software Developer | Business Solution
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="animate-slide-up delay-500 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right side - Professional Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image container with professional styling */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group">
                  {   <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                      <img 
                        src="/src/assets/anees_photo.jpg" 
                        alt="Muhammad Anees" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  }
                  {/* <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                    MA
                  </div> */}
                  
                  {/* Professional overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating elements for visual appeal */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-300/40 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
  