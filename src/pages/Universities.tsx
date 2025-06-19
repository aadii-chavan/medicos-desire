import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Award, Users, Search, Filter, ExternalLink, ArrowRight } from 'lucide-react';

export const Universities: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const universities = [
    {
      id: 'kursk-state-medical-university',
      name: 'Kursk State Medical University',
      country: 'Russia',
      location: 'Kursk',
      established: '1935',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Russia',
      fee: '$4,500/year',
      duration: '6 Years',
      highlights: ['No IELTS Required', 'English Medium', 'Modern Infrastructure', 'Clinical Training']
    },
    {
      id: 'tbilisi-state-medical-university',
      name: 'Tbilisi State Medical University',
      country: 'Georgia',
      location: 'Tbilisi',
      established: '1918',
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Georgia',
      fee: '$8,000/year',
      duration: '6 Years',
      highlights: ['European Standard', 'English Medium', 'Research Opportunities', 'International Faculty']
    },
    {
      id: 'tashkent-medical-academy',
      name: 'Tashkent Medical Academy',
      country: 'Uzbekistan',
      location: 'Tashkent',
      established: '1919',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Uzbekistan',
      fee: '$3,500/year',
      duration: '6 Years',
      highlights: ['Affordable Fees', 'Quality Education', 'Cultural Similarity', 'Easy Admission']
    },
    {
      id: 'kazakh-national-medical-university',
      name: 'Kazakh National Medical University',
      country: 'Kazakhstan',
      location: 'Almaty',
      established: '1931',
      image: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Kazakhstan',
      fee: '$5,500/year',
      duration: '6 Years',
      highlights: ['Modern Facilities', 'Research Focus', 'International Programs', 'Good Climate']
    },
    {
      id: 'kyrgyz-state-medical-academy',
      name: 'Kyrgyz State Medical Academy',
      country: 'Kyrgyzstan',
      location: 'Bishkek',
      established: '1939',
      image: 'https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Kyrgyzstan',
      fee: '$3,000/year',
      duration: '6 Years',
      highlights: ['Lowest Fees', 'Mountain Climate', 'Friendly Environment', 'Simple Process']
    },
    {
      id: 'kazan-federal-university',
      name: 'Kazan Federal University',
      country: 'Russia',
      location: 'Kazan',
      established: '1804',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#2 in Russia',
      fee: '$5,200/year',
      duration: '6 Years',
      highlights: ['Historic University', 'Research Excellence', 'Modern Labs', 'International Recognition']
    },
    // Russia
    { id: 'novosibirsk-state-university', name: 'Novosibirsk State University', country: 'Russia', location: 'Novosibirsk, Akademgorodok', established: '1959', image: 'https://english.nsu.ru/upload/iblock/2b2/2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg', recognition: 'Ministry of Science and Higher Education of the Russian Federation, WHO, NMC', ranking: 'Top 10 in Russia, QS Top 250 World', fee: '$6,500.00/year', duration: '6 Years', highlights: ['English & Russian medium', 'Strong research focus', 'Modern campus', 'International recognition'] },
    { id: 'tver-state-medical-university', name: 'Tver State Medical University', country: 'Russia', location: 'Tver', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,212.12/year', duration: '6 Years', highlights: [] },
    { id: 'far-eastern-federal-university', name: 'Far Eastern Federal University', country: 'Russia', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$6,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'kazan-state-medical-university', name: 'Kazan State Medical University', country: 'Russia', location: 'Kazan', established: '1814', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 10 in Russia', fee: '$7,151.52/year', duration: '6 Years', highlights: ['English medium', 'Affordable fees', 'Modern campus', 'NMC/WHO recognized', 'Indian mess available'] },
    { id: 'crimea-federal-university', name: 'Crimea Federal University', country: 'Russia', location: 'Simferopol', established: '1918', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 30 in Russia', fee: '$3,818.18/year', duration: '6 Years', highlights: ['English medium', 'Affordable', 'NMC/WHO recognized', 'Indian mess', 'Modern campus'] },
    { id: 'saint-petersburg-state-pediatric-medical-university', name: 'Saint-Petersburg State Pediatric Medical University', country: 'Russia', location: 'Saint Petersburg', established: '1925', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 30 in Russia', fee: '$5,489.70/year', duration: '6 Years', highlights: ['English medium', 'Pediatric focus', 'NMC/WHO recognized', 'Modern campus'] },
    { id: 'bashkir-state-medical-university', name: 'Bashkir State Medical University', country: 'Russia', location: 'Ufa', established: '1932', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 20 in Russia', fee: '$5,940.36/year', duration: '6 Years', highlights: ['English medium', 'Low cost', 'NMC/WHO recognized', 'Indian food', 'Modern labs'] },
    { id: 'russian-peoples-friendship-university', name: "Russian Peoples's Friendship University (RUDN)", country: 'Russia', location: 'Moscow', established: '1960', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 10 in Russia', fee: '$9,500.00/year', duration: '6 Years', highlights: ['English medium', 'International students', 'NMC/WHO recognized', 'Modern campus'] },
    { id: 'first-moscow-state-medical-university', name: 'First Moscow State Medical University (Sechenov)', country: 'Russia', location: 'Moscow', established: '1758', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 3 in Russia', fee: '$8,460.61/year', duration: '6 Years', highlights: ['English medium', 'Oldest medical university', 'NMC/WHO recognized', 'Modern research', 'Indian mess'] },
    { id: 'volgograd-state-medical-university', name: 'Volgograd State Medical University', country: 'Russia', location: 'Volgograd', established: '1935', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 20 in Russia', fee: '$5,636.36/year', duration: '6 Years', highlights: ['English medium', 'Affordable', 'NMC/WHO recognized', 'Indian mess', 'Modern campus'] },
    { id: 'sevastopol-state-university', name: 'Sevastopol State University', country: 'Russia', location: 'Sevastopol', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$3,500/year', duration: '6 Years', highlights: ['English medium', 'Affordable', 'NMC/WHO recognized'] },
    // China
    { id: 'nanjing-medical-university', name: 'Nanjing Medical University', country: 'China', location: 'Nanjing', established: '1934', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 20 in China', fee: '$4,533.33/year', duration: '6 Years', highlights: ['English medium', 'Modern campus', 'NMC/WHO recognized', 'International students'] },
    { id: 'fujian-medical-university', name: 'Fujian Medical University', country: 'China', location: 'Fuzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,666.67/year', duration: '6 Years', highlights: [] },
    { id: 'xian-jiao-tong-university', name: "Xi'an Jiao Tong University", country: 'China', location: 'Xi\'an', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,333.33/year', duration: '6 Years', highlights: [] },
    { id: 'jilin-university', name: 'Jilin University', country: 'China', location: 'Changchun', established: '1946', image: '', recognition: 'WHO, NMC Approved', ranking: 'Top 10 in China', fee: '$4,400.00/year', duration: '6 Years', highlights: ['English medium', 'Modern campus', 'NMC/WHO recognized', 'International students'] },
    { id: 'jiangsu-university', name: 'Jiangsu University', country: 'China', location: 'Zhenjiang', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,533.33/year', duration: '6 Years', highlights: [] },
    { id: 'shandong-university', name: 'Shandong University', country: 'China', location: 'Jinan', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$6,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'kunming-medical-university', name: 'Kunming Medical University', country: 'China', location: 'Kunming', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,666.67/year', duration: '6 Years', highlights: [] },
    { id: 'china-medical-university', name: 'China Medical University', country: 'China', location: 'Shenyang', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,333.33/year', duration: '6 Years', highlights: [] },
    { id: 'anhui-medical-university', name: 'Anhui Medical University', country: 'China', location: 'Hefei', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'qingdao-university', name: 'Qingdao University', country: 'China', location: 'Qingdao', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'southeast-university', name: 'Southeast University', country: 'China', location: 'Nanjing', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,373.33/year', duration: '6 Years', highlights: [] },
    { id: 'dalian-medical-university', name: 'Dalian Medical University', country: 'China', location: 'Dalian', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,600.00/year', duration: '6 Years', highlights: [] },
    { id: 'shihezi-university', name: 'Shihezi University', country: 'China', location: 'Shihezi', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'guangzhou-medical-university', name: 'Guangzhou Medical University', country: 'China', location: 'Guangzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'north-sichuan-medical-college', name: 'North Sichuan Medical College', country: 'China', location: 'Nanchong', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,266.67/year', duration: '6 Years', highlights: [] },
    { id: 'xiamen-university', name: 'Xiamen University', country: 'China', location: 'Xiamen', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,066.67/year', duration: '6 Years', highlights: [] },
    { id: 'yangzhou-university', name: 'Yangzhou University', country: 'China', location: 'Yangzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'sichuan-university', name: 'Sichuan University', country: 'China', location: 'Chengdu', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,800.00/year', duration: '6 Years', highlights: [] },
    { id: 'wenzhou-medical-university', name: 'Wenzhou Medical University', country: 'China', location: 'Wenzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000.00/year', duration: '6 Years', highlights: [] },
    { id: 'china-three-gorges-university', name: 'China Three Gorges University', country: 'China', location: 'Yichang', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$3,200.00/year', duration: '6 Years', highlights: [] },
    { id: 'soochow-university', name: 'Soochow University', country: 'China', location: 'Suzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,333.33/year', duration: '6 Years', highlights: [] },
    { id: 'nantong-university', name: 'Nantong University', country: 'China', location: 'Nantong', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$3,466.67/year', duration: '6 Years', highlights: [] },
    { id: 'ningxia-university', name: 'Ningxia University', country: 'China', location: 'Yinchuan', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$3,973.33/year', duration: '6 Years', highlights: [] },
    { id: 'zhejiang-university', name: 'Zhejiang University', country: 'China', location: 'Hangzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,706.67/year', duration: '6 Years', highlights: [] },
    { id: 'guangxi-medical-university', name: 'Guangxi Medical University', country: 'China', location: 'Nanning', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,666.67/year', duration: '6 Years', highlights: [] },
    { id: 'huazhong-university-of-science-and-technology', name: 'Huazhong University of Science & Technology', country: 'China', location: 'Wuhan', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,333.33/year', duration: '6 Years', highlights: [] },
    { id: 'jinzhou-medical-university', name: 'Jinzhou Medical University', country: 'China', location: 'Jinzhou', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,066.67/year', duration: '6 Years', highlights: [] },
    // Nepal
    { id: 'institute-of-medicine', name: 'Institute of Medicine (IOM)', country: 'Nepal', location: 'Kathmandu', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,021 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'bp-koirala-institute', name: 'B.P. Koirala Institute of Health Science', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$74,555 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'karnali-academy', name: 'Karnali Academy of Health Science', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'patan-academy', name: 'Patan Academy of Medical Science (NAMS)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'nepalese-army-institute', name: 'Nepalese Army Institute of Health Science', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'national-academy', name: 'National Academy of Medical Science', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'manipal-college', name: 'Manipal College of Medical Science (MCOMS) (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'college-of-medical-science', name: 'College of Medical Science (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹62,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'kathmandu-medical-college', name: 'Kathmandu Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$75,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'nepal-medical-college', name: 'Nepal Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹58,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'b-and-c-medical-college', name: 'B & C Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹56,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'birat-medical-college', name: 'Birat Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹60,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'nepalgunj-medical-college', name: 'Nepalgunj Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹56,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'lumbini-medical-college', name: 'Lumbini Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹63,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'nobel-medical-college', name: 'Nobel Medical College (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹57,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'devdaha-medical-college', name: 'Devdaha Medical College & Teaching Hospital (Kathmandu Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹60,51,500 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'kist-medical-college', name: 'KIST Medical College (KISTMCTH) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹60,50,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'chitwan-medical-college', name: 'Chitwan Medical College (CMC) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹59,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'gandaki-medical-college', name: 'Gandaki Medical College (GMCTHRC) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹56,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'national-medical-college', name: 'National Medical College (NMC) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹57,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'universal-medical-college', name: 'Universal Medical College (UCMS) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹55,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    { id: 'janki-medical-college', name: 'Janki Medical College (JMC) (Tribhuvan Uni.)', country: 'Nepal', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '₹48,00,000 (Total)', duration: '5.5 Years', highlights: [] },
    // Kyrgyzstan
    { id: 'salymbekov-university', name: 'Salymbekov University', country: 'Kyrgyzstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$3,500/year', duration: '6 Years', highlights: [] },
    // Kazakhstan
    { id: 'caspian-international-school', name: 'Caspian International School of Medicine', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,500/year', duration: '6 Years', highlights: [] },
    { id: 'kazakh-russian-medical-university', name: 'Kazakh Russian Medical University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,500/year', duration: '6 Years', highlights: [] },
    { id: 'al-farabi-kazakh-national-university', name: 'Al-Farabi Kazakh National University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$5,000/year', duration: '6 Years', highlights: [] },
    { id: 'astana-medical-university', name: 'Astana Medical University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000/year', duration: '6 Years', highlights: [] },
    { id: 'semey-medical-university', name: 'Semey Medical University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000/year', duration: '6 Years', highlights: [] },
    { id: 'south-kazakhstan-medical-academy', name: 'South Kazakhstan Medical Academy', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000/year', duration: '6 Years', highlights: [] },
    { id: 'karaganda-medical-university', name: 'Karaganda Medical University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,500/year', duration: '6 Years', highlights: [] },
    { id: 'kokshetau-state-university', name: 'Kokshetau State University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$4,000/year', duration: '6 Years', highlights: [] },
    { id: 'kazakhstan-medical-university', name: 'Kazakhstan Medical University', country: 'Kazakhstan', location: '-', established: '-', image: '', recognition: 'WHO, NMC Approved', ranking: '-', fee: '$6,000/year', duration: '6 Years', highlights: [] },
    {
      id: 'central-asian-medical-university',
      name: 'Central Asian Medical University',
      country: 'Uzbekistan',
      location: 'Fergana',
      established: '-',
      image: '',
      recognition: 'WHO, NMC Approved',
      ranking: '-',
      fee: '$3,500/year',
      duration: '6 Years',
      highlights: ['Affordable Fees', 'Located in Fergana City', 'Quality Education', 'Easy Admission']
    }
  ];

  const filteredUniversities = universities.filter(uni => {
    // Country filter
    const countryMatch = selectedCountry === 'all' || (uni.country && uni.country.toLowerCase() === selectedCountry);
    // Search filter
    const search = searchTerm.trim().toLowerCase();
    if (!countryMatch) return false;
    if (!search) return true;
    // Check all visible fields
    const fieldsToSearch = [
      uni.name,
      uni.location,
      uni.country,
      uni.recognition,
      uni.ranking,
      uni.fee,
      uni.duration,
      ...(Array.isArray(uni.highlights) ? uni.highlights : [])
    ];
    return fieldsToSearch.some(field => field && field.toLowerCase().includes(search));
  });

  const countries = ['all', 'russia', 'georgia', 'uzbekistan', 'kazakhstan', 'kyrgyzstan', 'china', 'nepal'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Medical Universities</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore top medical universities worldwide offering quality MBBS programs 
              with international recognition and excellent career prospects.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Countries</option>
                  <option value="russia">Russia</option>
                  <option value="georgia">Georgia</option>
                  <option value="uzbekistan">Uzbekistan</option>
                  <option value="kazakhstan">Kazakhstan</option>
                  <option value="kyrgyzstan">Kyrgyzstan</option>
                  <option value="china">China</option>
                  <option value="nepal">Nepal</option>
                </select>
              </div>
            </div>
            <div className="text-gray-600">
              Showing {filteredUniversities.length} universities
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <div
                key={university.id}
                className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 group animate-scale-in flex flex-col h-full transform hover:scale-105 hover:-translate-y-2 hover:shadow-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {university.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{university.location}, {university.country}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Established</span>
                      </div>
                      <p className="font-semibold text-primary">{university.established}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Award className="w-4 h-4" />
                        <span>Duration</span>
                      </div>
                      <p className="font-semibold text-primary">{university.duration}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Recognition</p>
                    <p className="text-sm font-medium text-secondary">{university.recognition}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Key Highlights</p>
                    <div className="flex flex-wrap gap-1">
                      {university.highlights.slice(0, 2).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {university.highlights.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{university.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Annual Fee</p>
                      <p className="text-lg font-bold text-secondary">{university.fee}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-auto">
                    <Link
                      to={`/university-details/${university.id}`}
                      className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light transition-colors text-center inline-flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No universities found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCountry('all');
                }}
                className="mt-4 text-primary hover:text-secondary font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our University Network</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Strong partnerships with leading medical universities worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Partner Universities' },
              { number: '15+', label: 'Countries' },
              { number: '5000+', label: 'Students Placed' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Find Your Perfect University</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get personalized university recommendations based on your profile, 
              preferences, and career goals. Our experts are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get University Recommendations</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};