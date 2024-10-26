import {
    monimana,
    protoauto,
    virtucloud,
    computer,
    json,
    yaml,
    go,
    powershell,
    kubernetes,
    github1,
    ansible,
    mysql,
    mongodb,
    git,
    python,
    bash,
    docker,
    vmware,
    hyperv,
    solarwinds,
    cisco,
    aws,
    googlecloud,
    azure,
    vagrant,
    apple,
    linux,
    windows,
    //meta,
    jcizzo,
    //tesla,
    //shopify,
    pong,
    //jobit,
    //tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Network Monitoring & Management Tools",
      icon: monimana,
    },
    {
      title: "Network Protocols & Automation",
      icon: protoauto,
    },
    {
      title: "Virtualization & Cloud Computing",
      icon: virtucloud,
    },
    {
      title: "Network Design & Architecture",
      icon: computer,
    },
  ];
  
  const technologies = [
    {
      name: "GO",
      icon: go,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Bash",
      icon: bash,
    },
    {
      name: "PowerShell",
      icon: powershell,
    },
    {
      name: "JSON",
      icon: json,
    },
    {
      name: "YAML",
      icon: yaml,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Github",
      icon: github1,
    },
    {
      name: "Ansible",
      icon: ansible,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "VMware",
      icon: vmware,
    },
    {
      name: "Hyper-v",
      icon: hyperv,
    },
    {
      name: "SolarWinds",
      icon: solarwinds,
    },
    {
      name: "Cisco",
      icon: cisco,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Google Cloud",
      icon: googlecloud,
    },
    {
      name: "Microsft Azure",
      icon: azure,
    },
    {
      name: "Vagrant",
      icon: vagrant,
    },
    {
      name: "Apple",
      icon: apple,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Windows",
      icon: windows,
    },
  ];
  
  const experiences = [
    {
      title: "System and Network Administrator",
      company_name: "Collège Jean-Claude Izzo",
      icon: jcizzo,
      iconBg: "#383E56",
      date: "May 2024 - June 2024",
      points: [
        "Patchbay management and doing Desktop mastering in all the company.",
        "Deployment of workstations and software within the company to ensure that all computer workstations are operational.",
        "Troubleshooting and resolving bugs, as well as managing IT assets and associated tickets.",
        "Participating in IT reviews and providing constructive feedback to the System and Network Administrator.",
      ],
    },
    /*{
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "Baptiste is competent in his field as well as curious, a great asset to have in your company.",
      name: "Maxime Vasserot",
      designation: "ATI",
      company: "Collège Jean-Claude Izzo",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    /*{
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },*/
  ];
  
  const projects = [
    {
      name: "Pong",
      description:
        "Local Pong game to play, and you don't need an internet to play it.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: pong,
      source_code_link: "https://github.com/baptistecherif/TP2_pong",
    },
    /*{
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };