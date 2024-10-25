Web Up project: an SAAS Website Builder
Sources for Learning the Programming Languages:
Next.js: YouTube course on Next.js 14
Prisma (to connect Next.js with MySQL): YouTube tutorial on Prisma
Rationale for Choosing the Programming Languages:
The programming stack was chosen based on both practical experience and team input. Next.js was recommended by our instructor, Mr. Yasser, during class, making it a logical choice for our front-end development. We opted for MySQL for the back-end database since it was covered in our Level 2 (L2) coursework, allowing us to save time by leveraging existing knowledge. To bridge Next.js with MySQL, we selected Prisma, given its popularity and efficient ORM capabilities.

(Note: we use AI after writing to make the text more professional and to add some information that we may have missed + Grammarly to correct our writing)
Additionally, Bun was introduced into the stack based on a suggestion from a team member, Ilias, who advocated for it as a newer, faster, and more efficient solution for managing JavaScript and TypeScript projects. Although some team members initially disagreed, the team leader approved its use after Ilias took responsibility for implementing and managing Bun, seeing it as an opportunity to expand the team's expertise.

websites we used to pick the web design and to help us gather informations: https://statichunt.com/nextjs-templates ; https://vercel.com/templates/next.js ; https://www.wrappixel.com/templates/category/nextjs-templates/

List of Features (This is not final result we may add or remove some features according to its difficulty and time):

🌍 Multivendor B2B2B SaaS Platform
🏢 Agency and Sub Accounts Management
🚀 Website & Funnel Builder
🎯 Role-based Access Control
💳 Stripe Subscription and Add-on Products
🔗 Stripe Connect for User Payments
💵 Charge Application Fees on Sales
📊 Customizable Dashboards
🖼️ Media Storage for Users
📈 Stripe Product Sync
🛍️ Custom Checkouts for Funnels
📧 Lead Generation from Funnels
🧾 Project Management System (Kanban Board)
📅 Funnel Performance Metrics
📉 Agency and Sub-account Metrics
🌑 Light & Dark Mode
🎨 Functioning Landing Page
📈 Graph and Chart Integrations

Multivendor B2B2B SaaS Platform
A multivendor system allows users to operate multiple vendors (or businesses) within one platform. This setup can be highly advantageous for users who manage multiple business partners, clients, or sub-businesses under a single system. It supports scalability, making it useful for agencies or large businesses that handle various clients.
Agency and Sub Accounts Management
Agencies can easily create and manage sub-accounts for their clients or teams. This hierarchical setup helps segment responsibilities and billing while offering control over what each account can access, streamlining management for large organizations with multiple teams or departments.
Website & Funnel Builder
Users can build and manage their websites and sales funnels directly on the platform without needing to switch between different tools. This enables marketers and businesses to create conversion-optimized sales funnels and full websites with ease, reducing the technical barrier for non-developers.
Role-based Access Control
Ensures that users with different roles (e.g., admins, managers, clients) can access only the features and data they are authorized for. This provides a high level of security, data segregation, and helps prevent accidental data modifications by unauthorized users.
Stripe Subscription and Add-on Products
Integrated Stripe subscriptions and add-on products allow for seamless billing and revenue management. Users can easily handle recurring payments for subscription-based models, and the add-on feature allows businesses to upsell additional services or products without complicated payment processes.
Stripe Connect for User Payments
Stripe Connect allows users to manage payments for different accounts, which is particularly useful for marketplaces, agencies, or SaaS platforms that process payments on behalf of others. Users can seamlessly connect their Stripe accounts and receive payments without complex integration.
Charge Application Fees on Sales
By charging application fees on sales, the platform can generate additional revenue on top of standard subscription fees. Users benefit from having a simple way to implement and collect fees from their customers, such as per transaction or recurring sales fees, without needing third-party tools.
Customizable Dashboards
A customizable dashboard enables users to view relevant data and metrics in a way that suits their business needs. This feature improves productivity by providing users with immediate insights into their performance, tasks, or other key data without needing to navigate different parts of the app.
Media Storage for Users
Users can store and manage images, documents, or other media files within the platform itself. This is essential for businesses or agencies working with media-heavy projects (like e-commerce or content creation), reducing reliance on external storage services and ensuring faster access.
Stripe Product Sync
Syncing products with Stripe automates the payment workflow. Users won’t need to manually input or update products, making it easier to manage product inventories, pricing, and availability in real-time. This is especially helpful for businesses that sell multiple products or services.
Custom Checkouts for Funnels
Custom checkout pages allow users to tailor the payment experience for their clients. By adjusting the checkout flow, users can optimize the process for higher conversions, personalizing it according to their target audience's needs and preferences.
Lead Generation from Funnels
Sales funnels are a powerful way to convert visitors into leads and customers. This feature enables users to automate lead generation, which helps businesses capture, track, and manage potential customers more effectively.
Project Management System (Kanban Board)
A built-in project management system allows users to organize and track their tasks efficiently. The Kanban board layout is visually intuitive, making it easier to prioritize work, assign tasks, and track project progress in real-time.
Funnel Performance Metrics
Performance metrics offer critical insights into the effectiveness of sales funnels. Users can analyze key data like conversion rates, bounce rates, and ROI, allowing them to refine and optimize their funnels to increase sales and lead generation.
Agency and Sub-account Metrics
This feature helps agencies and businesses track the performance of sub-accounts, providing valuable data on user activity, revenue, and other key metrics. It ensures transparency and accountability across different accounts within the system.
Light & Dark Mode
Offering light and dark modes enhances user experience by providing a customizable interface that can be adjusted based on personal preferences or lighting conditions. This improves usability and reduces eye strain, especially for users working long hours.
Graph and Chart Integrations
Visual representations of data through graphs and charts make it easier for users to understand performance metrics, track progress, and analyze trends. This is essential for making informed, data-driven decisions in real-time.
Functioning Landing Page
A fully functional landing page allows users to engage customers immediately upon visiting the platform, highlighting key services or features. It plays a crucial role in conversions and provides a professional first impression.
Frontend Development:
Next.js 14 Project Setup: Initiate the project and structure it to ensure it's optimized for performance and scalability.

Next.js 14 Authentication: Secure the application by implementing user authentication to handle logins and ensure only authorized users can access sensitive areas.

Landing Page Development: Build the landing page to serve as the first interaction point for users, focusing on branding and capturing attention immediately.

Building Forms in Next.js 14: Implement robust and user-friendly forms to collect customer information, ensuring smooth data flow from frontend to backend.

Uploading Images: Enable users to upload and manage media files seamlessly within the application, enhancing user experience.

Building Redux/Zustand natively: Handle global state management within the app without external libraries, ensuring the app's reactivity and performance.

Challenge Yourself - Route Segments: Implement complex routing for the agency section, improving navigation and the user experience.

Sidebar & Global State: Create a sidebar navigation system linked to the app's global state, providing users with quick and easy access to different features.

Subdomain Setup in Middleware: Implement subdomain handling to manage multiple agencies or clients within the same app instance.

Funnels and Website Builder: Design a user-friendly interface for building websites and funnels, simplifying the creation process for end-users.

Stripe Checkout for Funnels: Integrate Stripe to enable users to handle payments directly through the funnel system.

Backend Development:
Setup Local Database: Establish a local MySQL database that stores all user, product, and transaction data.

Using Prisma in Next.js 14: Use Prisma to interact with the database, ensuring efficient querying and data manipulation.

Subdomains Architecture Explained: Plan and implement the architecture to handle subdomains, ensuring scalability and multi-tenancy.

Building the Sub Account Section: Set up a system that allows agencies to create and manage sub-accounts, enabling organizational control.

Media Storage for Sub Accounts: Implement dedicated media storage for each sub-account, ensuring data segregation and privacy.

Stripe Setup: Configure Stripe to handle payments and billing, integrating it seamlessly with the SaaS platform.

Sub Account Billing Page: Implement a billing page for sub-accounts, facilitating invoice management and recurring payments.

Challenge - Add Pro Features: Introduce advanced features to enhance the SaaS platform’s functionality.

Deployment: Set up the application for deployment, ensuring it runs efficiently in a production environment.
