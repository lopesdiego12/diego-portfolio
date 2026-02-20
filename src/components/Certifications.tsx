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
      date: '2023',
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
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/4edb41c3-ee72-4527-93ad-7d7e014be98a#acc.WieH0qsY',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/6d105662-347e-49c0-b6e4-63badf9327b3#acc.B1GdLk9u',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/dc4a1095-3e9a-454f-bec6-d62ca21fbc08#acc.9kYfHB3w',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/99af1caa-7418-4355-bf8b-83380755a410#acc.v8w9z7NS',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/4ad62b79-f04b-49ec-9985-9391cf4ea8e0#acc.Um9qQnzf',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/0acfc9b7-bb09-4156-b730-90780f2fbd9d#acc.aUAEZhsc',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/99385781-e3f7-4a39-a96b-56d5c4a06380#acc.NHCD8Kic',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/ce3f20ec-75af-4da7-b7ae-dff978eb12d2#acc.6otsiETR',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/d34227a4-80a9-4842-859e-58553c0362c4#acc.VPmAwWBH',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/d634a0d8-2f12-4563-b891-4ca2e4f9595b#acc.CxkKBFqM',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/1c5b89df-2246-413c-a348-b832795897a3#acc.Q4tZnyvX',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/341787a9-cb97-441c-a972-3d5093fb23a0#acc.Fhpvfq7S',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/af4fb0e5-5135-4cf3-865f-4512c9f35a87#acc.UdOsNCf0',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/6e6f9684-880f-4a62-af70-7ed568bd3324#acc.NHZYefUG',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/77d721a7-0e09-407b-80ee-4a868f1a199f#acc.YLZRvIyl',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/a9bef393-a2a3-4be9-9c37-1a671cf09054#acc.k76nTMaZ',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/cdfcd6ab-7bd5-4ce1-bf0e-6d385c45cc93#acc.7Vqi5IsH',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/e45688ee-bbd6-48b5-bdec-d4bd930afdf5#acc.tEiAl9jW',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/11aaa02a-3b92-4925-b3f5-7ced56ef3370#acc.loH14VbW',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/31825b45-51d1-48d5-b58c-653b1d3913ae#acc.1VFwmqGk',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/da1f5ada-c78d-42ca-b5c7-1ef4ccbfdf6d#acc.SAFs5CKl',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/e7b8be00-c0f5-414a-a783-a62175a55a24#acc.kDVm3GA6',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/2b522b8f-f3d6-4a16-8e72-6dbfc13d0278#acc.78ih0vzp',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/8bed62fc-7107-4a54-871a-bb294b7f27b2#acc.NyegnWO1',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/97e0f22e-d1dd-4cf0-9e50-ca4f4e9b5b58#acc.8OGdgHAq',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/75e79f50-9428-4180-b473-ca7d36d632b8#acc.zG576bZx',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/015b2498-b2a7-4a6b-bfd2-8c77d781f555#acc.LfyOpSGB',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/3ca17653-7d99-42f8-88c1-85beecfec9f0#acc.cZwnkqWO',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/c492aec6-4be7-4c68-b3b4-ad2e8b208862#acc.zygfbFap',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/a24ee400-4ff1-40b4-a308-822a0882b4ad#acc.m58pzCyK',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/6e2a039d-64f7-43ef-990b-5ec5e9e6353b#acc.StVs9O1A',
      icon: SiDatabricks,
      type: 'certification',
    },
    {
      title: 'Databricks Certification',
      issuer: 'Databricks',
      date: '2025',
      verifyUrl: 'https://credentials.databricks.com/f9578d7d-6502-4675-a50b-42e02c943fb4#acc.N0TDLzBn',
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
