

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 hidden text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                {[
                  'Data Science & AI',
                  'Product Management',
                  'Business Analytics',
                  'Digital Transformation',
                  'Business Management',
                  'Project Management',
                  'Strategy & Leadership',
                  'Senior Management',
                  'Fintech',
                ].map((program) => (
                  <li key={program}>
                    <a href="#" className="hover:underline text-sm">{program}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  Email us (For Data Science Queries):{' '}
                  <a href="mailto:admissions@accredian.com" className="hover:underline">
                    admissions@accredian.com
                  </a>
                </li>
                <li>
                  Email us (For Product Management Queries):{' '}
                  <a href="mailto:pm@accredian.com" className="hover:underline">
                    pm@accredian.com
                  </a>
                </li>
                <li>
                  Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
                </li>
                <li>
                  Product Management Admission Helpline: +91 9625811095
                </li>
                <li>Enrolled Student Helpline: +91 7969322507</li>
                <li>
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Why Accredian</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Career</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Admission Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Referral Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms Of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Master FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              <span>&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:underline">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:underline">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:underline">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:underline">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <img src="/footer.png" className="w-full" />
    </div>
  )
}

export default Footer
