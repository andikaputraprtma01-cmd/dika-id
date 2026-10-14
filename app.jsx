const { useState, useEffect } = React;

        const LOGO_PATH = "images/logo.svg";

        const DikaLogo = ({ className = "h-8" }) => (
            <img
                src={LOGO_PATH}
                alt="Logo dika.id"
                className={className}
                onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
        );

        // Data Portfolio (Directly mapping user images with fallback placeholders)
        const portfolioData = [
            {
                id: "01",
                title: "MikroTik Traffic Monitoring",
                category: "WinBox & Interface Statistics",
                description: "Pemantauan trafik antarmuka MikroTik melalui WinBox, termasuk kecepatan Tx/Rx, packet rate, dan penggunaan bandwidth secara langsung.",
                image: "images/portfolio/portfolio-01.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: "02",
                title: "Rack & Network Equipment Deployment",
                category: "Rack Installation & Cabling",
                description: "Dokumentasi instalasi perangkat pada rack, koneksi switch dan router, serta jalur kabel saat deployment jaringan.",
                image: "images/portfolio/portfolio-02.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: "03",
                title: "MikroTik Interface Performance",
                category: "WinBox Traffic Analysis",
                description: "Pemeriksaan statistik interface di WinBox, meliputi throughput Tx/Rx, packet rate, grafik trafik, serta indikator error dan drop.",
                image: "images/portfolio/portfolio-03.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: "04",
                title: "On-site Network Configuration",
                category: "Router & Fiber Connectivity",
                description: "Konfigurasi dan pengecekan perangkat jaringan langsung di lokasi menggunakan laptop WinBox serta koneksi kabel dan fiber.",
                image: "images/portfolio/portfolio-04.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: "05",
                title: "Network Rack & Equipment Setup",
                category: "Router & Cabling",
                description: "Dokumentasi perangkat jaringan di area rack serta koneksi kabel yang digunakan dalam proses instalasi dan pengecekan.",
                image: "images/portfolio/portfolio-05.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: "06",
                title: "Internet Speed & Quality Test",
                category: "Speedtest & Latency",
                description: "Pengujian koneksi mencatat kecepatan unduh 505,26 Mbps, ping 12 ms, dan jitter 4 ms untuk mendokumentasikan performa jaringan.",
                image: "images/portfolio/portfolio-06.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Services Data
        const servicesData = [
            {
                id: "mikrotik",
                title: "MikroTik Configuration",
                desc: "Konfigurasi RouterOS, IP Address, DHCP, DNS, NAT, firewall, routing, dan pengaturan dasar hingga lanjutan sesuai kebutuhan jaringan.",
                icon: "router"
            },
            {
                id: "troubleshooting",
                title: "Network Troubleshooting",
                desc: "Analisis gangguan koneksi, packet loss, latency, konflik IP, kesalahan konfigurasi, dan permasalahan konektivitas jaringan.",
                icon: "activity"
            },
            {
                id: "routing-switching",
                title: "Routing & Switching",
                desc: "Konfigurasi static routing, dynamic routing sesuai perangkat, VLAN, trunking, bridge, dan segmentasi jaringan.",
                icon: "git-fork"
            },
            {
                id: "bandwidth",
                title: "Bandwidth Management",
                desc: "Pengaturan bandwidth, Queue Tree, Simple Queue, QoS, dan manajemen trafik sesuai kapasitas jaringan.",
                icon: "gauge"
            },
            {
                id: "security",
                title: "Firewall & Network Security",
                desc: "Konfigurasi firewall filter, NAT, address-list, pembatasan akses, dan penguatan keamanan jaringan sesuai kebutuhan.",
                icon: "shield-check"
            },
            {
                id: "server",
                title: "Server & Virtualization",
                desc: "Bantuan konfigurasi server, virtualisasi, lab jaringan, dan lingkungan pengujian seperti Proxmox serta MikroTik CHR sesuai kebutuhan.",
                icon: "server"
            },
            {
                id: "wireless",
                title: "Wireless Networking",
                desc: "Konfigurasi wireless, optimasi koneksi, analisis gangguan, dan penyesuaian jaringan nirkabel.",
                icon: "wifi"
            },
            {
                id: "maintenance",
                title: "Network Maintenance",
                desc: "Pemeriksaan konfigurasi, dokumentasi jaringan, evaluasi performa, dan pemeliharaan berkala.",
                icon: "wrench"
            }
        ];

        function App() {
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
            const [selectedImage, setSelectedImage] = useState(null);
            const [scrolled, setScrolled] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setScrolled(window.scrollY > 20);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const getWaUrl = (message = "Halo dika.id, saya ingin berkonsultasi mengenai jasa jaringan.") => {
                return `https://wa.me/6285166944402?text=${encodeURIComponent(message)}`;
            };

            return (
                <div className="min-h-screen bg-brand-bg bg-grid-pattern text-brand-text flex flex-col justify-between">
                    {/* Header / Navbar */}
                    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                            <a href="#" className="flex items-center gap-2">
                                <DikaLogo className="h-9 w-auto" />
                            </a>

                            {}
                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                                <a href="#home" className="text-brand-text hover:text-brand-cyan transition-colors">Home</a>
                                <a href="#services" className="text-brand-muted hover:text-brand-cyan transition-colors">Services</a>
                                <a href="#portfolio" className="text-brand-muted hover:text-brand-cyan transition-colors">Portfolio</a>
                                <a href="#about" className="text-brand-muted hover:text-brand-cyan transition-colors">About</a>
                                <a href="#contact" className="text-brand-muted hover:text-brand-cyan transition-colors">Contact</a>
                            </nav>

                            <div className="hidden md:flex items-center">
                                <a 
                                    href={getWaUrl("Halo dika.id, saya ingin berkonsultasi mengenai jasa jaringan.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md shadow-brand-blue/20 flex items-center gap-2 border border-blue-400/30"
                                >
                                    <span>Hubungi Saya</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                                </a>
                            </div>

                            {/* Mobile Menu Button */}
                            <button 
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden text-brand-text p-2 rounded-lg bg-brand-surface border border-white/10"
                                aria-label="Toggle Navigation"
                            >
                                {mobileMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Dropdown */}
                        {mobileMenuOpen && (
                            <div className="md:hidden bg-brand-secondary border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
                                <a href="#home" onClick={()=>setMobileMenuOpen(false)} className="block text-brand-text hover:text-brand-cyan font-medium py-1">Home</a>
                                <a href="#services" onClick={()=>setMobileMenuOpen(false)} className="block text-brand-muted hover:text-brand-cyan font-medium py-1">Services</a>
                                <a href="#portfolio" onClick={()=>setMobileMenuOpen(false)} className="block text-brand-muted hover:text-brand-cyan font-medium py-1">Portfolio</a>
                                <a href="#about" onClick={()=>setMobileMenuOpen(false)} className="block text-brand-muted hover:text-brand-cyan font-medium py-1">About</a>
                                <a href="#contact" onClick={()=>setMobileMenuOpen(false)} className="block text-brand-muted hover:text-brand-cyan font-medium py-1">Contact</a>
                                <a 
                                    href={getWaUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-brand-blue text-white py-3 rounded-lg font-semibold"
                                >
                                    Hubungi Saya via WhatsApp
                                </a>
                            </div>
                        )}
                    </header>

                    <main className="pt-24 md:pt-32">
                        {/* HERO SECTION */}
                        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                            <div className="grid md:grid-cols-12 gap-12 items-center">
                                {/* Left Column */}
                                <div className="md:col-span-7 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                                        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                                        NETWORK ENGINEERING & IT SOLUTIONS
                                    </div>

                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                        Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Jaringan Andal</span> untuk Kebutuhan Digital Anda.
                                    </h1>

                                    <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                                        Melayani konfigurasi MikroTik, routing, switching, troubleshooting, server, dan optimasi infrastruktur jaringan untuk membantu jaringan Anda bekerja lebih stabil, efisien, dan terkelola.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <a 
                                            href={getWaUrl("Halo dika.id, saya ingin berkonsultasi mengenai solusi jaringan.")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-blue/25 border border-blue-400/30"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                            <span>Konsultasi via WhatsApp</span>
                                        </a>

                                        <a 
                                            href="#portfolio"
                                            className="inline-flex items-center justify-center gap-2 bg-brand-surface hover:bg-white/5 text-brand-text border border-white/10 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                                        >
                                            <span>Lihat Portofolio</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Right Column — Decorative NOC Visualization */}
                                <div className="md:col-span-5 relative">
                                    <div className="relative rounded-2xl bg-brand-surface border border-white/10 p-6 shadow-2xl glow-effect overflow-hidden">
                                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                            </div>
                                            <span className="text-xs font-mono text-brand-cyan">NOC Visual Interface</span>
                                        </div>

                                        <div className="mt-4 space-y-4 font-mono text-xs">
                                            <div className="p-3 rounded bg-brand-secondary/80 border border-white/5">
                                                <div className="flex justify-between text-brand-muted mb-1">
                                                    <span>Core Router Status</span>
                                                    <span className="text-green-400 font-semibold">Active</span>
                                                </div>
                                                <div className="w-full bg-brand-bg rounded-full h-2 overflow-hidden">
                                                    <div className="bg-brand-cyan h-2 rounded-full w-3/4 animate-pulse"></div>
                                                </div>
                                            </div>

                                            <div className="p-3 rounded bg-brand-secondary/80 border border-white/5 space-y-2">
                                                <div className="text-brand-muted">Topology Nodes:</div>
                                                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                                                    <div className="p-2 rounded bg-brand-blue/10 border border-brand-blue/30 text-brand-blue">Gateway</div>
                                                    <div className="p-2 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">Switch L3</div>
                                                    <div className="p-2 rounded bg-white/5 border border-white/10 text-brand-text">AP Node</div>
                                                </div>
                                            </div>

                                            <div className="p-3 rounded bg-brand-secondary/80 border border-white/5 text-brand-muted space-y-1">
                                                <div className="flex justify-between">
                                                    <span>Bandwidth Queue:</span>
                                                    <span className="text-brand-cyan">QoS Optimized</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Firewall Filter:</span>
                                                    <span className="text-brand-blue">Secured</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-brand-muted text-center italic">
                                            *Ilustrasi visual tata kelola & konsep arsitektur NOC.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SERVICES SECTION */}
                        <section id="services" className="bg-brand-secondary/50 py-16 md:py-24 border-y border-white/5">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center max-w-2xl mx-auto mb-16">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Layanan Network Engineering</h2>
                                    <p className="text-brand-muted">Solusi konfigurasi, pemeliharaan, dan troubleshooting jaringan sesuai kebutuhan Anda.</p>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {servicesData.map((svc) => (
                                        <div key={svc.id} className="bg-brand-surface rounded-xl p-6 border border-white/5 hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group">
                                            <div>
                                                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                                    <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16 M5 20h.01"/></svg>
                                                </div>
                                                <h3 className="text-lg font-semibold text-white mb-2">{svc.title}</h3>
                                                <p className="text-brand-muted text-sm leading-relaxed mb-6">{svc.desc}</p>
                                            </div>

                                            <a 
                                                href={getWaUrl(`Halo dika.id, saya berminat dengan layanan ${svc.title}. Boleh minta info lebih lanjut?`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors pt-2 border-t border-white/5"
                                            >
                                                <span>Konsultasikan</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* PORTFOLIO SECTION */}
                        <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Network Projects & Portfolio</h2>
                                <p className="text-brand-muted">Dokumentasi konfigurasi, eksperimen homelab, infrastruktur jaringan, dan pekerjaan teknis yang menjadi bagian dari perjalanan saya di dunia networking.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {portfolioData.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => setSelectedImage(item)}
                                        className="group relative rounded-xl bg-brand-surface border border-white/10 overflow-hidden cursor-pointer hover:border-brand-cyan/50 transition-all duration-300 glow-effect-hover"
                                    >
                                        <div className="aspect-[4/3] w-full overflow-hidden bg-brand-secondary relative">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                onError={(e) => { e.target.onerror = null; e.target.src = item.fallbackImage; }}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                            <span className="absolute top-3 left-3 bg-brand-bg/80 backdrop-blur-md border border-white/10 text-brand-cyan text-[11px] font-mono px-2.5 py-1 rounded">
                                                PORTFOLIO {item.id}
                                            </span>
                                        </div>

                                        <div className="p-5 relative z-10">
                                            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">{item.category}</span>
                                            <h3 className="text-base font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                                            <p className="text-brand-muted text-xs mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ABOUT SECTION */}
                        <section id="about" className="bg-brand-secondary/40 py-16 md:py-24 border-y border-white/5">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid md:grid-cols-12 gap-12 items-center">
                                    <div className="md:col-span-5 flex justify-center">
                                        <div className="relative">
                                            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-1 shadow-2xl">
                                                <div className="w-full h-full rounded-[14px] bg-brand-surface p-6 flex flex-col justify-center items-center text-center">
                                                    <DikaLogo className="h-16 w-auto mb-4" />
                                                    <div className="text-sm font-semibold text-white">Network Service</div>
                                                    <div className="text-xs text-brand-muted mt-1">NOC Operations & Troubleshooting</div>
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-4 -right-4 bg-brand-blue text-white px-4 py-2 rounded-lg text-xs font-mono font-bold shadow-lg">
                                                dika.id
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-7 space-y-6">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Behind dika.id</h2>
                                        <p className="text-brand-muted text-base leading-relaxed">
                                            dika.id dibangun dari ketertarikan pada dunia jaringan komputer, administrasi router, infrastruktur server, dan pemecahan masalah teknis. Fokus saya adalah membantu pengguna memahami kebutuhan jaringan mereka dan menemukan konfigurasi yang sesuai, efektif, serta mudah dikelola.
                                        </p>

                                        <div className="grid sm:grid-cols-3 gap-4 pt-4">
                                            <div className="p-4 rounded-xl bg-brand-surface border border-white/5">
                                                <h3 className="text-sm font-bold text-brand-cyan mb-1">Precision</h3>
                                                <p className="text-xs text-brand-muted">Konfigurasi dilakukan dengan teliti dan terstruktur.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-surface border border-white/5">
                                                <h3 className="text-sm font-bold text-brand-cyan mb-1">Reliability</h3>
                                                <p className="text-xs text-brand-muted">Mengutamakan stabilitas dan keandalan jaringan.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-brand-surface border border-white/5">
                                                <h3 className="text-sm font-bold text-brand-cyan mb-1">Continuous Learning</h3>
                                                <p className="text-xs text-brand-muted">Terus mempelajari teknologi dan solusi jaringan terbaru.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WORK PROCESS SECTION */}
                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Bagaimana Saya Bekerja</h2>
                                <p className="text-brand-muted">Alur kerja sistematis untuk memastikan setiap konfigurasi dan pemecahan masalah berjalan optimal.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                                {[
                                    { step: "01", title: "Consultation", desc: "Memahami kebutuhan, topologi, perangkat, dan masalah yang dialami." },
                                    { step: "02", title: "Analysis", desc: "Menganalisis kondisi jaringan dan menentukan pendekatan yang sesuai." },
                                    { step: "03", title: "Configuration", desc: "Melakukan konfigurasi atau memberikan panduan teknis berdasarkan ruang lingkup yang disepakati." },
                                    { step: "04", title: "Testing & Documentation", desc: "Memeriksa hasil konfigurasi, menguji konektivitas, dan memberikan dokumentasi jika termasuk dalam layanan." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-brand-surface rounded-xl p-6 border border-white/5 relative">
                                        <div className="text-3xl font-extrabold text-brand-blue/30 font-mono mb-2">{item.step}</div>
                                        <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CONTACT SECTION */}
                        <section id="contact" className="bg-brand-secondary/60 py-16 md:py-24 border-t border-white/5">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Punya Kendala Jaringan?</h2>
                                    <p className="text-brand-muted text-base max-w-xl mx-auto">
                                        Ceritakan kebutuhan atau kendala jaringan Anda. Mari diskusikan solusi yang sesuai dengan perangkat, topologi, dan anggaran yang tersedia.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 pt-4 max-w-2xl mx-auto">
                                    {}
                                    {/* WhatsApp */}
                                    <a 
                                        href="https://wa.me/6285166944402" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-emerald-900/20 group"
                                    >
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                        <div>
                                            <div className="text-xs font-semibold opacity-90 uppercase tracking-wider">WhatsApp</div>
                                            <div className="text-lg font-bold">085166944402</div>
                                        </div>
                                        <span className="text-xs bg-black/20 px-3 py-1 rounded-full font-medium mt-1">Chat WhatsApp</span>
                                    </a>

                                    {/* TikTok */}
                                    <a 
                                        href="https://www.tiktok.com/@ddikaaz" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-brand-surface border border-white/10 hover:border-white/30 text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-200 group"
                                    >
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.8.1v-3.5a6.37 6.37 0 00-.8-.05A6.34 6.34 0 003.15 15a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.81a8.23 8.23 0 004.76 1.5V6.86a4.84 4.84 0 01-1 0z"/></svg>
                                        <div>
                                            <div className="text-xs text-brand-muted uppercase tracking-wider font-semibold">TikTok</div>
                                            <div className="text-lg font-bold">@ddikaaz</div>
                                        </div>
                                        <span className="text-xs bg-white/5 px-3 py-1 rounded-full font-medium mt-1 text-brand-cyan">Kunjungi TikTok</span>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* LIGHTBOX MODAL */}
                    {selectedImage && (
                        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                            <div className="relative max-w-4xl w-full bg-brand-surface rounded-2xl border border-white/10 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                                <button 
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 z-10 bg-brand-bg/80 text-white p-2 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                                </button>
                                
                                <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                                    <img 
                                        src={selectedImage.image} 
                                        alt={selectedImage.title}
                                        onError={(e) => { e.target.onerror = null; e.target.src = selectedImage.fallbackImage; }}
                                        className="w-full h-full object-contain max-h-[70vh]"
                                    />
                                </div>

                                <div className="p-6">
                                    <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">{selectedImage.category}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{selectedImage.title}</h3>
                                    <p className="text-brand-muted text-sm mt-2">{selectedImage.description}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FLOATING WHATSAPP BUTTON */}
                    <a 
                        href="https://wa.me/6285166944402"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                        aria-label="Contact on WhatsApp"
                    >
                        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    </a>

                    {/* FOOTER */}
                    <footer className="bg-brand-bg border-t border-white/10 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="space-y-2 text-center md:text-left">
                                    <DikaLogo className="h-8 w-auto" />
                                    <p className="text-xs text-brand-muted">Connecting Networks. Solving Problems.</p>
                                </div>

                                <div className="flex flex-wrap gap-6 text-xs text-brand-muted font-medium justify-center">
                                    <a href="#home" className="hover:text-brand-cyan transition-colors">Home</a>
                                    <a href="#services" className="hover:text-brand-cyan transition-colors">Services</a>
                                    <a href="#portfolio" className="hover:text-brand-cyan transition-colors">Portfolio</a>
                                    <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
                                    <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-brand-muted/70 gap-3">
                                <div>&copy; {new Date().getFullYear()} dika.id. All rights reserved.</div>
                                <div className="italic text-center sm:text-right">
                                    Layanan disesuaikan dengan kebutuhan, ketersediaan perangkat, dan ruang lingkup pekerjaan.
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
