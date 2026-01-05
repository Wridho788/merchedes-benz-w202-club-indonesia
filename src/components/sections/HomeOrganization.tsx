"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomeOrganization() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const presidentMessage = `"Mercedes-Benz W202 Club Indonesia adalah Club Otomotif yang mempunyai historia yang panjang. Dari berkembangnya untuk membina Mercedes-Benz W202 Club Indonesia bersama Maju Lebih Jauh dan mempertautkan seluruh Member dari Region dan Distirct untuk menguatkan solidaritas antar anggota, dan menjadis tanur bah wangsa era yang lebih modern, dinamis, tertata guna, dan dikenal secara Nasional maupun Internasional."`;

  const shortMessage = presidentMessage.substring(0, 200) + "...";

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
                "Mercedes-Benz W202 Club Indonesia adalah Club Otomotif yang
                mempunyai historis yang panjang. Kami berkomitmen untuk membawa
                Mercedes-Benz W202 Club Indonesia Bersama Melaju Lebih Jauh dan
                mempersatukan seluruh Member dari Region dan District untuk
                memperkuat solidaritas antar anggota, dan membawa komunitas
                menuju era yang lebih modern, dinamis, berdaya guna, dan dikenal
                secara Nasional maupun Internasional."
              </p>
              <footer className="text-right">
                <cite className="font-medium text-mercedes-blue">
                  - Hamzah Lutfi Abdat, Presiden MBW202CI
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
            {/* Regional Activity Cards - using placeholder for now */}
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-0"
                  src="https://www.instagram.com/p/DJDnKoCJ6s3/embed/captioned/?cr=1&amp;v=14&amp;wp=382&amp;rd=https%3A%2F%2Fmbw202clubindonesia.org&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A13617.799999999988%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="1323"
                  data-instgrm-payload-id="instagram-media-payload-0"
                  scrolling="no"
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
                ></iframe>
              </div>
            </div>
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-1"
                  src="https://www.instagram.com/p/DIfRzqOydr1/embed/captioned/?cr=1&amp;v=14&amp;wp=382&amp;rd=https%3A%2F%2Fmbw202clubindonesia.org&amp;rp=%2F#%7B%22ci%22%3A1%2C%22os%22%3A13628.099999999977%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="963"
                  data-instgrm-payload-id="instagram-media-payload-1"
                  scrolling="no"
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
                ></iframe>{" "}
              </div>
            </div>
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-2"
                  src="https://www.instagram.com/p/DJhcvHRTAnW/embed/captioned/?cr=1&amp;v=14&amp;wp=382&amp;rd=https%3A%2F%2Fmbw202clubindonesia.org&amp;rp=%2F#%7B%22ci%22%3A2%2C%22os%22%3A13678.899999999965%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="1005"
                  data-instgrm-payload-id="instagram-media-payload-2"
                  scrolling="no"
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
                ></iframe>
              </div>
            </div>
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-0"
                  src="https://www.instagram.com/p/C_ND3sEScRl/embed/captioned/?cr=1&v=14&wp=382&rd=https%3A%2F%2Fmbw202clubindonesia.org&rp=%2F#%7B%22ci%22%3A3%2C%22os%22%3A23771.399999999965%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="1323"
                  data-instgrm-payload-id="instagram-media-payload-0"
                  scrolling="no"
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
                ></iframe>
              </div>
            </div>
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-1"
                  src="https://www.instagram.com/p/DFMmpwTy7BU/embed/captioned/?cr=1&v=14&wp=382&rd=https%3A%2F%2Fmbw202clubindonesia.org&rp=%2F#%7B%22ci%22%3A4%2C%22os%22%3A23919.099999999977%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="963"
                  data-instgrm-payload-id="instagram-media-payload-1"
                  scrolling="no"
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
                ></iframe>{" "}
              </div>
            </div>
            <div className="relative">
              <div className="instagram-embed-container">
                <iframe
                  className="instagram-media instagram-media-rendered"
                  id="instagram-embed-2"
                  src="https://www.instagram.com/p/DJhcvHRTAnW/embed/captioned/?cr=1&amp;v=14&amp;wp=382&amp;rd=https%3A%2F%2Fmbw202clubindonesia.org&amp;rp=%2F#%7B%22ci%22%3A2%2C%22os%22%3A13678.899999999965%2C%22ls%22%3A8848.199999999953%2C%22le%22%3A13602.199999999953%7D"
                  allowFullScreen={true}
                  frameBorder="0"
                  height="1005"
                  data-instgrm-payload-id="instagram-media-payload-2"
                  scrolling="no"
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
                ></iframe>
              </div>
            </div>
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
