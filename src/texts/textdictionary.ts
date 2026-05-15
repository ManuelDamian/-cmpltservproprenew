import commercialImg from "../../public/services/service1.avif";
import emergencyImg from "../../public/services/service2.avif";
import plumbingImg from "../../public/services/service3.avif";
import constructionImg from "../../public/services/service4.avif";
import contractImg from "../../public/services/service5.avif";

export const SITE_TEXT = {
  home: {
    serviceLine: "24 HOUR SERVICE LINE (714) 924-5434",
    slogan: '"PROVIDING FIRST CLASS SERVICE AND WORLD CLASS RESULTS"',
    welcome: "WELCOME TO COMPLETE PROPERTY SERVICES",
    subtitle: "Your 24 Hour Property Services Solutions Provider",
    description: "Complete Property Services is a trustworthy service provider that prides itself on complete customer satisfaction. Our organization is your single source solutions provider within the commercial real estate maintenance industry. We provide office, retail, industrial, financial, healthcare and multi-tenant commercial real estate owners and managers with world-class quality and customer service. We are the technical support specialists when it comes to maintenance, repair and reoccurring services. Let Complete Property Services be the go-to provider for your day-to-day service calls, emergencies and facility improvements. Our clients are an extension of our organization and we value long-term relationships!"
  },
  about: {
    sectionTitle: "ABOUT US",
    title: "Who We Are",
    description: "If you're in need of improvement projects, maintenance and repairs for your property, consider working with Complete Property Services. For each of your service needs, we have experienced professionals that will handle your project with detail and care. Let us know what you want, we’ll do our best to make it happen with a smile 'can-do' attitude."
  },
  promise: {
    header: "FOR EACH OF YOUR SERVICE NEEDS WE HAVE...",
    items: [
      {
        title: "PROPERTY SERVICES",
        text: "Providing ongoing maintenance is the best way to preserve value. Let us be your eyes and ears for your property."
      },
      {
        title: "EMERGENCY SERVICES - 24 HOUR ASSISTANCE",
        text: "Plumbing, Roof Leaks, Underground Leaks, Board-Up and Temporary Shoring, Other Services As Needed"
      },
      {
        title: "PLUMBING SERVICES",
        text: "Main Line Stoppages, Water Heaters, Fixture Replacement and Leak Repairs, Other Services As Needed."
      },
      {
        title: "CONSTRUCTION SERVICES",
        text: "From conceptual to completion Renovation, Vanilla Shell and Tenant Improvement Services."
      },
      {
        title: "CONTRACT SERVICES",
        text: "Let our team of qualified individuals be an extension for your properties. Day Porter, Janitorial, Power Washing & Steam Cleaning, Window Washing and Engineering Maintenance Services."
      }
    ]
  },
  services: {
    title: "SERVICES PROVIDED",
    subtitle: "What We Can Do For You",
    description: "Complete Property Services is a full-service commercial property repair, maintenance and reoccurring services provider based in California...",
    categories: [
      {
        image: commercialImg,
        name: "COMMERCIAL PROPERTY SERVICES",
        details: "Handyman Tradesman Services, Graffiti Removal, Signage Repair & Replacement, Property Clean-Up, Painting, Drywall, Stucco, Parking Lot Repairs, Concrete, Pavers, Asphalt, Flooring, Doors, Windows, Glazing, Millwork, Roof Repair, Welding, Floor Care, Power Washing, Janitorial and Maintenance Services"
      },
      {
        image: emergencyImg,
        name: "EMERGENCY SERVICES",
        details: "Building Board-Up, Property Clean-Up, Window Board-Up, Temporary Shoring, Flood Services, Build-Back, Illegal Dumping and Janitorial Services. Other services, as needed"
      },
      {
        image: plumbingImg,
        name: "PLUMBING SERVICES",
        details: "Maintenance, Repairs and Services: Water Heaters, Water Filters, Fixtures, Re-Pipes, Rooter Service, Sewer Repair and Maintenance , Hydro Jetting, Sewer Camera Services, Backflow Services and Irrigation Repair /Underground Leak Repair"
      },
      {
        image: constructionImg,
        name: "CONSTRUCTION SERVICES",
        details: "Tenant Improvement, Vanilla Shell, Design Builds, Development, Estimating and Budgeting Allocation Services and Property Walk Inspection Reporting and Recording"
      },
      {
        image: contractImg,
        name: "CONTRACT SERVICES",
        details: "Day Porter Services, Power Washing & Steam Cleaning, Parking Lot Sweeping. Commercial Window Washing, Commercial Property Engineering Services, Commercial Handyman, Commercial Asphalt & Concrete Maintenance and annual/biannual Property Walk Inspection Reporting"
      }
    ]
  },
  contact: {
    title: "CONTACT US",
    subtitle: "Single source solutions Maintenance and Construction Team across the state of California",
    description: "Get in touch with COMPLETE PROPERTY SERVICES to learn more.",
    phone: "(714) 924-5434",
    email: "SERVICE@COMPLETEPROPSERV.COM",
    address: "26895 Aliso Creek Rd. B-1051, Aliso Viejo, CA. 92656",
    license: "General B and C36: 1066194",
    copyright: "Copyright © 2020 by Complete Property Services"
  }
} as const;