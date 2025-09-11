'use client'

import { motion } from 'framer-motion'
import { 
  Building, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  TrendingUp,
  Database,
  Cloud,
  Code,
  Users
} from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data & AI Solution Architect',
      company: 'Capgemini',
      location: 'Den Haag, Netherlands',
      duration: 'Jul 2023 - Present',
      type: 'Full-time',
      description: 'Responsible for designing and implementing data pipelines using Azure data stack, focusing on modern data architecture, FinOps practices, and data governance.',
      achievements: [
        'Created and optimized data pipelines using Azure Data Factory, Databricks, and ADLS Gen2',
        'Implemented FinOps concepts to improve cost-efficiency in data architecture',
        'Designed blueprints for data platforms with best practices in data governance and modern data stack',
        'Integrated Data Quality and Unity Catalog for robust data management',
        'Utilized DBT for streamlined data transformations and Azure DevOps for CI/CD'
      ],
      technologies: ['Azure Data Factory', 'Databricks', 'ADLS Gen2', 'SQL', 'Azure DevOps', 'Data Quality', 'Unity Catalog', 'DBT', 'FinOps'],
      icon: Cloud,
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Data Analytics Manager',
      company: 'Americanas S.A.',
      location: 'Remote - Brazil',
      duration: 'Oct 2021 - Jun 2023',
      type: 'Full-time',
      description: 'Managed the data analytics team and led the development of Americanas Data Platform, driving data-driven decision-making through modern data stack solutions.',
      achievements: [
        'Led delivery of data products to democratize data usability across the organization',
        'Implemented scalable data pipelines using modern data stack technologies',
        'Enhanced team productivity through agile methodologies and cross-functional collaboration',
        'Reduced data processing times by optimizing workflows',
        'Fostered a data-driven culture by integrating advanced analytics tools'
      ],
      technologies: ['Apache Airflow', 'Python', 'SQL', 'Data Analytics', 'Modern Data Stack', 'Agile Methodologies'],
      icon: Users,
      color: 'from-green-600 to-green-800'
    },
    {
      title: 'Data Engineer',
      company: 'Datasprints',
      location: 'Remote - Brazil',
      duration: 'Jul 2020 - Oct 2021',
      type: 'Full-time',
      description: 'Developed and managed processes for ingesting data into data lakes and data warehouses, utilizing ETL/ELT tools and orchestration platforms.',
      achievements: [
        'Designed and implemented data ingestion processes using Pentaho and Streamsets',
        'Managed data pipelines with Apache Airflow for efficient orchestration',
        'Developed Python scripts to extract data from APIs',
        'Utilized Git for version control and collaborative development',
        'Ensured high data quality and reliability in data lake operations'
      ],
      technologies: ['Pentaho', 'Streamsets', 'Apache Airflow', 'Python', 'Git', 'Data Lake', 'ETL/ELT'],
      icon: Database,
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Data Engineer - Tech Lead',
      company: 'Parana Bank',
      location: 'Brazil',
      duration: 'Jul 2019 - Jul 2020',
      type: 'Full-time',
      description: 'Served as an AWS consultant for data projects, leading the creation of data lakes for large financial institutions.',
      achievements: [
        'Designed and implemented data lakes using AWS EMR, S3, and Redshift',
        'Utilized AWS Step Functions and API Gateway for workflow automation',
        'Optimized queries with Athena and Glue for efficient data processing',
        'Led cross-functional teams to deliver scalable data solutions',
        'Improved data accessibility for financial analytics'
      ],
      technologies: ['AWS EMR', 'S3', 'EC2', 'API Gateway', 'Step Functions', 'Redshift', 'Athena', 'Glue'],
      icon: Cloud,
      color: 'from-orange-600 to-orange-800'
    },
    {
      title: 'Business Intelligence Analyst',
      company: 'Compwire IT Consulting',
      location: 'Brazil',
      duration: 'Feb 2019 - Jul 2019',
      type: 'Full-time',
      description: 'Led business intelligence projects for marketing and car insurance sectors, applying agile methodologies and BI tools.',
      achievements: [
        'Managed BI projects using MicroStrategy for visualization and PowerCenter for ETL',
        'Applied agile practices including sprint planning, daily scrums, and retrospectives',
        'Developed product backlogs to align with business requirements',
        'Improved decision-making through interactive dashboards',
        'Reduced report generation time by optimizing ETL workflows'
      ],
      technologies: ['MicroStrategy', 'PowerCenter', 'Agile Methodologies', 'ETL', 'Business Intelligence'],
      icon: TrendingUp,
      color: 'from-red-600 to-red-800'
    },
    {
      title: 'Big Data Analyst',
      company: 'Bradesco Bank',
      location: 'Brazil',
      duration: 'Oct 2016 - Apr 2018',
      type: 'Full-time',
      description: 'Provided consulting services for Cloudera, Tableau, and RapidMiner, focusing on installation, administration, and training.',
      achievements: [
        'Installed and configured Cloudera for big data processing',
        'Developed Tableau dashboards for enhanced data visualization',
        'Trained end-users on RapidMiner for predictive analytics',
        'Improved data processing efficiency through optimized workflows',
        'Shared knowledge to empower internal teams with big data tools'
      ],
      technologies: ['Cloudera', 'Tableau', 'RapidMiner', 'Big Data', 'Data Visualization'],
      icon: Database,
      color: 'from-teal-600 to-teal-800'
    },
    {
      title: 'IT Support Analyst',
      company: 'HSBC Global Technology',
      location: 'Brazil',
      duration: 'Jun 2012 - Oct 2016',
      type: 'Full-time',
      description: 'Supported financial services and applications, focusing on troubleshooting Unix systems and databases.',
      achievements: [
        'Resolved complex issues in Unix and database environments (Oracle, SQL Server, Informix, DB2)',
        'Improved system reliability through proactive monitoring',
        'Collaborated with cross-functional teams to support financial applications',
        'Reduced downtime by implementing efficient troubleshooting processes',
        'Gained expertise in database management and system administration'
      ],
      technologies: ['Unix', 'Oracle', 'SQL Server', 'Informix', 'DB2', 'Troubleshooting'],
      icon: Code,
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'IT Trainee & Support Analyst',
      company: 'Multiple Organizations',
      location: 'Curitiba and Paranaguá, Brazil',
      duration: 'Apr 2009 - Jun 2012',
      type: 'Internship/Full-time',
      description: 'Gained foundational IT experience through internships and support roles at different IT Company focusing on database administration and application support.',
      achievements: [
        'Provided support for SAP Business One, including database management',
        'Administered databases as an intern at Horus Informática, enhancing data reliability',
        'Supported IT operations, improving system efficiency',
        'Contributed to IT infrastructure management, ensuring operational continuity',
        'Built foundational skills in IT support and database administration'
      ],
      technologies: ['SAP Business One', 'SQL', 'DB2', 'IT Support'],
      icon: Code,
      color: 'from-cyan-600 to-cyan-800'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 15 years of delivering data-driven solutions for financial and enterprise applications
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
                role="listitem"
              >
                {/* Timeline Icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 border-4 border-primary-600 rounded-full z-10">
                  {<exp.icon className="w-8 h-8 text-primary-600" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                        <div className="flex items-center space-x-1 text-primary-600 dark:text-primary-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Specializing in Azure data stack solutions, FinOps-driven data architecture, and modern data platforms with a focus on governance and scalability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience