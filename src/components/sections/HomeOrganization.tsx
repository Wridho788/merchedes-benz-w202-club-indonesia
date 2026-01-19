"use client";

import Image from "next/image";
import { useChapterById } from "@/lib/hooks/useChapterById";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";

// Helper function to extract Instagram post ID from URL or text
const extractInstagramPostId = (text: string): string | null => {
  if (!text) return null;
  
  // Remove HTML tags and whitespace characters (including \n, \t, etc.)
  const cleanText = text.replace(/<[^>]*>/g, '').replace(/[\n\t\r]/g, '').trim();
  
  // Match Instagram post ID from various URL formats
  const match = cleanText.match(/instagram\.com\/p\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
};

export default function HomeOrganization() {
  // Fetch chapter data for president message
  const { data: chapterData } = useChapterById(CHAPTER_ID);
  
  // Fetch regional activities
  const { data: activitiesData } = useArticleIndexWebsite({
    chapter: CHAPTER_ID,
    category: CATEGORIES.REGIONAL_ACTIVITY,
    limit: 6,
    offset: 0,
    orderby: "",
    order: "asc",
  });

  const presidentMessage = chapterData?.content?.desc || `Mercedes-Benz W202 Club Indonesia adalah Club Otomotif yang mempunyai historia yang panjang. Kami berkomitmen untuk membawa Mercedes-Benz W202 Club Indonesia Bersama Melaju Lebih Jauh dan mempersatukan seluruh Member dari Region dan District untuk memperkuat solidaritas antar anggota, dan membawa komunitas menuju era yang lebih modern, dinamis, berdaya guna, dan dikenal secara Nasional maupun Internasional.`;
  const presidentName = chapterData?.content?.chief || "Hamzah Lutfi Abdat";

  const activities = activitiesData?.content?.result || [];

  return (
    <section className="py-4 md:py-16 lg:py-24 mt-2">
      <div className="container mx-auto px-4 ">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Organization
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">


        {/* President's Message Card */}
        <div className="flex flex-col md:flex-row items-center mb-10 p-6 bg-white rounded-lg shadow-sm">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/logo-pengurus.png"
              alt="MBW202CI Logo"
              width={150}
              height={150}
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6">
            <blockquote className="text-gray-700 italic relative pl-4 border-l-4 border-brand-accent">
              <p className="text-lg mb-4">
                {presidentMessage}
              </p>
              <footer className="text-right">
                <cite className="font-medium text-mercedes-blue">
                  - {presidentName}, Presiden MBW202CI
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Regional Activities */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-brandPrimary text-center mb-6">
            Aktivitas Regional
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {activities.map((activity, index) => {
              const postId = extractInstagramPostId(activity.text);
              
              if (!postId) return null;
              
              return (
                <div key={activity.id} className="relative">
                  <div className="instagram-embed-container">
                    <iframe
                      className="instagram-media instagram-media-rendered"
                      id={`instagram-embed-${index}`}
                      src={`https://www.instagram.com/p/${postId}/embed/captioned/?cr=1&v=14&wp=382`}
                      allowFullScreen={true}
                      frameBorder="0"
                      data-instgrm-payload-id={`instagram-media-payload-${index}`}
                      scrolling="no"
                      height={963}
                      style={{
                        background: "white",
                        maxWidth: "540px",
                        width: "calc(100% - 2px)",
                        borderRadius: "3px",
                        border: "1px solid rgb(219, 219, 219)",
                        boxShadow: "none",
                        display: "block",
                        margin: "0px 0px 12px",
                        minWidth: "326px",
                        padding: "0px",
                      }}
                      title={activity.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/organisasi">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white h-10 px-6 py-2 border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white">
              Selengkapnya
            </button>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
