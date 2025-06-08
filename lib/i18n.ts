export type Language = "en" | "zh"

export interface Translations {
  nav: {
    home: string
    about: string
    contact: string
    privacy: string
    docs: string
  }
  hero: {
    welcome: string
    slogan: string
    description: string
    exploreProjects: string
    learnMore: string
  }
  projects: {
    title: string
    description: string
    visitProject: string
    minecraftKivotos: {
      title: string
      description: string
    }
    minecraftRoleplay: {
      title: string
      description: string
    }
    qwerTop: {
      title: string
      description: string
    }
    epsilonAuth: {
      title: string
      description: string
    }
    awaGs: {
      title: string
      description: string
    }
  }
  features: {
    title: string
    description: string
    innovation: {
      title: string
      description: string
    }
    community: {
      title: string
      description: string
    }
    quality: {
      title: string
      description: string
    }
    passion: {
      title: string
      description: string
    }
  }
  footer: {
    description: string
    projects: string
    company: string
    connect: string
    copyright: string
  }
  about: {
    title: string
    subtitle: string
    mission: {
      title: string
      description: string
    }
    vision: {
      title: string
      description: string
    }
    story: {
      title: string
      subtitle: string
      content: string[]
    }
    values: {
      title: string
      items: string[]
    }
  }
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      description: string
      firstName: string
      lastName: string
      email: string
      subject: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      success: string
      successDescription: string
    }
    email: {
      title: string
      description: string
      general: string
      support: string
    }
    response: {
      title: string
      description: string
    }
  }
  privacy: {
    title: string
    subtitle: string
    lastUpdated: string
    sections: {
      collect: {
        title: string
        description: string
        personal: string
        personalDesc: string
        usage: string
        usageDesc: string
      }
      use: {
        title: string
        description: string
        items: string[]
      }
      security: {
        title: string
        description: string
        content: string
        measures: string
        items: string[]
      }
      sharing: {
        title: string
        description: string
        content: string
        when: string
        items: string[]
      }
      rights: {
        title: string
        description: string
        content: string
        items: string[]
      }
      contactUs: {
        title: string
        description: string
        content: string
      }
    }
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      docs: "Docs",
    },
    hero: {
      welcome: "Welcome to",
      slogan: "Better Horz.",
      description:
        "Creating innovative digital experiences and gaming communities. Pushing the boundaries of what's possible.",
      exploreProjects: "Explore Projects",
      learnMore: "Learn More",
    },
    projects: {
      title: "Our Projects",
      description: "Discover the innovative solutions and experiences we've crafted for our community.",
      visitProject: "Visit Project",
      minecraftKivotos: {
        title: "Minecraft Kivotos",
        description: "An immersive Minecraft server experience with custom features and community-driven gameplay.",
      },
      minecraftRoleplay: {
        title: "Minecraft Roleplay",
        description: "A dedicated roleplay server offering unique storytelling experiences in the Minecraft universe.",
      },
      qwerTop: {
        title: "Qwer.tOP",
        description: "A modern web platform providing innovative solutions and services.",
      },
      epsilonAuth: {
        title: "Epsilon Auth",
        description: "Secure authentication and identity management system for modern applications.",
      },
      awaGs: {
        title: "AwA.gs",
        description: "A cutting-edge platform delivering exceptional user experiences.",
      },
    },
    features: {
      title: "Why Choose HoRzTeam?",
      description: "We're committed to excellence in everything we do, from gaming experiences to web development.",
      innovation: {
        title: "Innovation First",
        description: "We push the boundaries of technology to create unique and engaging experiences.",
      },
      community: {
        title: "Community Driven",
        description: "Our projects are built with and for our community, ensuring everyone has a voice.",
      },
      quality: {
        title: "Quality Code",
        description: "We maintain high standards in development, ensuring reliable and scalable solutions.",
      },
      passion: {
        title: "Passion Project",
        description: "Every project is crafted with love and dedication to deliver exceptional experiences.",
      },
    },
    footer: {
      description: "Better Horz. Creating innovative digital experiences.",
      projects: "Projects",
      company: "Company",
      connect: "Connect",
      copyright: "All rights reserved.",
    },
    about: {
      title: "About HoRzTeam",
      subtitle: "Better Horz. - Our commitment to excellence and innovation.",
      mission: {
        title: "Our Mission",
        description:
          "To create innovative digital experiences that bring communities together and push the boundaries of what's possible in gaming and web development.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the leading team in creating immersive digital experiences that inspire, engage, and connect people across the globe.",
      },
      story: {
        title: "Our Story",
        subtitle: "How HoRzTeam came to be",
        content: [
          'HoRzTeam was founded with a simple yet powerful vision: "Better Horz." We believe that every digital experience should be crafted with passion, innovation, and a deep understanding of our community\'s needs.',
          "From our flagship Minecraft servers like Kivotos and Roleplay to our cutting-edge web platforms like Qwer.tOP and Epsilon Auth, we've consistently delivered experiences that exceed expectations.",
          "Our team is composed of passionate developers, designers, and community managers who share a common goal: creating digital experiences that matter.",
        ],
      },
      values: {
        title: "Our Values",
        items: ["Innovation", "Community", "Quality", "Passion", "Excellence", "Collaboration"],
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with the HoRzTeam. We'd love to hear from you.",
      form: {
        title: "Send us a message",
        description: "Fill out the form below and we'll get back to you as soon as possible.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        messagePlaceholder: "Tell us more about your inquiry...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
        successDescription: "We'll get back to you as soon as possible.",
      },
      email: {
        title: "Email Us",
        description: "Prefer email? Send us a message directly.",
        general: "For general inquiries:",
        support: "For technical support:",
      },
      response: {
        title: "Response Time",
        description:
          'We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mark your subject line with "URGENT".',
      },
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us. Learn how we protect your data.",
      lastUpdated: "Last updated:",
      sections: {
        collect: {
          title: "Information We Collect",
          description: "What data we gather and why",
          personal: "Personal Information",
          personalDesc:
            "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, and any other information you choose to provide.",
          usage: "Usage Information",
          usageDesc:
            "We automatically collect certain information about your use of our services, including your IP address, browser type, operating system, and usage patterns.",
        },
        use: {
          title: "How We Use Your Information",
          description: "The purposes for which we process your data",
          items: [
            "Provide, maintain, and improve our services",
            "Process transactions and send related information",
            "Send technical notices, updates, and support messages",
            "Respond to your comments, questions, and customer service requests",
            "Monitor and analyze trends, usage, and activities",
            "Detect, investigate, and prevent fraudulent transactions",
          ],
        },
        security: {
          title: "Data Security",
          description: "How we protect your information",
          content:
            "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          measures: "Security Measures Include:",
          items: [
            "Encryption of data in transit and at rest",
            "Regular security audits and assessments",
            "Access controls and authentication mechanisms",
            "Employee training on data protection practices",
          ],
        },
        sharing: {
          title: "Information Sharing",
          description: "When and how we share your data",
          content:
            "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
          when: "We may share information:",
          items: [
            "With service providers who assist in our operations",
            "When required by law or to protect our rights",
            "In connection with a business transaction",
            "With your explicit consent",
          ],
        },
        rights: {
          title: "Your Rights",
          description: "What you can do with your data",
          content: "You have certain rights regarding your personal information, including:",
          items: [
            "Access to your personal information",
            "Correction of inaccurate data",
            "Deletion of your personal information",
            "Restriction of processing",
            "Data portability",
            "Objection to processing",
          ],
        },
        contactUs: {
          title: "Contact Us",
          description: "Questions about this privacy policy",
          content: "If you have any questions about this Privacy Policy, please contact us at:",
        },
      },
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      contact: "联系我们",
      privacy: "隐私政策",
      docs: "文档",
    },
    hero: {
      welcome: "欢迎来到",
      slogan: "Better Horz.",
      description: "创造创新的数字体验和游戏社区。突破可能性的边界。",
      exploreProjects: "探索项目",
      learnMore: "了解更多",
    },
    projects: {
      title: "我们的项目",
      description: "发现我们为社区精心打造的创新解决方案和体验。",
      visitProject: "访问项目",
      minecraftKivotos: {
        title: "Minecraft Kivotos",
        description: "一个沉浸式的Minecraft服务器体验，具有自定义功能和社区驱动的游戏玩法。",
      },
      minecraftRoleplay: {
        title: "Minecraft Roleplay",
        description: "专门的角色扮演服务器，在Minecraft宇宙中提供独特的故事体验。",
      },
      qwerTop: {
        title: "Qwer.tOP",
        description: "提供创新解决方案和服务的现代网络平台。",
      },
      epsilonAuth: {
        title: "Epsilon Auth",
        description: "现代应用程序的安全身份验证和身份管理系统。",
      },
      awaGs: {
        title: "AwA.gs",
        description: "提供卓越用户体验的尖端平台。",
      },
    },
    features: {
      title: "为什么选择HoRzTeam？",
      description: "我们致力于在所做的一切中追求卓越，从游戏体验到网络开发。",
      innovation: {
        title: "创新优先",
        description: "我们突破技术边界，创造独特而引人入胜的体验。",
      },
      community: {
        title: "社区驱动",
        description: "我们的项目与社区共同构建，确保每个人都有发言权。",
      },
      quality: {
        title: "优质代码",
        description: "我们在开发中保持高标准，确保可靠和可扩展的解决方案。",
      },
      passion: {
        title: "激情项目",
        description: "每个项目都充满爱心和奉献精神，提供卓越的体验。",
      },
    },
    footer: {
      description: "Better Horz. 创造创新的数字体验。",
      projects: "项目",
      company: "公司",
      connect: "联系",
      copyright: "版权所有。",
    },
    about: {
      title: "关于HoRzTeam",
      subtitle: "Better Horz. - 我们对卓越和创新的承诺。",
      mission: {
        title: "我们的使命",
        description: "创造创新的数字体验，将社区聚集在一起，突破游戏和网络开发可能性的边界。",
      },
      vision: {
        title: "我们的愿景",
        description: "成为创造沉浸式数字体验的领先团队，激励、吸引并连接全球人民。",
      },
      story: {
        title: "我们的故事",
        subtitle: "HoRzTeam的诞生",
        content: [
          'HoRzTeam成立时怀着一个简单而强大的愿景："Better Horz."我们相信每一个数字体验都应该充满激情、创新和对社区需求的深刻理解。',
          "从我们的旗舰Minecraft服务器如Kivotos和Roleplay，到我们的尖端网络平台如Qwer.tOP和Epsilon Auth，我们始终提供超越期望的体验。",
          "我们的团队由充满激情的开发者、设计师和社区管理者组成，他们共同追求一个目标：创造有意义的数字体验。",
        ],
      },
      values: {
        title: "我们的价值观",
        items: ["创新", "社区", "质量", "激情", "卓越", "协作"],
      },
    },
    contact: {
      title: "联系我们",
      subtitle: "与HoRzTeam取得联系。我们很乐意听到您的声音。",
      form: {
        title: "给我们发消息",
        description: "填写下面的表格，我们会尽快回复您。",
        firstName: "名",
        lastName: "姓",
        email: "邮箱",
        subject: "主题",
        message: "消息",
        messagePlaceholder: "告诉我们更多关于您的询问...",
        send: "发送消息",
        sending: "发送中...",
        success: "消息已发送！",
        successDescription: "我们会尽快回复您。",
      },
      email: {
        title: "邮件联系",
        description: "更喜欢邮件？直接给我们发消息。",
        general: "一般咨询：",
        support: "技术支持：",
      },
      response: {
        title: "响应时间",
        description: '我们通常在工作日24-48小时内回复所有询问。对于紧急事项，请在主题行标记"紧急"。',
      },
    },
    privacy: {
      title: "隐私政策",
      subtitle: "您的隐私对我们很重要。了解我们如何保护您的数据。",
      lastUpdated: "最后更新：",
      sections: {
        collect: {
          title: "我们收集的信息",
          description: "我们收集什么数据以及为什么",
          personal: "个人信息",
          personalDesc:
            "我们收集您直接提供给我们的信息，例如当您创建账户、联系我们或使用我们的服务时。这可能包括您的姓名、电子邮件地址和您选择提供的任何其他信息。",
          usage: "使用信息",
          usageDesc: "我们自动收集有关您使用我们服务的某些信息，包括您的IP地址、浏览器类型、操作系统和使用模式。",
        },
        use: {
          title: "我们如何使用您的信息",
          description: "我们处理您数据的目的",
          items: [
            "提供、维护和改进我们的服务",
            "处理交易并发送相关信息",
            "发送技术通知、更新和支持消息",
            "回应您的评论、问题和客户服务请求",
            "监控和分析趋势、使用情况和活动",
            "检测、调查和防止欺诈交易",
          ],
        },
        security: {
          title: "数据安全",
          description: "我们如何保护您的信息",
          content: "我们实施适当的技术和组织安全措施，保护您的个人信息免受未经授权的访问、更改、披露或破坏。",
          measures: "安全措施包括：",
          items: ["传输和静态数据加密", "定期安全审计和评估", "访问控制和身份验证机制", "员工数据保护实践培训"],
        },
        sharing: {
          title: "信息共享",
          description: "我们何时以及如何共享您的数据",
          content: "除本政策所述情况外，我们不会在未经您同意的情况下出售、交易或以其他方式将您的个人信息转让给第三方。",
          when: "我们可能会共享信息：",
          items: ["与协助我们运营的服务提供商", "法律要求或保护我们权利时", "与业务交易相关", "经您明确同意"],
        },
        rights: {
          title: "您的权利",
          description: "您可以对您的数据做什么",
          content: "您对您的个人信息拥有某些权利，包括：",
          items: ["访问您的个人信息", "更正不准确的数据", "删除您的个人信息", "限制处理", "数据可携性", "反对处理"],
        },
        contactUs: {
          title: "联系我们",
          description: "关于此隐私政策的问题",
          content: "如果您对此隐私政策有任何问题，请通过以下方式联系我们：",
        },
      },
    },
  },
}
