'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, Calendar } from 'lucide-react'
import { SiMicrosoftazure, SiAmazonaws, SiDatabricks } from 'react-icons/si'

// Define TypeScript interfaces for type safety
interface Credential {
  title: string
  issuer: string
  verifyUrl: string
  icon: React.ComponentType<{ className?: string }>
  date: string
  type: 'education' | 'certification'
}

// Color mapping for issuers
const getGradientClass = (issuer: string): string => {
  switch (issuer) {
    case 'Microsoft':
      return 'from-blue-500 to-blue-700'
    case 'Databricks':
      return 'from-red-500 to-red-700'
    case 'Amazon Web Services':
    case 'Informatica':
      return 'from-yellow-500 to-yellow-700'
    default:
      return 'from-green-500 to-green-700'
  }
}

const EducationAndCertifications = () => {
  // Credential data (education and certifications)
  const credentials: Credential[] = [
    {
      title: 'MBA - Big Data & Analytics',
      issuer: 'Pontifícia Universidade Católica do Paraná',
      date: '2016 - 2017',
      verifyUrl: 'https://drive.google.com/file/d/1eg2xsNOJWo8LdX8kgtcpT03HeiH14TmC/view?usp=sharing',
      icon: Award,
      type: 'education',
    },
    {
      title: 'Bachelor’s Degree in Information Systems - Information Technology',
      issuer: 'ISULPAR University',
      date: '2009 - 2012',
      verifyUrl: 'https://drive.google.com/file/d/1QH99og_oczv9BxNdCTZpofycN9NUHrBi/view?usp=sharing',
      icon: Award,
      type: 'education',
    },
    {
      title: 'Microsoft Certified: Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: '2025',
      verifyUrl: 'https://www.youracclaim.com/badges/67d75f8b-9ac4-4f60-bcff-1fa4c4cc5a69/public_url',
      icon: SiMicrosoftazure,
      type: 'certification',
    },
    {
      title: 'Databricks Generative AI Fundamentals',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/ffeb85fa-382b-427d-88f1-c380726b3ec6#acc.51k9onqr',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Introduction of FinOps Focus',
      issuer: 'FinOps Foundation',
      date: '2025',
      verifyUrl: 'https://verify.skilljar.com/c/xp9n43dr3c2o',
      icon: Award,
      type: 'certification',
    },
    {
      title: 'AWS Generative AI for Executives',
      issuer: 'Amazon Web Services',
      date: '2025',
      verifyUrl: 'https://drive.google.com/file/d/1yM1E9eKaM7aAUMA6Ot-yCnMM1sppfucI/view?usp=sharing',
      icon: SiAmazonaws,
      type: 'certification',
    },
    {
      title: 'AWS Community Builder',
      issuer: 'Amazon Web Services',
      date: '2025',
      verifyUrl: 'https://aws.amazon.com/pt/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=Diego%2BLopes&cb-cards.q_operator=AND',
      icon: SiAmazonaws,
      type: 'certification',
    },
    {
      title: 'Informatica PowerCenter Developer',
      issuer: 'Informatica',
      date: '2025',
      verifyUrl: 'https://drive.google.com/open?id=0BwVMJdGZ59i_V2M4S3NhYi1kdms',
      icon: Award,
      type: 'certification',
    },
    {
      title: 'AWS Technical Essentials',
      issuer: 'Amazon Web Services',
      date: '2025',
      verifyUrl: 'https://drive.google.com/file/d/0BwVMJdGZ59i_dndFSXYwaGVCaWZKS2R1Yy02YWFWV2ItMmg0/view',
      icon: SiAmazonaws,
      type: 'certification',
    },
    {
      title: 'RapidMiner',
      issuer: 'RapidMiner',
      date: '2025',
      verifyUrl: 'https://drive.google.com/open?id=1dxCU99reXHLH_jnnb_mnmlx5VEpAb9V5',
      icon: Award,
      type: 'certification',
    },
    {
      title: 'DB2',
      issuer: 'IBM',
      date: '2025',
      verifyUrl: 'https://drive.google.com/open?id=0BwVMJdGZ59i_YVdmeXdiSEtuZ0U',
      icon: Award,
      type: 'certification',
    }
  ]

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education-certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing academic achievements and professional certifications in data engineering, cloud technologies, and analytics
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getGradientClass(cred.issuer)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <cred.icon className="w-12 h-12" />
                  <span className="text-sm font-medium">{cred.issuer}</span>
                </div>
                <h3 className="text-xl font-bold">{cred.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cred.date}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {cred.type === 'education' ? 'Diploma' : 'Certificate'}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => cred.verifyUrl && window.open(cred.verifyUrl, '_blank')}
                  className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  aria-label={`Verify ${cred.title} ${cred.type}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify {cred.type === 'education' ? 'Diploma' : 'Certificate'}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EducationAndCertifications
