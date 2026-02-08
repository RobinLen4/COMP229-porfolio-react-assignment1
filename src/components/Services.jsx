export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building customized, responsive and visually appealing websites using HTML, CSS, and JavaScript."
    },
    {
      title: "Mobile App Development",
      description: "Creating exciting mobile applications for Android and iOS using React Native and C#."
    },
    {
      title: "AI & Machine Learning",
      description: "Using the latest AI tools to help you with your development and automation needs."
    },
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}