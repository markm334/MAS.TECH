import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Lightbulb, Shield, DollarSign, Heart } from "lucide-react";

const faqs = [
  {
    category: "About MAS",
    icon: Lightbulb,
    questions: [
      {
        question: "What exactly is the Multifunctional Assistive System (MAS)?",
        answer: "MAS is an intelligent, modular assistive platform designed to help individuals with mobility challenges transfer safely between bed, wheelchair, and seated positions. It uses smart sensors, automated mechanics, and human-centered design to provide dignified, injury-free assistance without requiring manual lifting by caregivers.",
      },
      {
        question: "Who can benefit from MAS?",
        answer: "MAS is designed for anyone with mobility limitations, including elderly individuals, people recovering from surgery or illness, those with chronic conditions affecting mobility, and people with disabilities. It also significantly benefits caregivers by reducing physical strain and injury risk.",
      },
      {
        question: "How is MAS different from existing assistive devices?",
        answer: "MAS stands out through its combination of affordability, dignity-first design, and smart technology. Unlike traditional hoists that can feel dehumanizing, MAS is designed to preserve user autonomy. It's also significantly more affordable than existing solutions ($10,000-$50,000), making it accessible to developing markets.",
      },
      {
        question: "What stage of development is MAS currently at?",
        answer: "MAS has a working prototype that has been tested with real users. We're currently in the user testing and validation phase, working toward safety certifications and manufacturing setup. With adequate funding, we aim to launch in the market by 2025.",
      },
    ],
  },
  {
    category: "Technology & Safety",
    icon: Shield,
    questions: [
      {
        question: "Is MAS safe to use?",
        answer: "Safety is our top priority. MAS incorporates multiple safety features including pressure sensors, motion sensors, load detection, and emergency stop functionality. The system continuously monitors for safe operation and will halt immediately if any anomaly is detected.",
      },
      {
        question: "Does MAS require training to operate?",
        answer: "MAS is designed for simplicity. The one-button operation, combined with visual, tactile, and optional voice guidance, means most users can operate it with minimal instruction. We provide comprehensive training materials for healthcare facilities and families.",
      },
      {
        question: "How long does the battery last?",
        answer: "MAS is designed for all-day use with a battery life of 12+ hours of continuous operation. The battery can be fully recharged overnight.",
      },
      {
        question: "What is the weight capacity?",
        answer: "MAS can safely support users weighing up to 150kg (330 lbs). The robust construction and smart load detection ensure safe operation within these limits.",
      },
    ],
  },
  {
    category: "Investment & Donations",
    icon: DollarSign,
    questions: [
      {
        question: "How will my donation be used?",
        answer: "100% of donations go directly toward MAS development. Funds are allocated to: Product Refinement (25%), Certifications & Compliance (20%), Manufacturing Setup (30%), Pilot Programs (15%), and Market Entry (10%).",
      },
      {
        question: "Are donations tax-deductible?",
        answer: "Depending on your location and tax regulations, donations to MAS may be tax-deductible. We recommend consulting with a tax professional in your jurisdiction. We provide donation receipts upon request.",
      },
      {
        question: "What's the difference between donating and investing?",
        answer: "Donations are charitable contributions that support our mission without expectation of financial return. Investment involves larger commitments with potential for financial returns as MAS grows. Investors become stakeholders with access to financial reports.",
      },
      {
        question: "How much funding does MAS need?",
        answer: "We're seeking $2.5 million to complete development, achieve certifications, set up manufacturing, run pilot programs, and launch in our initial markets.",
      },
    ],
  },
  {
    category: "Impact & Mission",
    icon: Heart,
    questions: [
      {
        question: "Why was MAS created?",
        answer: "MAS was born from the founder's personal experience caring for his mother during her battle with cancer. Watching her struggle with transfers inspired a mission to create technology that preserves human dignity.",
      },
      {
        question: "How does MAS contribute to sustainability?",
        answer: "MAS is built with 90% eco-friendly materials including bamboo frames, corn-based bioplastics, and recycled metals. We're aligned with UN Sustainable Development Goals 3, 10, and 11.",
      },
      {
        question: "Where will MAS be available?",
        answer: "We're starting with Kenya and East Africa. From there, we plan to expand across Africa and into other developing markets, eventually reaching Europe, North America, and Asia.",
      },
      {
        question: "How can I get involved beyond donating?",
        answer: "Share our mission on social media, connect us with potential partners, volunteer your expertise, participate in user research, or become an ambassador in your community.",
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <HelpCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Find answers to common questions about MAS, our technology, 
            investment opportunities, and how you can make an impact.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-gradient-soft rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card border border-border rounded-xl px-4 data-[state=open]:shadow-card data-[state=open]:border-secondary/50 transition-all"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary py-4 text-sm">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;