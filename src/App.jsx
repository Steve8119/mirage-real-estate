import { useEffect, useMemo, useState } from 'react';


// ============================================================
// IMAGE IMPORTS
// ============================================================

import logo from './assets/images/logo.jpg';

import house1 from './assets/images/house (1).jpg';
import house2 from './assets/images/house (2).jpg';
import house3 from './assets/images/house (3).jpg';
import house4 from './assets/images/house (4).jpg';
import house5 from './assets/images/house (5).jpg';
import house6 from './assets/images/house (6).jpg';
import house7 from './assets/images/house (7).jpg';
import house8 from './assets/images/house (8).jpg';
import house9 from './assets/images/house (9).jpg';
import house10 from './assets/images/house (10).jpg';
import house11 from './assets/images/house (11).jpg';
import house12 from './assets/images/house (12).jpg';
import house13 from './assets/images/house (13).jpg';
import house14 from './assets/images/house (14).jpg';
import house15 from './assets/images/house (15).jpg';

// ============================================================
// COMPANY INFORMATION
// ============================================================

const COMPANY_NAME = 'MIRAGE';

const COMPANY_SHORT_NAME = 'MRE';

const ADDRESS =
  'Tuwork Park, Olenguruone Road, Lavington, Nairobi, Kenya.';

const PHONE = '0768116704';

const INTERNATIONAL_PHONE = '+254 768 116 704';

const EMAIL = 'sales@mre.co.ke';

const WEBSITE = 'https://mre.co.ke';

const CONTACT_URL = 'https://mre.co.ke/contact/';

const WHAT_WE_DO_URL = 'https://mre.co.ke/what-we-do/';

const WHATSAPP_NUMBER = '254768116704';

// ============================================================
// COMPANY SOCIAL LINKS
// ============================================================

const LINKEDIN_URL = 'https://www.linkedin.com/';

const INSTAGRAM_URL = 'https://www.instagram.com/';

const YOUTUBE_URL = 'https://www.youtube.com/';

// ============================================================
// COMPANY CONTENT
// ============================================================

const companyDescription =
  'We acquire, create and operate high-performing retail and office spaces that add community value, deliver strong shareholder returns, and are expertly operated to foster seamless collaboration among all stakeholders.';

const vision =
  'To enhance communities by delivering robust spaces where people and businesses choose to work, shop, and gather.';

const mission =
  'We elevate experiences, drive tenant success, and create lasting value by building destinations that perform today and adapt for tomorrow.';

// ============================================================
// PROPERTY / PROJECT DATA
// ============================================================

const properties = [
  {
    id: 1,
    image: house1,
    title: 'Tuwork Park',
    location: 'Lavington, Nairobi',
    area: 'Lavington',
    price: 'Commercial Development',
    numericPrice: 0,
    type: 'Office',
    beds: 0,
    baths: 0,
    size: 'Premium Commercial Space',
    status: 'Operational',
    featured: true,
    description:
      'Tuwork Park is located along Olenguruone Road in Lavington, Nairobi, providing high-quality commercial space designed for businesses seeking a strategic and professional environment.',
    amenities: [
      'Prime Location',
      'Office Space',
      'Retail Space',
      'Professional Environment',
      'Accessibility',
      'Managed Property',
    ],
  },

  {
    id: 2,
    image: house2,
    title: 'Premium Retail Space',
    location: 'Nairobi, Kenya',
    area: 'Nairobi',
    price: 'Retail Space',
    numericPrice: 0,
    type: 'Retail',
    beds: 0,
    baths: 0,
    size: 'High-Performance Retail',
    status: 'Available',
    featured: true,
    description:
      'Purposefully developed retail environments designed to support businesses, attract customers and create lasting value within the surrounding community.',
    amenities: [
      'High Visibility',
      'Retail Environment',
      'Customer Access',
      'Professional Management',
      'Strategic Location',
      'Community Focus',
    ],
  },

  {
    id: 3,
    image: house3,
    title: 'Modern Office Environment',
    location: 'Nairobi, Kenya',
    area: 'Nairobi',
    price: 'Office Space',
    numericPrice: 0,
    type: 'Office',
    beds: 0,
    baths: 0,
    size: 'Flexible Office Space',
    status: 'Available',
    featured: true,
    description:
      'Modern office spaces designed around the needs of businesses, with a focus on professional experiences, tenant success and long-term performance.',
    amenities: [
      'Modern Workspace',
      'Business Environment',
      'Accessibility',
      'Professional Setting',
      'Flexible Space',
      'Managed Operations',
    ],
  },

  {
    id: 4,
    image: house4,
    title: 'Community Retail Destination',
    location: 'Nairobi, Kenya',
    area: 'Nairobi',
    price: 'Retail Development',
    numericPrice: 0,
    type: 'Retail',
    beds: 0,
    baths: 0,
    size: 'Community Retail Space',
    status: 'Operational',
    featured: true,
    description:
      'Retail destinations created to bring people and businesses together while contributing positively to the communities they serve.',
    amenities: [
      'Community Value',
      'Retail Space',
      'Accessibility',
      'Business Visibility',
      'Professional Operations',
      'Customer Experience',
    ],
  },

  {
    id: 5,
    image: house5,
    title: 'Business Workspace',
    location: 'Lavington, Nairobi',
    area: 'Lavington',
    price: 'Office Space',
    numericPrice: 0,
    type: 'Office',
    beds: 0,
    baths: 0,
    size: 'Professional Workspace',
    status: 'Available',
    featured: false,
    description:
      'A professional business environment designed to help organisations operate effectively and create successful working experiences.',
    amenities: [
      'Professional Space',
      'Prime Location',
      'Business Access',
      'Managed Environment',
      'Modern Facilities',
      'Tenant Support',
    ],
  },

  {
    id: 6,
    image: house6,
    title: 'Retail Opportunity',
    location: 'Nairobi, Kenya',
    area: 'Nairobi',
    price: 'Retail Space',
    numericPrice: 0,
    type: 'Retail',
    beds: 0,
    baths: 0,
    size: 'High-Demand Retail',
    status: 'Available',
    featured: true,
    description:
      'High-demand retail environments created to help businesses connect with customers and thrive within vibrant communities.',
    amenities: [
      'Retail Environment',
      'Customer Access',
      'High Visibility',
      'Strategic Location',
      'Professional Management',
      'Business Support',
    ],
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

const testimonials = [
  {
    id: 1,
    name: 'Business Partner',
    role: 'Commercial Partner',
    text:
      'MRE combines strong real estate expertise with a clear understanding of what businesses and communities need from modern commercial spaces.',
    rating: 5,
  },

  {
    id: 2,
    name: 'Tenant',
    role: 'Commercial Tenant',
    text:
      'The professional environment and focus on tenant experience make MRE a strong partner for businesses looking for quality space.',
    rating: 5,
  },

  {
    id: 3,
    name: 'Investor',
    role: 'Property Investor',
    text:
      'MRE takes a long-term approach to real estate, focusing on quality developments, operational performance and sustainable value.',
    rating: 5,
  },

  {
    id: 4,
    name: 'Business Owner',
    role: 'Retail Tenant',
    text:
      'The combination of location, professional management and customer-focused spaces creates an excellent environment for business.',
    rating: 5,
  },
];

// ============================================================
// SERVICES
// ============================================================

const services = [
  {
    icon: '🏢',
    title: 'Commercial Real Estate',
    description:
      'We develop and operate high-performing retail and office spaces designed around the needs of modern businesses.',
  },

  {
    icon: '🏗️',
    title: 'Property Development',
    description:
      'We create robust real estate destinations that deliver long-term value to communities, tenants and shareholders.',
  },

  {
    icon: '🛍️',
    title: 'Retail Spaces',
    description:
      'We create strategic retail environments where businesses can connect with customers and grow.',
  },

  {
    icon: '💼',
    title: 'Office Spaces',
    description:
      'Our office environments provide professional spaces where people and businesses can work effectively.',
  },

  {
    icon: '⚙️',
    title: 'Property Operations',
    description:
      'We expertly operate our assets to create seamless experiences for tenants, customers and stakeholders.',
  },

  {
    icon: '📈',
    title: 'Asset Investment',
    description:
      'We focus on high-demand real estate assets capable of delivering strong long-term shareholder returns.',
  },
];

// ============================================================
// FAQ DATA
// ============================================================

const faqData = [
  {
    question: 'What does MRE do?',
    answer:
      'MRE acquires, creates and operates high-performing retail and office spaces designed to add community value and deliver strong long-term returns.',
  },

  {
    question: 'Where is MRE located?',
    answer:
      'Our office is located at Tuwork Park, Olenguruone Road, Lavington, Nairobi, Kenya.',
  },

  {
    question: 'What type of properties does MRE develop?',
    answer:
      'Our focus is on high-performing retail and office spaces that serve businesses, customers and the wider community.',
  },

  {
    question: 'Can I enquire about available commercial space?',
    answer:
      'Yes. Contact our team by phone, email or WhatsApp to enquire about available retail and office opportunities.',
  },

  {
    question: 'How can I contact MRE?',
    answer:
      'You can reach us by phone at +254 768 116 704 or email sales@mre.co.ke. You can also visit us at Tuwork Park, Olenguruone Road, Lavington, Nairobi.',
  },

  {
    question: 'What is MRE’s vision?',
    answer:
      'Our vision is to enhance communities by delivering robust spaces where people and businesses choose to work, shop, and gather.',
  },
];

// ============================================================
// SMALL REUSABLE COMPONENTS
// ============================================================

function StarRating({ rating = 5 }) {
  return (
    <div
      className="star-rating"
      aria-label={`${rating} star rating`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

// ============================================================
// PROPERTY CARD
// ============================================================

function PropertyCard({
  property,
  isFavorite,
  onFavorite,
  onView,
}) {
  const whatsappMessage = encodeURIComponent(
    `Hello MRE, I am interested in ${property.title} in ${property.location}. I would like to get more information.`
  );

  return (
    <article className="property-card">

      <div className="property-image-container">

        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />

        <span className="property-badge">
          {property.type}
        </span>

        {property.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

        <button
          className={`favorite-button ${
            isFavorite ? 'favorite-active' : ''
          }`}
          onClick={() => onFavorite(property.id)}
          aria-label={
            isFavorite
              ? 'Remove from saved'
              : 'Save property'
          }
        >
          {isFavorite ? '♥' : '♡'}
        </button>

      </div>

      <div className="property-card-content">

        <div className="property-status">
          {property.status}
        </div>

        <h3>
          {property.title}
        </h3>

        <p className="property-location">
          📍 {property.location}
        </p>

        <p className="property-price">
          {property.price}
        </p>

        <div className="property-details">

          <span>
            🏢 {property.type}
          </span>

          <span>
            📐 {property.size}
          </span>

        </div>

        <div className="property-actions">

          <button
            className="btn btn-primary"
            onClick={() => onView(property)}
          >
            View Details
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </article>
  );
}

// ============================================================
// PROPERTY MODAL
// ============================================================

function PropertyModal({
  property,
  onClose,
}) {
  if (!property) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello MRE, I would like to enquire about ${property.title} in ${property.location}.`
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >

      <div
        className="property-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-image-container">

          <img
            src={property.image}
            alt={property.title}
            className="modal-image"
          />

        </div>

        <div className="modal-content">

          <span className="property-badge">
            {property.type}
          </span>

          <h2>
            {property.title}
          </h2>

          <p className="modal-location">
            📍 {property.location}
          </p>

          <div className="modal-price">
            {property.price}
          </div>

          <div className="modal-details-grid">

            <div>
              <strong>
                {property.type}
              </strong>

              <span>
                Property Type
              </span>
            </div>

            <div>
              <strong>
                {property.status}
              </strong>

              <span>
                Status
              </span>
            </div>

            <div>
              <strong>
                {property.size}
              </strong>

              <span>
                Space
              </span>
            </div>

          </div>

          <p className="modal-description">
            {property.description}
          </p>

          <h3>
            Property Features
          </h3>

          <div className="amenities-grid">

            {property.amenities.map(
              (amenity) => (
                <span key={amenity}>
                  ✓ {amenity}
                </span>
              )
            )}

          </div>

          <div className="modal-actions">

            <a
              href={`tel:${PHONE}`}
              className="btn btn-primary"
            >
              📞 Call Us
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

// ============================================================
// APP
// ============================================================

function App() {

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const [menuOpen, setMenuOpen] =
    useState(false);

  // ==========================================================
  // SEARCH / FILTER
  // ==========================================================

  const [search, setSearch] =
    useState('');

  const [filter, setFilter] =
    useState('All');

  const [locationFilter, setLocationFilter] =
    useState('All Locations');

  const [sortBy, setSortBy] =
    useState('Featured');

  // ==========================================================
  // PROPERTY STATE
  // ==========================================================

  const [selectedProperty, setSelectedProperty] =
    useState(null);

  const [favorites, setFavorites] =
    useState([]);

  // ==========================================================
  // MODALS
  // ==========================================================

  const [showContactForm, setShowContactForm] =
    useState(false);

  const [showTopButton, setShowTopButton] =
    useState(false);

  const [activeFaq, setActiveFaq] =
    useState(null);

  const [newsletterEmail, setNewsletterEmail] =
    useState('');

  const [newsletterMessage, setNewsletterMessage] =
    useState('');

  // ==========================================================
  // CONTACT FORM
  // ==========================================================

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  // ==========================================================
  // LOCATIONS
  // ==========================================================

  const locations = useMemo(() => {

    const uniqueLocations = [
      ...new Set(
        properties.map(
          (property) => property.area
        )
      ),
    ];

    return uniqueLocations.sort();

  }, []);

  // ==========================================================
  // FILTER PROPERTIES
  // ==========================================================

  const filteredProperties = useMemo(() => {

    let results = properties.filter(
      (property) => {

        const normalizedSearch =
          search.trim().toLowerCase();

        const matchesSearch =
          property.title
            .toLowerCase()
            .includes(normalizedSearch) ||

          property.location
            .toLowerCase()
            .includes(normalizedSearch) ||

          property.type
            .toLowerCase()
            .includes(normalizedSearch);

        const matchesType =
          filter === 'All' ||
          property.type === filter;

        const matchesLocation =
          locationFilter ===
            'All Locations' ||
          property.area ===
            locationFilter;

        return (
          matchesSearch &&
          matchesType &&
          matchesLocation
        );
      }
    );

    if (sortBy === 'Newest') {

      results = [...results].sort(
        (a, b) => b.id - a.id
      );

    }

    if (sortBy === 'Featured') {

      results = [...results].sort(
        (a, b) =>
          Number(b.featured) -
          Number(a.featured)
      );

    }

    return results;

  }, [
    search,
    filter,
    locationFilter,
    sortBy,
  ]);

  // ==========================================================
  // FEATURED PROPERTIES
  // ==========================================================

  const featuredProperties =
    useMemo(() => {

      return properties
        .filter(
          (property) =>
            property.featured
        )
        .slice(0, 6);

    }, []);

  // ==========================================================
  // FAVORITES
  // ==========================================================

  const toggleFavorite = (id) => {

    setFavorites((current) => {

      if (current.includes(id)) {

        return current.filter(
          (favoriteId) =>
            favoriteId !== id
        );

      }

      return [
        ...current,
        id,
      ];

    });

  };

  // ==========================================================
  // RESET FILTERS
  // ==========================================================

  const resetFilters = () => {

    setSearch('');
    setFilter('All');
    setLocationFilter(
      'All Locations'
    );
    setSortBy('Featured');

  };

  // ==========================================================
  // SCROLL EFFECT
  // ==========================================================

  useEffect(() => {

    const handleScroll = () => {

      setShowTopButton(
        window.scrollY > 500
      );

    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

    };

  }, []);

  // ==========================================================
  // BODY MODAL LOCK
  // ==========================================================

  useEffect(() => {

    const modalOpen =
      selectedProperty ||
      showContactForm;

    document.body.style.overflow =
      modalOpen
        ? 'hidden'
        : '';

    return () => {

      document.body.style.overflow =
        '';

    };

  }, [
    selectedProperty,
    showContactForm,
  ]);

  // ==========================================================
  // ESCAPE KEY
  // ==========================================================

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key === 'Escape'
      ) {

        setMenuOpen(false);

        setSelectedProperty(
          null
        );

        setShowContactForm(
          false
        );

      }

    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, []);

  // ==========================================================
  // CONTACT FORM
  // ==========================================================

  const handleContactChange =
    (event) => {

      const {
        name,
        value,
      } = event.target;

      setContactForm(
        (current) => ({
          ...current,
          [name]: value,
        })
      );

    };

  const submitContact =
    (event) => {

      event.preventDefault();

      const message = `
Hello MRE,

I would like to make an enquiry.

Name: ${contactForm.name}
Phone: ${contactForm.phone}
Email: ${contactForm.email}
Interest: ${contactForm.interest}

Message:
${contactForm.message}
      `.trim();

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(
          message
        );

      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer'
      );

      setContactForm({
        name: '',
        phone: '',
        email: '',
        interest: '',
        message: '',
      });

      setShowContactForm(false);

    };

  // ==========================================================
  // NEWSLETTER
  // ==========================================================

  const handleNewsletter =
    (event) => {

      event.preventDefault();

      if (
        !newsletterEmail.trim()
      ) {

        setNewsletterMessage(
          'Please enter your email address.'
        );

        return;

      }

      setNewsletterMessage(
        'Thank you! You have subscribed to MRE updates.'
      );

      setNewsletterEmail('');

    };

  // ==========================================================
  // SCROLL TO SECTION
  // ==========================================================

  const scrollToSection =
    (id) => {

      setMenuOpen(false);

      const element =
        document.getElementById(id);

      if (element) {

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

      }

    };

  // ==========================================================
  // SCROLL TO TOP
  // ==========================================================

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };

  // ==========================================================
  // MAIN RENDER
  // ==========================================================

  return (

    <div className="app">

      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <div className="top-bar">

        <div className="container top-bar-inner">

          <div className="top-bar-left">

            <span>
              📍 Lavington, Nairobi
            </span>

            <span>
              🕐 Monday – Friday
            </span>

          </div>

          <div className="top-bar-right">

            <a href={`tel:${PHONE}`}>
              📞 {INTERNATIONAL_PHONE}
            </a>

            <a href={`mailto:${EMAIL}`}>
              ✉️ {EMAIL}
            </a>

          </div>

        </div>

      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="header">

        <div className="container header-inner">

          <button
            className="brand"
            onClick={() =>
              scrollToSection('home')
            }
          >

            <div className="logo-container">

              <img
                src={logo}
                alt="Mirage MRE"
                className="logo-img"
              />

            </div>

            <div className="brand-copy">

              <strong>
                MIRAGE
              </strong>

              <span>
                MRE
              </span>

            </div>

          </button>

          <nav
            className={`nav ${
              menuOpen
                ? 'nav-open'
                : ''
            }`}
          >

            <button
              onClick={() =>
                scrollToSection(
                  'home'
                )
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'properties'
                )
              }
            >
              Properties
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'what-we-do'
                )
              }
            >
              What We Do
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'about'
                )
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'contact'
                )
              }
            >
              Contact
            </button>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              className="nav-list-property"
            >
              Contact Us
            </a>

          </nav>

          <div className="header-actions">

            <a
              href={`tel:${PHONE}`}
              className="header-call"
            >
              📞
              <span>
                Call
              </span>
            </a>

            <button
              className="menu-button"
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              aria-label="Open menu"
            >
              {menuOpen
                ? '×'
                : '☰'}
            </button>

          </div>

        </div>

      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-overlay" />

        <div className="container hero-content">

          <div className="hero-badge">
            🏢 MRE | Commercial Real Estate
          </div>

          <h1>

            Building Spaces
            <span>
              That Work
            </span>
            For Everyone

          </h1>

          <p>
            We acquire, create and operate
            high-performing retail and office
            spaces that enhance communities
            and create lasting value.
          </p>

          <div className="hero-buttons">

            <button
              className="btn btn-primary btn-large"
              onClick={() =>
                scrollToSection(
                  'properties'
                )
              }
            >
              Explore Our Spaces
            </button>

            <button
              className="btn btn-light btn-large"
              onClick={() =>
                setShowContactForm(
                  true
                )
              }
            >
              Contact Us
            </button>

          </div>

          <div className="hero-trust">

            <div>
              <strong>
                RETAIL
              </strong>

              <span>
                High-Performance Spaces
              </span>
            </div>

            <div>
              <strong>
                OFFICE
              </strong>

              <span>
                Modern Workspaces
              </span>
            </div>

            <div>
              <strong>
                MRE
              </strong>

              <span>
                Built For Tomorrow
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          QUICK SEARCH
      ====================================================== */}

      <section className="quick-search-section">

        <div className="container">

          <div className="quick-search">

            <div className="search-box">

              <span>
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search office spaces, retail spaces or locations..."
              />

            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(
                  event.target.value
                )
              }
            >

              <option value="All">
                All Spaces
              </option>

              <option value="Office">
                Office
              </option>

              <option value="Retail">
                Retail
              </option>

            </select>

            <select
              value={locationFilter}
              onChange={(event) =>
                setLocationFilter(
                  event.target.value
                )
              }
            >

              <option>
                All Locations
              </option>

              {locations.map(
                (location) => (

                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>

                )
              )}

            </select>

            <button
              className="btn btn-primary"
              onClick={() =>
                scrollToSection(
                  'properties'
                )
              }
            >
              Explore
            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat-item">

            <span className="stat-icon">
              🏢
            </span>

            <strong>
              Retail
            </strong>

            <span>
              High-Performance Spaces
            </span>

          </div>

          <div className="stat-item">

            <span className="stat-icon">
              💼
            </span>

            <strong>
              Office
            </strong>

            <span>
              Business Workspaces
            </span>

          </div>

          <div className="stat-item">

            <span className="stat-icon">
              📍
            </span>

            <strong>
              Nairobi
            </strong>

            <span>
              Kenya
            </span>

          </div>

          <div className="stat-item">

            <span className="stat-icon">
              📈
            </span>

            <strong>
              Long-Term
            </strong>

            <span>
              Value Creation
            </span>

          </div>

        </div>

      </section>

      {/* ======================================================
          FEATURED PROPERTIES
      ====================================================== */}

      <section className="featured-section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                OUR SPACES
              </span>

              <h2>
                Featured Properties
              </h2>

              <p>
                Discover commercial environments
                designed for businesses,
                customers and communities.
              </p>

            </div>

            <button
              className="btn btn-outline-dark"
              onClick={() =>
                scrollToSection(
                  'properties'
                )
              }
            >
              View All Spaces →
            </button>

          </div>

          <div className="featured-grid">

            {featuredProperties.map(
              (property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(
                    property.id
                  )}
                  onFavorite={
                    toggleFavorite
                  }
                  onView={
                    setSelectedProperty
                  }
                />

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          WHO WE ARE
      ====================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="container about-grid">

          <div className="about-image">

            <img
              src={house2}
              alt="MRE commercial real estate"
            />

            <div className="about-floating-card">

              <strong>
                MRE
              </strong>

              <span>
                Commercial Real Estate
              </span>

            </div>

          </div>

          <div className="about-content">

            <span className="eyebrow">
              WHO WE ARE
            </span>

            <h2>
              Creating Spaces
              <span>
                That Add Value
              </span>
            </h2>

            <p>
              We acquire, create and operate
              high-performing retail and office
              spaces.
            </p>

            <p>
              MRE buys, builds, and manages
              high-demand real estate assets
              that add community value, deliver
              strong shareholder returns, and
              are expertly operated to foster
              seamless collaboration among all
              stakeholders.
            </p>

            <div className="about-role">

              <div className="role-icon">
                🏢
              </div>

              <div>

                <strong>
                  Commercial Real Estate
                </strong>

                <span>
                  MRE
                </span>

              </div>

            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(
                  true
                )
              }
            >
              Talk To MRE
            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          WHAT WE DO
      ====================================================== */}

      <section
        id="what-we-do"
        className="services-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Building Better
              Commercial Destinations
            </h2>

            <p>
              We focus on acquiring, creating
              and operating real estate assets
              that perform today and adapt for
              tomorrow.
            </p>

          </div>

          <div className="services-grid">

            {services.map(
              (service) => (

                <div
                  className="service-card"
                  key={
                    service.title
                  }
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <button
                    onClick={() =>
                      setShowContactForm(
                        true
                      )
                    }
                  >
                    Learn More →
                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          VISION & MISSION
      ====================================================== */}

      <section className="why-section">

        <div className="container why-grid">

          <div className="why-content">

            <span className="eyebrow">
              WHAT DRIVES US
            </span>

            <h2>
              Purpose Today.
              <br />
              <span>
                Value Tomorrow.
              </span>
            </h2>

            <p>
              At the heart of our work lies
              a clear purpose and
              forward-looking vision.
            </p>

            <p>
              Our mission and vision guide
              every development, ensuring
              that each project delivers
              long-term value, innovation
              and impact.
            </p>

            <div className="why-list">

              <div className="why-item">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Our Vision
                  </strong>

                  <p>
                    {vision}
                  </p>

                </div>

              </div>

              <div className="why-item">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Our Mission
                  </strong>

                  <p>
                    {mission}
                  </p>

                </div>

              </div>

            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(
                  true
                )
              }
            >
              Connect With Us
            </button>

          </div>

          <div className="why-card">

            <div className="why-card-inner">

              <div className="big-logo">

                <img
                  src={logo}
                  alt="MRE logo"
                />

              </div>

              <h3>
                MIRAGE
                <br />
                MRE
              </h3>

              <p>
                Retail • Office • Real Estate
              </p>

              <div className="why-card-line" />

              <strong>
                Lavington, Nairobi
              </strong>

              <a
                href={`tel:${PHONE}`}
              >
                {INTERNATIONAL_PHONE}
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          PROPERTIES
      ====================================================== */}

      <section
        id="properties"
        className="listings-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              OUR PORTFOLIO
            </span>

            <h2>
              Explore Our Spaces
            </h2>

            <p>
              Discover retail and office
              environments designed to support
              people and businesses.
            </p>

          </div>

          <div className="filter-panel">

            <div className="filter-search">

              <label>
                Search
              </label>

              <input
                type="text"
                placeholder="Space or location..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
              />

            </div>

            <div className="filter-field">

              <label>
                Type
              </label>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(
                    event.target.value
                  )
                }
              >

                <option value="All">
                  All
                </option>

                <option value="Office">
                  Office
                </option>

                <option value="Retail">
                  Retail
                </option>

              </select>

            </div>

            <div className="filter-field">

              <label>
                Location
              </label>

              <select
                value={
                  locationFilter
                }
                onChange={(event) =>
                  setLocationFilter(
                    event.target.value
                  )
                }
              >

                <option>
                  All Locations
                </option>

                {locations.map(
                  (location) => (

                    <option
                      key={location}
                      value={location}
                    >
                      {location}
                    </option>

                  )
                )}

              </select>

            </div>

            <div className="filter-field">

              <label>
                Sort
              </label>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value
                  )
                }
              >

                <option value="Featured">
                  Featured
                </option>

                <option value="Newest">
                  Latest
                </option>

              </select>

            </div>

            <button
              className="reset-button"
              onClick={
                resetFilters
              }
            >
              Reset
            </button>

          </div>

          <div className="results-header">

            <p>
              Showing{' '}
              <strong>
                {filteredProperties.length}
              </strong>{' '}
              spaces
            </p>

            <p>
              {favorites.length > 0
                ? `♥ ${favorites.length} saved`
                : '♡ No saved spaces'}
            </p>

          </div>

          {filteredProperties.length >
          0 ? (

            <div className="property-grid">

              {filteredProperties.map(
                (property) => (

                  <PropertyCard
                    key={
                      property.id
                    }
                    property={
                      property
                    }
                    isFavorite={favorites.includes(
                      property.id
                    )}
                    onFavorite={
                      toggleFavorite
                    }
                    onView={
                      setSelectedProperty
                    }
                  />

                )
              )}

            </div>

          ) : (

            <div className="empty-state">

              <div className="empty-icon">
                🔎
              </div>

              <h3>
                No spaces found
              </h3>

              <p>
                Try changing your
                search or location.
              </p>

              <button
                className="btn btn-primary"
                onClick={
                  resetFilters
                }
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section className="process-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2>
              From Opportunity
              To Performance
            </h2>

          </div>

          <div className="process-grid">

            <div className="process-step">

              <div className="process-number">
                01
              </div>

              <div className="process-icon">
                🔎
              </div>

              <h3>
                Acquire
              </h3>

              <p>
                We identify high-demand
                real estate opportunities
                with strong potential.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                02
              </div>

              <div className="process-icon">
                🏗️
              </div>

              <h3>
                Create
              </h3>

              <p>
                We develop robust spaces
                designed around people,
                businesses and communities.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                03
              </div>

              <div className="process-icon">
                ⚙️
              </div>

              <h3>
                Operate
              </h3>

              <p>
                We professionally manage
                our assets to deliver
                seamless experiences.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                04
              </div>

              <div className="process-icon">
                📈
              </div>

              <h3>
                Create Value
              </h3>

              <p>
                We focus on long-term
                performance, tenant success
                and community impact.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="cta-section">

        <div className="container cta-content">

          <div>

            <span className="eyebrow">
              WORK WITH MRE
            </span>

            <h2>
              Let's Create Spaces
              That Perform.
            </h2>

            <p>
              Whether you are a business,
              tenant, investor or development
              partner, connect with our team.
            </p>

          </div>

          <div className="cta-buttons">

            <a
              href={`tel:${PHONE}`}
              className="btn btn-light"
            >
              📞 {INTERNATIONAL_PHONE}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="testimonials-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              OUR STAKEHOLDERS
            </span>

            <h2>
              What People Say
            </h2>

            <p>
              We believe successful real estate
              is built around strong relationships,
              collaboration and shared value.
            </p>

          </div>

          <div className="testimonials-grid">

            {testimonials.map(
              (testimonial) => (

                <article
                  className="testimonial-card"
                  key={
                    testimonial.id
                  }
                >

                  <div className="quote-mark">
                    “
                  </div>

                  <StarRating
                    rating={
                      testimonial.rating
                    }
                  />

                  <p>
                    {
                      testimonial.text
                    }
                  </p>

                  <div className="testimonial-author">

                    <div className="author-avatar">
                      {testimonial.name.charAt(
                        0
                      )}
                    </div>

                    <div>

                      <strong>
                        {
                          testimonial.name
                        }
                      </strong>

                      <span>
                        {
                          testimonial.role
                        }
                      </span>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          SOCIAL / DIGITAL PRESENCE
      ====================================================== */}

      <section className="social-section">

        <div className="container">

          <div className="social-heading">

            <span className="eyebrow">
              CONNECT WITH MRE
            </span>

            <h2>
              Follow Our Journey
            </h2>

            <p>
              Stay connected with MRE for
              property updates, developments,
              commercial opportunities and
              company news.
            </p>

          </div>

          <div className="social-grid">

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card youtube"
            >

              <span>
                💼
              </span>

              <div>

                <strong>
                  LinkedIn
                </strong>

                <p>
                  MRE
                </p>

              </div>

              <b>
                →
              </b>

            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card instagram"
            >

              <span>
                📷
              </span>

              <div>

                <strong>
                  Instagram
                </strong>

                <p>
                  MRE
                </p>

              </div>

              <b>
                →
              </b>

            </a>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card tiktok"
            >

              <span>
                ▶️
              </span>

              <div>

                <strong>
                  YouTube
                </strong>

                <p>
                  MRE
                </p>

              </div>

              <b>
                →
              </b>

            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="faq-section">

        <div className="container faq-grid">

          <div className="faq-intro">

            <span className="eyebrow">
              FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Learn more about MRE, our
              spaces and how we create
              long-term value.
            </p>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(
                  true
                )
              }
            >
              Ask Us A Question
            </button>

          </div>

          <div className="faq-list">

            {faqData.map(
              (faq, index) => (

                <div
                  className={`faq-item ${
                    activeFaq === index
                      ? 'faq-active'
                      : ''
                  }`}
                  key={
                    faq.question
                  }
                >

                  <button
                    onClick={() =>
                      setActiveFaq(
                        activeFaq ===
                          index
                          ? null
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <b>
                      {activeFaq ===
                      index
                        ? '−'
                        : '+'}
                    </b>

                  </button>

                  {activeFaq ===
                    index && (

                    <div className="faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          NEWSLETTER
      ====================================================== */}

      <section className="newsletter-section">

        <div className="container newsletter-box">

          <div>

            <span className="eyebrow">
              MRE UPDATES
            </span>

            <h2>
              Stay Connected
            </h2>

            <p>
              Subscribe for updates about
              our developments, commercial
              spaces and opportunities.
            </p>

          </div>

          <form
            className="newsletter-form"
            onSubmit={
              handleNewsletter
            }
          >

            <input
              type="email"
              placeholder="Your email address"
              value={
                newsletterEmail
              }
              onChange={(event) =>
                setNewsletterEmail(
                  event.target.value
                )
              }
            />

            <button
              className="btn btn-primary"
              type="submit"
            >
              Subscribe
            </button>

            {newsletterMessage && (

              <span className="newsletter-message">
                {
                  newsletterMessage
                }
              </span>

            )}

          </form>

        </div>

      </section>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              CONTACT MRE
            </span>

            <h2>
              Let's Talk
            </h2>

            <p>
              Have a question about our
              commercial spaces, partnerships
              or opportunities? Get in touch.
            </p>

          </div>

          <div className="contact-grid">

            <div className="contact-info">

              <div className="contact-info-card">

                <div className="contact-icon">
                  📞
                </div>

                <div>

                  <span>
                    Call Us
                  </span>

                  <a
                    href={`tel:${PHONE}`}
                  >
                    {INTERNATIONAL_PHONE}
                  </a>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  ✉️
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <a
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  📍
                </div>

                <div>

                  <span>
                    Address
                  </span>

                  <strong>
                    Tuwork Park,
                    <br />
                    Olenguruone Road,
                    <br />
                    Lavington,
                    <br />
                    Nairobi, Kenya.
                  </strong>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  🏢
                </div>

                <div>

                  <span>
                    Company
                  </span>

                  <strong>
                    Mirage — MRE
                  </strong>

                </div>

              </div>

            </div>

            <div className="contact-form-card">

              <h3>
                Send An Enquiry
              </h3>

              <p>
                Tell us how we can assist you.
              </p>

              <form
                onSubmit={
                  submitContact
                }
              >

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={
                        contactForm.name
                      }
                      onChange={
                        handleContactChange
                      }
                      placeholder="Your name"
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      value={
                        contactForm.phone
                      }
                      onChange={
                        handleContactChange
                      }
                      placeholder="Your phone"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      contactForm.email
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Your email"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Interest
                  </label>

                  <select
                    name="interest"
                    value={
                      contactForm.interest
                    }
                    onChange={
                      handleContactChange
                    }
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option>
                      Office Space
                    </option>

                    <option>
                      Retail Space
                    </option>

                    <option>
                      Property Investment
                    </option>

                    <option>
                      Partnership
                    </option>

                    <option>
                      General Enquiry
                    </option>

                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={
                      contactForm.message
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Tell us how we can help..."
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                >
                  💬 Send Via WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <div className="footer-logo-box">

              <img
                src={logo}
                alt="MRE"
              />

            </div>

            <h3>
              MIRAGE
            </h3>

            <p>
              MRE
            </p>

            <p>
              We acquire, create and operate
              high-performing retail and office
              spaces.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Quick Links
            </h4>

            <button
              onClick={() =>
                scrollToSection(
                  'home'
                )
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'properties'
                )
              }
            >
              Properties
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'what-we-do'
                )
              }
            >
              What We Do
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'about'
                )
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'contact'
                )
              }
            >
              Contact
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Our Focus
            </h4>

            <button
              onClick={() => {
                setFilter(
                  'Office'
                );

                scrollToSection(
                  'properties'
                );
              }}
            >
              Office Spaces
            </button>

            <button
              onClick={() => {
                setFilter(
                  'Retail'
                );

                scrollToSection(
                  'properties'
                );
              }}
            >
              Retail Spaces
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'what-we-do'
                )
              }
            >
              Property Development
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  'about'
                )
              }
            >
              Our Vision
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Contact
            </h4>

            <a
              href={`tel:${PHONE}`}
            >
              📞 {INTERNATIONAL_PHONE}
            </a>

            <a
              href={`mailto:${EMAIL}`}
            >
              ✉️ {EMAIL}
            </a>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
            >
              📍 Lavington, Nairobi
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container footer-bottom-inner">

            <p>
              © {new Date().getFullYear()}{' '}
              Mirage — MRE.
              All rights reserved.
            </p>

            <p>
              Retail • Office • Real Estate
            </p>

          </div>

        </div>

      </footer>

      {/* ======================================================
          PROPERTY DETAILS MODAL
      ====================================================== */}

      <PropertyModal
        property={
          selectedProperty
        }
        onClose={() =>
          setSelectedProperty(
            null
          )
        }
      />

      {/* ======================================================
          CONTACT MODAL
      ====================================================== */}

      {showContactForm && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowContactForm(
              false
            )
          }
        >

          <div
            className="form-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowContactForm(
                  false
                )
              }
            >
              ×
            </button>

            <div className="modal-form-header">

              <span className="eyebrow">
                CONTACT MRE
              </span>

              <h2>
                Let's Talk
              </h2>

              <p>
                Tell us what you are
                interested in and we'll
                connect with you.
              </p>

            </div>

            <form
              onSubmit={
                submitContact
              }
              className="modal-form"
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={
                      contactForm.name
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Your full name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={
                      contactForm.phone
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="0768..."
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    contactForm.email
                  }
                  onChange={
                    handleContactChange
                  }
                  placeholder="you@example.com"
                />

              </div>

              <div className="form-group">

                <label>
                  What are you interested in?
                </label>

                <select
                  name="interest"
                  value={
                    contactForm.interest
                  }
                  onChange={
                    handleContactChange
                  }
                >

                  <option value="">
                    Choose an option
                  </option>

                  <option>
                    Office Space
                  </option>

                  <option>
                    Retail Space
                  </option>

                  <option>
                    Property Investment
                  </option>

                  <option>
                    Partnership
                  </option>

                  <option>
                    General Enquiry
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  value={
                    contactForm.message
                  }
                  onChange={
                    handleContactChange
                  }
                  placeholder="Tell us about your enquiry..."
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
              >
                💬 Send To WhatsApp
              </button>

            </form>

          </div>

        </div>

      )}

      {/* ======================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with MRE on WhatsApp"
      >
        💬
      </a>

      {/* ======================================================
          SCROLL TO TOP
      ====================================================== */}

      {showTopButton && (

        <button
          className="scroll-top"
          onClick={
            scrollToTop
          }
          aria-label="Scroll to top"
        >
          ↑
        </button>

      )}

    </div>
  );
}

export default App;