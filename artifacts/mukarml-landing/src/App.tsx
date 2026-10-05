const photos = {
  hero: '/images/coffee-and-sweets.jpg',
  dessert: '/images/signature-desserts.jpg',
  coffee: '/images/coffee-details.jpg',
  chocolate: '/images/chocolate-and-coffee.jpg',
  collection: '/images/saudi-collection.jpg',
};

function App() {
  return (
    <main className="site-shell" dir="rtl" lang="ar">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="مكرمل، إلى أعلى الصفحة">
          <img src="/favicon.jpg" alt="" />
          <span className="brand-name">مُكَرْمَل</span>
        </a>
        <nav className="nav-links" aria-label="التنقل الرئيسي">
          <a href="#story">حكايتنا</a>
          <a href="#signature">التفاصيل</a>
          <a className="nav-contact" href="#contact">تواصل معنا</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">حلا على مهل</p>
          <h1 id="hero-title">حكاية<br />تُذاق</h1>
          <p className="hero-intro">حلويات وقهوة تُحضّر بعناية، وتُقدّم بروحٍ سعودية أصيلة.</p>
          <a className="cta-link" href="#signature">
            <span>اكتشف مكرمل</span>
            <span className="cta-arrow" aria-hidden="true">←</span>
          </a>
        </div>
        <div className="hero-image">
          <img src={photos.hero} alt="قهوة وحلويات مكرمل بتقديم أنيق" />
          <span className="hero-mark" aria-hidden="true">مُكَرْمَل · حكاية تُذاق</span>
        </div>
      </section>

      <section className="about section" id="story">
        <span className="section-index">١ — الحكاية</span>
        <div className="about-copy">
          <h2>من طيب الضيافة،<br />تبدأ الحكاية.</h2>
          <p>في مكرمل، نعتني بما يجعل اللحظة أطيب؛ مذاق متوازن، وصنعة متقنة، وتفاصيل تستلهم كرم الضيافة السعودية.</p>
        </div>
      </section>

      <section className="signature section" id="signature">
        <div className="section-heading">
          <div>
            <span className="section-index">٢ — من مكرمل</span>
            <h2>تفاصيل تُصنع بعناية</h2>
          </div>
          <p>بين حلاوةٍ تُشارك، وقهوةٍ تُكمّل اللحظة.</p>
        </div>
        <div className="gallery">
          <figure className="gallery-item">
            <div className="gallery-image"><img loading="lazy" src={photos.dessert} alt="تقديم حلويات مكرمل مع القهوة" /></div>
            <figcaption>حلويات <span>١ / ٣</span></figcaption>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-image"><img loading="lazy" src={photos.coffee} alt="قهوة مكرمل بتفاصيلها" /></div>
            <figcaption>قهوة <span>٢ / ٣</span></figcaption>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-image"><img loading="lazy" src={photos.collection} alt="مجموعة مكرمل بتفاصيل مستلهمة من الهوية السعودية" /></div>
            <figcaption>من روح المكان <span>٣ / ٣</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="experience" aria-labelledby="experience-title">
        <div className="experience-inner">
          <div className="experience-photo">
            <img src={photos.chocolate} alt="قهوة وقطع الشوكولاتة من مكرمل" />
          </div>
          <div className="experience-copy">
            <span className="section-index">٣ — التجربة</span>
            <h2 id="experience-title">تفاصيل صغيرة،<br />تصنع فرقًا كبيرًا.</h2>
            <p>من أول نظرة، حتى آخر رشفة؛ لكل تفصيل مكانه في لحظة مكرمل.</p>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <img src="/favicon.jpg" alt="" />
        <h2>مكرمل، لأن التفاصيل تُذاق.</h2>
        <p>نسعد بتواصلكم.</p>
        <a href="#contact-note">تواصل معنا</a>
      </section>

      <footer className="footer" id="contact-note">
        <div className="footer-brand">
          <img src="/favicon.jpg" alt="" />
          <span>مُكَرْمَل</span>
        </div>
        <div className="footer-meta">
          <span>Instagram</span>
          <span>التواصل</span>
          <span>المملكة العربية السعودية</span>
        </div>
        <span className="footer-note">تُضاف روابط التواصل هنا</span>
      </footer>
    </main>
  );
}

export default App;
