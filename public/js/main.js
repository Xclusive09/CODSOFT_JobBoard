// Example JavaScript for dynamically adding content
document.addEventListener('DOMContentLoaded', function () {
    // Home Page
    const featuredJobsContainer = document.getElementById('featuredJobs');
    const featuredJobs = ['Software Engineer', 'Web Developer', 'Data Scientist'];
  
    featuredJobs.forEach(job => {
      const li = document.createElement('li');
      li.textContent = job;
      featuredJobsContainer.appendChild(li);
    });
  
    // Job Listings Page
    const jobListingsContainer = document.getElementById('jobListings');
    const jobListings = [
      { title: 'Software Engineer', company: 'ABC Tech', location: 'City' },
      { title: 'Web Developer', company: 'XYZ Solutions', location: 'City' },
      // Add more job listings as needed
    ];
  
    jobListings.forEach(job => {
      const li = document.createElement('li');
      li.innerHTML = `<h3>${job.title}</h3>
                      <p>Company: ${job.company}</p>
                      <p>Location: ${job.location}</p>
                      <a href="job-detail.html">View Details</a>`;
      jobListingsContainer.appendChild(li);
    });
  
    // Job Detail Page
    const jobDetailContainer = document.getElementById('jobDetail');
    const jobDetail = {
      title: ' '
    };  