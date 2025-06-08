"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Phone, Mail, MapPin, ArrowRight, Star, Award, Users, Factory } from "lucide-react"

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About us",
      products: "Products",
      application: "Application",
      technical: "Technical information",
      partner: "Partner",
      news: "News",
      contact: "Contact us",
    },
    hero: {
      title: "Precision Bearings for Global Excellence",
      subtitle: "High standard, high technology, high quality and zero defect",
      cta1: "Explore Products",
      cta2: "Learn More",
    },
    about: {
      title: "About Kexiang",
      subtitle: "Leading Bearing Technology Innovation",
      description:
        "Ningbo Kexiang Bearing Technology Co., Ltd. was established in Ningbo, Zhejiang Province in 2008. We specialize in the production of deep groove ball bearings, metric and British bearings, stainless steel bearings, needle bearings, flange bearings, plane thrust ball bearings and other precision micro bearings.",
      stats: {
        established: "Established",
        production: "Annual Production",
        varieties: "Product Varieties",
        diameter: "Bearing Diameter Range",
      },
    },
    products: {
      title: "Product Display",
      subtitle: "Precision Engineering Solutions",
      series: "series",
    },
    applications: {
      title: "Application Areas",
      subtitle: "Versatile Solutions Across Industries",
      motor: "Motor",
      household: "Household Appliances",
      cleaners: "Car Cleaners",
      electrical: "Electrical Tools",
    },
    news: {
      title: "News Center",
      subtitle: "Latest Updates & Insights",
      readMore: "Read More",
    },
    footer: {
      about: "About Us",
      products: "Products",
      contact: "Contact Information",
      copyright: "Copyright © 2024 Ningbo Kexiang Bearing Technology Co., Ltd. All rights reserved.",
    },
    partners: {
      title: "Our Partners",
      subtitle: "Trusted by Industry Leaders Worldwide",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品",
      application: "应用",
      technical: "技术信息",
      partner: "合作伙伴",
      news: "新闻",
      contact: "联系我们",
    },
    hero: {
      title: "精密轴承，卓越全球",
      subtitle: "高标准、高技术、高质量、零缺陷",
      cta1: "探索产品",
      cta2: "了解更多",
    },
    about: {
      title: "关于科翔",
      subtitle: "引领轴承技术创新",
      description:
        "宁波市科翔轴承科技有限公司成立于2008年，位于浙江省宁波市。我们专业生产深沟球轴承、公制和英制轴承、不锈钢轴承、滚针轴承、法兰轴承、平面推力球轴承等精密微型轴承。",
      stats: {
        established: "成立时间",
        production: "年产量",
        varieties: "产品种类",
        diameter: "轴承直径范围",
      },
    },
    products: {
      title: "产品展示",
      subtitle: "精密工程解决方案",
      series: "系列",
    },
    applications: {
      title: "应用领域",
      subtitle: "跨行业多功能解决方案",
      motor: "电机",
      household: "家用电器",
      cleaners: "汽车清洁器",
      electrical: "电动工具",
    },
    news: {
      title: "新闻中心",
      subtitle: "最新动态与见解",
      readMore: "阅读更多",
    },
    footer: {
      about: "关于我们",
      products: "产品",
      contact: "联系信息",
      copyright: "版权所有 © 2024 宁波市科翔轴承科技有限公司。保留所有权利。",
    },
    partners: {
      title: "合作伙伴",
      subtitle: "受到全球行业领导者的信赖",
    },
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "zh">("en")
  const [currentProduct, setCurrentProduct] = useState(0)
  const t = translations[language]

  const products = [
    { name: "60 series", image: "/pro3.jpg" },
    { name: "62 series", image: "/pro4.jpg" },
    { name: "63 series", image: "/produits1.jpg" },
    { name: "68 series", image: "/images/bearing-products.png" },
  ]

  const applications = [
    {
      title: t.applications.motor,
      description:
        "The bearing used by the motor is a part supporting the shaft, which can guide the rotation of the shaft, and can also bear the radial components on the shaft.",
      image: "/app2.jpg",
    },
    {
      title: t.applications.household,
      description:
        "Deep groove ball bearing has the characteristics of small friction coefficient, high limit speed, simple structure, various sizes and forms.",
      image: "/app3.jpg",
    },
    {
      title: t.applications.cleaners,
      description:
        "The ball bearing has very low rolling friction, and is optimized for low noise and low vibration. It has good wear resistance.",
      image: "/apppp.jpg",
    },
    {
      title: t.applications.electrical,
      description:
        "The main materials of miniature flange bearings are bearing steel, plastic and stainless steel. The main models are: f60, f68, f69.",
      image: "/app1.jpg",
    },
  ]

  const news = [
    {
      date: "2022/06",
      title: "Function of bearing lubrication",
      excerpt:
        "Lubrication has an important influence on the fatigue life, friction, wear, temperature rise, vibration, etc. of rolling bearings.",
      day: "14",
    },
    {
      date: "2022/06",
      title: "Function of bearing lubrication",
      excerpt:
        "Lubrication has an important influence on the fatigue life, friction, wear, temperature rise, vibration, etc. of rolling bearings.",
      day: "14",
    },
    {
      date: "2022/06",
      title: "Function of bearing lubrication",
      excerpt:
        "Lubrication has an important influence on the fatigue life, friction, wear, temperature rise, vibration, etc. of rolling bearings.",
      day: "14",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/ket-logo.png" alt="KET Logo" width={48} height={48} className="w-12 h-12" />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <Link
                  key={key}
                  href={key === "home" ? "/" : `/${key}`}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  {value}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "EN" : "中文"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />
        <Image src="/hero_image.jpg" alt="KET Office" fill className="object-cover" priority />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-7xl font-bold text-white mb-6 leading-tight">{t.hero.title}</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-gray-900"
              >
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t.about.title}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.about.subtitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center border-0 shadow-lg">
                  <Factory className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">2008</div>
                  <div className="text-sm text-gray-600">{t.about.stats.established}</div>
                </Card>
                <Card className="p-6 text-center border-0 shadow-lg">
                  <Award className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">100M</div>
                  <div className="text-sm text-gray-600">{t.about.stats.production}</div>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center border-0 shadow-lg">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">300+</div>
                  <div className="text-sm text-gray-600">{t.about.stats.varieties}</div>
                </Card>
                <Card className="p-6 text-center border-0 shadow-lg">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">1-20mm</div>
                  <div className="text-sm text-gray-600">{t.about.stats.diameter}</div>
                </Card>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about1.jpg"
                alt="Company Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t.products.title}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.products.subtitle}</h2>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                {language === "en" ? "View All Products" : "查看所有产品"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600">{t.applications.title}</Badge>
            <h2 className="text-4xl font-bold mb-6">{t.applications.subtitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors group">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{app.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t.news.title}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.news.subtitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{article.day}</div>
                      <div className="text-sm text-gray-500">{article.date}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-0">
                    {t.news.readMore}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">{t.partners.title}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.partners.subtitle}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Joyoung", logo: "/1p.jpg" },
              { name: "DaoCheng", logo: "/2p.jpg" },
              { name: "Vigor Toys", logo: "/3p.jpg" },
              { name: "DJI", logo: "/4p.jpg" },
              { name: "Foshan Intelligent", logo: "/7p.jpg" },
              { name: "Partner 6", logo: "/6p.jpg" },
            ].map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "We're proud to work with leading companies across various industries, delivering precision bearing solutions that power innovation worldwide."
                : "我们很自豪能与各行业的领先公司合作，提供推动全球创新的精密轴承解决方案。"}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/ket-logo.png" alt="KET Logo" width={48} height={48} className="w-12 h-12" />
                <div>
                  <div className="text-xl font-bold">Kexiang Bearing</div>
                  <div className="text-gray-400 text-sm">Technology Co., Ltd</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {language === "en"
                  ? "Leading manufacturer of precision bearings with over 15 years of experience in delivering high-quality solutions worldwide."
                  : "精密轴承领先制造商，拥有超过15年的经验，为全球提供高质量解决方案。"}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">No. 555, Fengshou Road, Zhenhai District, Ningbo City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">+86 15314591153</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">info@kexiangbearing.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.about}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/company" className="text-gray-300 hover:text-white transition-colors">
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link href="/environment" className="text-gray-300 hover:text-white transition-colors">
                    Office Environment
                  </Link>
                </li>
                <li>
                  <Link href="/equipment" className="text-gray-300 hover:text-white transition-colors">
                    Workshop Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-300 hover:text-white transition-colors">
                    Corporate Culture
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.products}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/bearing-steel" className="text-gray-300 hover:text-white transition-colors">
                    Bearing Steel Series
                  </Link>
                </li>
                <li>
                  <Link href="/stainless-steel" className="text-gray-300 hover:text-white transition-colors">
                    Stainless Steel Series
                  </Link>
                </li>
                <li>
                  <Link href="/flange" className="text-gray-300 hover:text-white transition-colors">
                    Flange Series
                  </Link>
                </li>
                <li>
                  <Link href="/miniature" className="text-gray-300 hover:text-white transition-colors">
                    Miniature Ball Bearing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
