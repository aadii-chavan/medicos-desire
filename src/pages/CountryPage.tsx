import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  BookOpen
} from 'lucide-react';

export const CountryPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  
  // Mock data - in a real app, this would be fetched based on the country parameter
  const countryData: { [key: string]: any } = {
    russia: {
      name: 'Russia',
      flag: '🇷🇺',
      heroImage: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English/Russian',
        recognition: 'WHO, MCI/NMC Approved',
        totalFee: '$18,000 - 36,000',
        livingCost: '$2,400 - 3,600/year'
      },
      advantages: [
        'No IELTS/TOEFL required',
        'Direct admission without entrance exam',
        'World-class medical education',
        'Low cost of living',
        'Safe and secure environment',
        'Clinical training in top hospitals'
      ],
      topUniversities: [
        {
          name: 'First Moscow State Medical University (Sechenov)',
          location: 'Moscow',
          established: '1758',
          ranking: '#2 in Russia (Medicine)',
          fee: '$7,000/year'
        },
        {
          name: 'Saint Petersburg State University',
          location: 'Saint Petersburg',
          established: '1724',
          ranking: '#3 in Russia (Medicine)',
          fee: '$4,900/year'
        },
        {
          name: 'Pirogov Russian National Research Medical University',
          location: 'Moscow',
          established: '1906',
          ranking: '#4 in Russia (Medicine)',
          fee: '$7,000/year'
        },
        {
          name: "Russian Peoples's Friendship University (RUDN)",
          location: 'Moscow',
          established: '1960',
          ranking: '#5 in Russia (Medicine)',
          fee: '$7,000/year'
        },
        {
          name: 'Kazan Federal University',
          location: 'Kazan',
          established: '1804',
          ranking: '#8 in Russia (Medicine)',
          fee: '$6,000/year'
        },
        {
          name: 'Novosibirsk State University',
          location: 'Novosibirsk',
          established: '1958',
          ranking: '#10 in Russia (Medicine)',
          fee: '$7,000/year'
        },
        {
          name: 'Kazan State Medical University',
          location: 'Kazan',
          established: '1814',
          ranking: '#11 in Russia (Medicine)',
          fee: '$5,300/year'
        },
        {
          name: 'Tver State Medical University',
          location: 'Tver',
          established: '1936',
          ranking: '#11 in Russia (Medicine)',
          fee: '$3,900/year'
        },
        {
          name: 'Saint-Petersburg State Pediatric Medical University',
          location: 'Saint Petersburg',
          established: '1925',
          ranking: '#15 in Russia (Medicine)',
          fee: '$4,000/year'
        },
        {
          name: 'Privolzhsky Research Medical University (Under Process)',
          location: 'Nizhny Novgorod',
          established: '1920',
          ranking: '#17 in Russia (Medicine)',
          fee: '$4,800/year'
        },
        {
          name: 'Bashkir State Medical University',
          location: 'Ufa',
          established: '1932',
          ranking: '#18 in Russia (Medicine)',
          fee: '$5,400/year'
        },
        {
          name: 'Volgograd State Medical University',
          location: 'Volgograd',
          established: '1935',
          ranking: '#18 in Russia (Medicine)',
          fee: '$4,900/year'
        },
        {
          name: 'Siberian State Medical University',
          location: 'Tomsk',
          established: '1878',
          ranking: '#21 in Russia (Medicine)',
          fee: '$4,000/year'
        },
        {
          name: 'Kursk State Medical University',
          location: 'Kursk',
          established: '1935',
          ranking: '#26 in Russia (Medicine)',
          fee: '$5,500/year'
        },
        {
          name: 'Kuban State Medical University (Under Process)',
          location: 'Krasnodar',
          established: '1920',
          ranking: '#27 in Russia (Medicine)',
          fee: '$4,400/year'
        },
        {
          name: 'Far Eastern Federal University',
          location: 'Vladivostok',
          established: '1899',
          ranking: '#28 in Russia (Medicine)',
          fee: '$4,900/year'
        },
        {
          name: 'Moscow Engineering Physics Institute (MEPHI)',
          location: 'Moscow',
          established: '1942',
          ranking: '#29 in Russia (Medicine)',
          fee: '$3,900/year'
        },
        {
          name: 'North Ossetian State Medical University',
          location: 'Vladikavkaz',
          established: '1972',
          ranking: '#30 in Russia (Medicine)',
          fee: '$3,300/year'
        },
        {
          name: 'Voronezh State Medical University (Under Process)',
          location: 'Voronezh',
          established: '1918',
          ranking: '#35 in Russia (Medicine)',
          fee: '$4,600/year'
        },
        {
          name: 'Perm State Medical University (Under Process)',
          location: 'Perm',
          established: '1916',
          ranking: '#38 in Russia (Medicine)',
          fee: '$5,100/year'
        },
        {
          name: 'Pacific State Medical University',
          location: 'Vladivostok',
          established: '1958',
          ranking: '#57 in Russia (Medicine)',
          fee: '$4,000/year'
        },
        {
          name: 'Orel State University',
          location: 'Oryol',
          established: '1931',
          ranking: '#75 in Russia (Medicine)',
          fee: '$3,100/year'
        },
        {
          name: 'Obinsk Institute for Nuclear Power Engineering (MEPHI)',
          location: 'Obninsk',
          established: '-',
          ranking: 'Part of MEPHI',
          fee: '$6,000/year'
        },
        {
          name: 'Sevastopol State University',
          location: 'Sevastopol',
          established: '-',
          ranking: 'Top 1000+ in Russia',
          fee: '$2,600/year'
        },
        {
          name: 'North Caucasian State University',
          location: 'Stavropol',
          established: '1936',
          ranking: 'Top 1000+ in Russia',
          fee: '$3,700/year'
        },
        {
          name: 'Crimean Federal University',
          location: 'Simferopol',
          established: '2014',
          ranking: 'Top 1000+ in Russia',
          fee: '$3,500/year'
        }
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive invitation letter from university',
        'Apply for student visa',
        'Complete medical examination',
        'Arrange accommodation',
        'Travel to Russia and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        {
          question: 'Is NEET required for admission in Russia?',
          answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Russia.'
        },
        {
          question: 'What is the medium of instruction?',
          answer: 'Most universities offer MBBS programs in English. Some also provide Russian language courses.'
        },
        {
          question: 'Are the degrees globally recognized?',
          answer: 'Yes, medical degrees from Russian universities are recognized by WHO, MCI/NMC, and other international bodies.'
        }
      ]
    },
    georgia: {
      name: 'Georgia',
      flag: '🇬🇪',
      heroImage: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, MCI/NMC Approved',
        totalFee: '$30,000 - 48,000',
        livingCost: '$3,600 - 4,800/year'
      },
      advantages: [
        'European standard education',
        'English medium instruction',
        'Modern infrastructure',
        'Safe and peaceful environment',
        'Cultural diversity',
        'EU recognition'
      ],
      topUniversities: [
        {
          name: 'Tbilisi State Medical University',
          location: 'Tbilisi',
          established: '1918',
          ranking: '#1 in Georgia',
          fee: '$8,000/year'
        },
        {
          name: 'Batumi Shota Rustaveli State University',
          location: 'Batumi',
          established: '1935',
          ranking: '#2 in Georgia',
          fee: '$6,500/year'
        },
        {
          name: 'University of Georgia',
          location: 'Tbilisi',
          established: '2004',
          ranking: '#3 in Georgia',
          fee: '$7,000/year'
        }
      ],
      admissionProcess: [
        'Submit application with academic documents',
        'Receive provisional admission letter',
        'Apply for student visa',
        'Complete medical and background checks',
        'Confirm admission and pay fees',
        'Travel to Georgia and register'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        {
          question: 'What is the cost of living in Georgia?',
          answer: 'The cost of living in Georgia is quite affordable, ranging from $300-400 per month including accommodation.'
        },
        {
          question: 'Is the climate suitable for Indian students?',
          answer: 'Georgia has a moderate climate similar to northern India, making it comfortable for Indian students.'
        },
        {
          question: 'Can I practice medicine in India after graduation?',
          answer: 'Yes, after clearing the FMGE/NExT exam, you can practice medicine in India.'
        }
      ]
    },
    china: {
      name: 'China',
      flag: '🇨🇳',
      heroImage: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, NMC/MCI Approved',
        totalFee: '$18,000 - $36,000',
        livingCost: '$2,000 - $3,000/year'
      },
      advantages: [
        'Internationally recognized medical degrees',
        'Affordable tuition fees & living costs',
        'High-quality education & modern infrastructure',
        'English-taught MBBS programs',
        'No entrance exams & easy admission process',
        'Global medical exposure'
      ],
      topUniversities: [
        { name: 'Zhejiang University', ranking: '#10 in China', fee: '$7,250/year', location: 'Hangzhou' },
        { name: 'Xi\'an Jiaotong University', ranking: '#15 in China', fee: '$7,000/year', location: 'Xi\'an' },
        { name: 'Shandong University', ranking: '#17 in China', fee: '$6,300/year', location: 'Jinan' },
        { name: 'Sichuan University', ranking: '#19 in China', fee: '$5,000/year', location: 'Chengdu' },
        { name: 'Jilin University', ranking: '#20 in China', fee: '$5,040/year', location: 'Changchun' },
        { name: 'China Medical University', ranking: '#21 in China', fee: '$5,880/year', location: 'Shenyang' },
        { name: 'Jiangsu University', ranking: '#22 in China', fee: '$4,900/year', location: 'Zhenjiang' },
        { name: 'Wenzhou Medical University', ranking: '#23 in China', fee: '$4,480/year', location: 'Wenzhou' },
        { name: 'Dalian Medical University', ranking: '#24 in China', fee: '$6,720/year', location: 'Dalian' },
        { name: 'Qingdao University', ranking: '#25 in China', fee: '$4,200/year', location: 'Qingdao' },
        { name: 'Fujian Medical University', ranking: '#26 in China', fee: '$4,900/year', location: 'Fuzhou' },
        { name: 'Kunming Medical University', ranking: '#27 in China', fee: '$4,480/year', location: 'Kunming' },
        { name: 'Anhui Medical University', ranking: '#28 in China', fee: '$4,200/year', location: 'Hefei' },
        { name: 'Guangzhou Medical University', ranking: '#29 in China', fee: '$5,000/year', location: 'Guangzhou' },
        { name: 'North Sichuan Medical College', ranking: '#30 in China', fee: '$4,480/year', location: 'Nanchong' },
        { name: 'Xiamen University', ranking: '#31 in China', fee: '$5,320/year', location: 'Xiamen' },
        { name: 'Yangzhou University', ranking: '#32 in China', fee: '$4,200/year', location: 'Yangzhou' },
        { name: 'Soochow University', ranking: '#33 in China', fee: '$4,550/year', location: 'Suzhou' },
        { name: 'Nantong University', ranking: '#34 in China', fee: '$3,640/year', location: 'Nantong' },
        { name: 'Ningxia University', ranking: '#35 in China', fee: '$4,050/year', location: 'Yinchuan' },
        { name: 'Guangxi Medical University', ranking: '#36 in China', fee: '$3,920/year', location: 'Nanning' },
        { name: 'Huazhong University of Science & Technology', ranking: '#37 in China', fee: '$5,600/year', location: 'Wuhan' },
        { name: 'Jinzhou Medical University', ranking: '#38 in China', fee: '$4,200/year', location: 'Jinzhou' },
        { name: 'China Three Gorges University', ranking: '#39 in China', fee: '$3,360/year', location: 'Yichang' },
        { name: 'Shihezi University', ranking: '#40 in China', fee: '$4,480/year', location: 'Shihezi' },
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive admission letter from university',
        'Apply for student visa',
        'Complete medical examination',
        'Arrange accommodation',
        'Travel to China and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (60% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        { question: 'Is NEET required for admission in China?', answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in China.' },
        { question: 'What is the medium of instruction?', answer: 'All MOE-listed universities offer MBBS programs in English for international students.' },
        { question: 'Are the degrees globally recognized?', answer: 'Yes, medical degrees from Chinese universities are recognized by WHO, NMC, and other international bodies.' }
      ]
    },
    nepal: {
      name: 'Nepal',
      flag: '🇳🇵',
      heroImage: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '5.5 Years',
        medium: 'English',
        recognition: 'WHO, NMC Approved',
        totalFee: '$55,000 - $90,000',
        livingCost: '$1,500 - $2,000/year'
      },
      advantages: [
        'Affordable tuition fees & living costs',
        'Globally recognized degrees',
        'No language barrier (English medium)',
        'Cultural and geographical proximity to India',
        'Extensive clinical exposure',
        'Simple admission process'
      ],
      topUniversities: [
        { name: 'Manipal College of Medical Science (MCOMS)', location: 'Pokhara', fee: '$90,400', ranking: 'Top Private' },
        { name: 'College of Medical Science', location: 'Bharatpur', fee: '$78,300', ranking: 'Top Private' },
        { name: 'Kathmandu Medical College', location: 'Kathmandu', fee: '$65,100', ranking: 'Top Private' },
        { name: 'National Medical College (NMC)', location: 'Birgunj', fee: '$75,300', ranking: 'Top Private' },
        { name: 'Nobel Medical College', location: 'Biratnagar', fee: '$67,500', ranking: 'Top Private' },
        { name: 'Birat Medical College', location: 'Biratnagar', fee: '$63,900', ranking: 'Top Private' },
        { name: 'Nepal Medical College', location: 'Kathmandu', fee: '$62,700', ranking: 'Top Private' },
        { name: 'Lumbini Medical College', location: 'Palpa', fee: '$63,900', ranking: 'Top Private' },
        { name: 'Nepalgunj Medical College', location: 'Chisapani', fee: '$72,300', ranking: 'Top Private' },
        { name: 'Universal Medical College (UCMS)', location: 'Bhairahwa', fee: '$69,900', ranking: 'Top Private' },
        { name: 'Devdaha Medical College & Teaching Hospital', location: 'Butwal', fee: '$62,700', ranking: 'Top Private' },
        { name: 'Gandaki Medical College (GMCTHRC)', location: 'Lekhnath', fee: '$66,300', ranking: 'Top Private' },
        { name: 'Chitwan Medical College (CMC)', location: 'Bharatpur', fee: '$62,700', ranking: 'Top Private' },
        { name: 'KIST Medical College (KISTMCTH)', location: 'Lalitpur', fee: '$57,800', ranking: 'Top Private' },
        { name: 'Janaki Medical College (JMC)', location: 'Janakpur', fee: '$55,400', ranking: 'Top Private' },
        { name: 'B & C Medical College', location: 'Birtamode', fee: '$55,400', ranking: 'Top Private' },
        { name: 'Institute of Medicine (IOM)', location: 'Kathmandu', fee: '$48,200', ranking: 'Top Govt.' },
        { name: 'B.P. Koirala Institute of Health Science', location: 'Dharan', fee: '$60,200', ranking: 'Top Govt.' },
        { name: 'Karnali Academy of Health Science', location: 'Chandannath', fee: '$48,200', ranking: 'Top Govt.' },
        { name: 'Patan Academy of Medical Science (NAMS)', location: 'Patan', fee: '$48,200', ranking: 'Top Govt.' },
        { name: 'Nepalese Army Institute of Health Science', location: 'Kathmandu', fee: '$48,200', ranking: 'Top Govt.' },
        { name: 'National Academy of Medical Science', location: 'Kathmandu', fee: '$48,200', ranking: 'Top Govt.' },
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive admission letter from university',
        'Pay first year tuition fees',
        'Apply for student visa (if required)',
        'Travel to Nepal and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport (not required for Indian students)'
      ],
      faqs: [
        { question: 'Is NEET required for admission in Nepal?', answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Nepal.' },
        { question: 'What is the medium of instruction?', answer: 'All major universities offer MBBS programs in English for international students.' },
        { question: 'Are the degrees globally recognized?', answer: 'Yes, medical degrees from Nepalese universities are recognized by WHO, NMC, and other international bodies.' }
      ]
    },
    kyrgyzstan: {
      name: 'Kyrgyzstan',
      flag: '🇰🇬',
      heroImage: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, NMC Approved',
        totalFee: '$18,000 - $28,000',
        livingCost: '$1,200 - $1,800/year'
      },
      advantages: [
        'Affordable tuition fees & living costs',
        'Globally recognized degrees',
        'No language barrier (English medium)',
        'Simple admission process',
        'Safe and friendly environment'
      ],
      topUniversities: [
        { name: 'Salymbekov University', location: 'Bishkek', fee: '$3,000/year', ranking: 'Top Private' }
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive admission letter from university',
        'Pay first year tuition fees',
        'Apply for student visa',
        'Travel to Kyrgyzstan and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        { question: 'Is NEET required for admission in Kyrgyzstan?', answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Kyrgyzstan.' },
        { question: 'What is the medium of instruction?', answer: 'All major universities offer MBBS programs in English for international students.' },
        { question: 'Are the degrees globally recognized?', answer: 'Yes, medical degrees from Kyrgyzstan universities are recognized by WHO, NMC, and other international bodies.' }
      ]
    },
    kazakhstan: {
      name: 'Kazakhstan',
      flag: '🇰🇿',
      heroImage: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, NMC Approved',
        totalFee: '$19,800 - $27,600',
        livingCost: '$1,200 - $1,800/year'
      },
      advantages: [
        'Affordable tuition fees & living costs',
        'Globally recognized degrees',
        'No language barrier (English medium)',
        'Simple admission process',
        'Safe and friendly environment'
      ],
      topUniversities: [
        { name: 'Al-Farabi Kazakh National University', location: 'Almaty', fee: '$4,900/year', ranking: '#1 in Kazakhstan' },
        { name: 'Kazakh National Medical University', location: 'Almaty', fee: '$5,300/year', ranking: '#5 in Kazakhstan' },
        { name: 'Astana Medical University', location: 'Astana', fee: '$7,630/year', ranking: '#14 in Kazakhstan' },
        { name: 'Semey Medical University', location: 'Semey', fee: '$3,800/year', ranking: '#17 in Kazakhstan' },
        { name: 'South Kazakhstan Medical Academy', location: 'Shymkent', fee: '$4,400/year', ranking: '#19 in Kazakhstan' },
        { name: 'Karaganda Medical University', location: 'Karaganda', fee: '$4,500/year', ranking: '#24 in Kazakhstan' },
        { name: 'Kokshetau State University', location: 'Kokshetau', fee: '$3,800/year', ranking: '#33 in Kazakhstan' },
        { name: 'Kazakh Russian Medical University', location: 'Almaty', fee: '$4,500/year', ranking: '#58 in Kazakhstan' },
        { name: 'Caspian International School of Medicine', location: 'Almaty', fee: '$3,500/year', ranking: 'Top Private' },
        { name: 'Kazakhstan Medical University', location: 'Almaty', fee: '$4,500/year', ranking: 'Top Private' }
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive admission letter from university',
        'Pay first year tuition fees',
        'Apply for student visa',
        'Travel to Kazakhstan and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        { question: 'Is NEET required for admission in Kazakhstan?', answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Kazakhstan.' },
        { question: 'What is the medium of instruction?', answer: 'All major universities offer MBBS programs in English for international students.' },
        { question: 'Are the degrees globally recognized?', answer: 'Yes, medical degrees from Kazakhstan universities are recognized by WHO, NMC, and other international bodies.' }
      ]
    },
    uzbekistan: {
      name: 'Uzbekistan',
      flag: '🇺🇿',
      heroImage: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, NMC Approved',
        totalFee: '$19,200 - $24,000',
        livingCost: '$1,800 - $2,400/year'
      },
      advantages: [
        'Affordable tuition fees',
        'English medium instruction',
        'Cultural similarity with India',
        'Easy admission process',
        'Safe and student-friendly environment',
        'Modern infrastructure'
      ],
      topUniversities: [
        { name: 'Central Asian Medical University', location: 'Fergana City, Uzbekistan', established: '-', ranking: '-', fee: '$3,500/year' }
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive admission letter from university',
        'Apply for student visa',
        'Complete medical examination',
        'Arrange accommodation',
        'Travel to Uzbekistan and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        { question: 'Is NEET required for admission in Uzbekistan?', answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Uzbekistan.' },
        { question: 'What is the medium of instruction?', answer: 'Most universities offer MBBS programs in English for international students.' },
        { question: 'Are the degrees globally recognized?', answer: 'Yes, medical degrees from Uzbek universities are recognized by WHO, NMC, and other international bodies.' }
      ]
    }
    // Add more countries as needed
  };

  const currentCountry = countryData[country?.toLowerCase() || ''] || countryData.russia;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentCountry.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-slide-up">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{currentCountry.flag}</span>
              <h1 className="text-4xl md:text-6xl font-bold">MBBS in {currentCountry.name}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Pursue your medical degree at world-class universities with excellent 
              infrastructure and international recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-accent p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Duration</h3>
                  <p className="text-gray-600">{currentCountry.overview.duration}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Medium</h3>
                  <p className="text-gray-600">{currentCountry.overview.medium}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Recognition</h3>
                  <p className="text-gray-600">{currentCountry.overview.recognition}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Total Fee</h3>
                  <p className="text-gray-600">{currentCountry.overview.totalFee}</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6">Key Advantages</h2>
              <div className="space-y-3">
                {currentCountry.advantages.map((advantage: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-gray-600">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Top Medical Universities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the leading medical universities in {currentCountry.name} offering 
              world-class MBBS programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCountry.topUniversities.map((university: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{university.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                  <p className="text-sm text-gray-500">Established: {university.established}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ranking:</span>
                    <span className="font-semibold text-primary">{university.ranking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-semibold text-secondary">{university.fee}</span>
                  </div>
                </div>
                <div className="mt-auto pt-2">
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Admission Process</h2>
              <div className="space-y-4">
                {currentCountry.admissionProcess.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Eligibility Criteria</h2>
              <div className="space-y-3">
                {currentCountry.eligibility.map((criteria: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{criteria}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center space-x-2"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about studying MBBS in {currentCountry.name}
            </p>
          </div>
          <div className="space-y-6">
            {currentCountry.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Study in {currentCountry.name}?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get personalized guidance and complete support for your MBBS admission 
              in {currentCountry.name}. Our experts are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Application</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/universities"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore More Universities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};