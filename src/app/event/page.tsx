"use client";
export default function EventPage() {

  return (
    <section className="py-20 bg-mercedes-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-mercedes-blue">
            Event
          </h1>
          <div className="w-24 h-1 bg-mercedes-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai event yang diselenggarakan oleh W202 Club of Indonesia.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
            Event Mendatang
          </h3>
          <div className="overflow-x-auto scroll-hidden pb-6">
            <div className="flex space-x-6 min-w-max">
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-mercedes-blue flex flex-col items-center justify-center text-white cursor-pointer p-4">
                  <p className="text-xl font-sans font-bold text-center mb-2">
                    Jambore Nasional XX di Sumarecon Bandung
                  </p>
                  <p className="text-sm text-center">6 Desember 2025</p>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    Jambore Nasional XX di Sumarecon Bandung
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">Bandung</p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Event tahunan Mercedes Benz Club Indonesia
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-mercedes-blue flex flex-col items-center justify-center text-white cursor-pointer p-4">
                  <p className="text-xl font-sans font-bold text-center mb-2">
                    Coaching Clinic by Thomas Narukama W202.01.074
                  </p>
                  <p className="text-sm text-center">22 November 2025</p>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    Coaching Clinic by Thomas Narukama W202.01.074
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Tanah Air Cafe, TVRI Jakarta
                  </p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Memberikan pemahaman tentang bagaimana membuat W202 Fun to
                    Drive
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <div className="cursor-pointer w-full h-full">
                    <img
                      src="/images/event-default.jpg"
                      alt="ClassNameic Auto Show"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    ClassNameic Auto Show
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    JCC Senayan, Jakarta
                  </p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Pameran mobil klasik dengan booth khusus W202 Club
                    Indonesia.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <div className="cursor-pointer w-full h-full">
                    <img
                      src="/images/event-default.jpg"
                      alt="W202 Weekend Drive"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    W202 Weekend Drive
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">Puncak, Bogor</p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Touring weekend ke Puncak dengan agenda makan bersama dan
                    fotografi.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <div className="cursor-pointer w-full h-full">
                    <img
                      src="/images/event-default.jpg"
                      alt="Techno Workshop"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    Techno Workshop
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Atelier Klasik, Bandung
                  </p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Workshop teknis tentang perawatan dan troubleshooting mesin
                    M111.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
              <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <div className="cursor-pointer w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;h=300&amp;q=80"
                      alt="Anniversary Gathering"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-lg text-mercedes-blue">
                    Anniversary Gathering
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    SCBD, Jakarta Selatan
                  </p>
                  <p className="text-sm mb-4 line-clamp-2">
                    Perayaan ulang tahun ke-13 W202 Club Indonesia dengan konvoi
                    dan pameran mobil.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Detail Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-sans font-semibold text-2xl text-mercedes-blue">
              Kalender Event
            </h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded text-sm font-medium bg-mercedes-blue text-white transition duration-300">
                Semua
              </button>
              <button className="px-4 py-2 rounded text-sm font-medium bg-mercedes-light-gray text-mercedes-blue hover:bg-mercedes-gold hover:text-white transition duration-300">
                Internal
              </button>
              <button className="px-4 py-2 rounded text-sm font-medium bg-mercedes-light-gray text-mercedes-blue hover:bg-mercedes-gold hover:text-white transition duration-300">
                External
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                  Kalender Event
                </h4>
                <div className="rdp p-3 rounded-md border">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div className="space-y-4 rdp-caption_start rdp-caption_end">
                      <div className="flex justify-center pt-1 relative items-center">
                        <div
                          className="text-sm font-medium"
                          aria-live="polite"
                          role="presentation"
                          id="react-day-picker-1"
                        >
                          January 2026
                        </div>
                        <div className="space-x-1 flex items-center">
                          <button
                            name="previous-month"
                            aria-label="Go to previous month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-chevron-left h-4 w-4 rdp-nav_icon"
                            >
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </button>
                          <button
                            name="next-month"
                            aria-label="Go to next month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-chevron-right h-4 w-4 rdp-nav_icon"
                            >
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <table
                        className="w-full border-collapse space-y-1"
                        role="grid"
                        aria-labelledby="react-day-picker-1"
                      >
                        <thead className="rdp-head">
                          <tr className="flex">
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Sunday"
                            >
                              Su
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Monday"
                            >
                              Mo
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Tuesday"
                            >
                              Tu
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Wednesday"
                            >
                              We
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Thursday"
                            >
                              Th
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Friday"
                            >
                              Fr
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Saturday"
                            >
                              Sa
                            </th>
                          </tr>
                        </thead>
                        <tbody className="rdp-tbody">
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                30
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                31
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                1
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                2
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                3
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                4
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                5
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                6
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                7
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                8
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                9
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                10
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                11
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                12
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                13
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                14
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                15
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                16
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                17
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                18
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground bg-accent text-accent-foreground"
                                role="gridcell"
                                aria-selected="true"
                                tabIndex={0}
                                type="button"
                              >
                                19
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                20
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                21
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                22
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                23
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                24
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                25
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                26
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                27
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                30
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                31
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                  Event pada 19 Januari 2026
                </h4>
                <div className="flex flex-col items-center justify-center h-64 bg-mercedes-light-gray rounded-lg">
                  <p className="text-gray-500">
                    Tidak ada event pada tanggal ini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
            Event Terbaru
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <div className="cursor-pointer w-full h-full">
                  <img
                    src="/images/event-default.jpg"
                    alt="Super Street Star Night Race Series"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-sans font-semibold text-mercedes-blue">
                    Super Street Star Night Race Series
                  </h4>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs text-white bg-mercedes-silver">
                    Eksternal
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  8 November 2025 • Miami Beach PIK2 Banten
                </p>
                <p className="text-sm mb-4 line-clamp-3">
                  Mercedes Benz WDua Nol Dua Club Indonesia Region 01 Jakarta
                  ikut berpartisipasi dalam Super Street Star Night Race Series
                  yang dilaksanakan oleh MB Club Ina dalam rangka Road to JAMNAS
                  XX BANDUNG 2025. Racer Sekjen Kiki Yanreza W202 C240, Doddy
                  Kurniawan W202 C200 Turbo dan Meitius W202 C230 Kompre. Dalam
                  event Super Street Star Night Race Series, MBW202 Motorsport
                  mendapatkan 6 trophy untuk kategori : - Star 17 Detik 402M -
                  Juara 3 Kiki Yanreza - Star 18 Detik 402M - Juara 4 Meitius
                  Dicky - Star FFA 201M - Juara 4 Doddy Kurniawan - Star 11
                  Detik 201 - Juara 4 Kiki Yanreza - Team Terbaik 402M - Juara 5
                  - Star Cool - Doddy Kurniawan
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-mercedes-light-gray px-2 py-1 rounded text-mercedes-blue">
                    Outdoor
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                  Detail Event
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <a
                  href="https://youtu.be/jOzip2FwWWQ?si=MLgHr_wtIFkzzoqy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img
                    src="https://i.ytimg.com/vi/jOzip2FwWWQ/maxresdefault.jpg"
                    alt="Rakernas MBW202CI Tahun 2025 "
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5V19L19 12L8 5Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-sans font-semibold text-mercedes-blue">
                    Rakernas MBW202CI Tahun 2025
                  </h4>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs text-white bg-mercedes-gold">
                    Internal
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  1 November 2025 • Semarang
                </p>
                <p className="text-sm mb-4 line-clamp-3">
                  Pengurus Pusat Mercedes Benz WDua Nol Dua Club Indonesia
                  mengadakan Rapat Kerja Nasional Tahun 2025 di Kota Semarang.
                  Dihadiri oleh Presiden, Founder, Ketua Dewan Pembina, Ketua
                  Dewan Pembina MB Club Ina, mantan Presiden, Chief, Deputy,
                  Sekjen dan Bendahara Region dan District
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-mercedes-light-gray px-2 py-1 rounded text-mercedes-blue">
                    Meeting
                  </div>
                </div>
                <a
                  href="https://youtu.be/jOzip2FwWWQ?si=MLgHr_wtIFkzzoqy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Tonton Video
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <a
                  href="https://youtu.be/CucADICQow4?si=T_vDfXB8IN9wGeUb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img
                    src="https://i.ytimg.com/vi/CucADICQow4/maxresdefault.jpg"
                    alt="Touring Region 03 Surabaya &amp; Grand Manohara MBW202CI 2025 Tawangmangu Karang Anyar Jawa Tengah"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5V19L19 12L8 5Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-sans font-semibold text-mercedes-blue">
                    Touring Region 03 Surabaya &amp; Grand Manohara MBW202CI
                    2025 Tawangmangu Karang Anyar Jawa Tengah
                  </h4>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs text-white bg-mercedes-gold">
                    Internal
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  3 Mei 2025 • Tawangmangu Jawa Tengah
                </p>
                <p className="text-sm mb-4 line-clamp-3">
                  Start touring dimulai dari Tikum di rest area 726 dengan 11KR,
                  perjalanan sekitar 2 jam melalui toll dan keluar di exit toll
                  Madiun, kemudian dilanjutkan menuju kota Madiun untuk makan
                  siang di Pecel Pojok yang menghidangkan nasi pecel khas
                  Madiun, sekaligus support dari EVP 5, Om Hayik, untuk W202CI
                  Region 03 Jakarta. Seperti region dan district lainnya, kami
                  menginap di D'Lawu Mountain Cottage Tawangmangu dan
                  beristirahat sejenak sebelum mengikuti acara puncak Grand
                  Manohara W202CI 2025. Acara Puncak Grand Manohara W202CI 2025
                  diisi dengan: Performance Band Gala Dinner dengan menu utama
                  Kambing Guling Pembacaan Puisi oleh Tante Dyah (Istri dari Om
                  Deddy Z, member W202CI Region 01 Jakarta) Fun Lottery yang
                  sudah disiapkan lebih dari 300 hadiah dari panitia dan hadiah
                  kejutan tambahan lainnya.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-mercedes-light-gray px-2 py-1 rounded text-mercedes-blue">
                    Touring. Grand Manohara
                  </div>
                </div>
                <a
                  href="https://youtu.be/CucADICQow4?si=T_vDfXB8IN9wGeUb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
                    Tonton Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/kegiatan/all">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background h-10 px-6 py-2 border border-mercedes-blue text-mercedes-blue rounded font-medium hover:bg-mercedes-blue hover:text-white">
                Lihat Semua Event
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
            Tentang Event Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                Event Internal
              </h4>
              <p className="text-gray-600 mb-4">
                W202 Club Indonesia secara rutin mengadakan berbagai event
                internal yang eksklusif untuk anggota, seperti:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Kopdar Bulanan</span>
                    <p className="text-sm text-gray-600">
                      Pertemuan rutin anggota untuk silaturahmi dan berbagi
                      pengalaman
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Touring</span>
                    <p className="text-sm text-gray-600">
                      Perjalanan bersama ke berbagai destinasi menarik di
                      Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Workshop Teknis</span>
                    <p className="text-sm text-gray-600">
                      Sesi edukasi tentang perawatan dan perbaikan Mercedes-Benz
                      W202
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Anniversary</span>
                    <p className="text-sm text-gray-600">
                      Perayaan ulang tahun klub dengan berbagai acara spesial
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                Event Eksternal
              </h4>
              <p className="text-gray-600 mb-4">
                Selain event internal, W202 Club Indonesia juga aktif
                berpartisipasi dalam berbagai event otomotif, seperti:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Pameran Otomotif</span>
                    <p className="text-sm text-gray-600">
                      Partisipasi dalam IIMS, GIIAS, dan pameran otomotif
                      lainnya
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Car Show</span>
                    <p className="text-sm text-gray-600">
                      Ikut serta dalam berbagai pameran mobil klasik di
                      Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Gathering Komunitas</span>
                    <p className="text-sm text-gray-600">
                      Berpartisipasi dalam acara gabungan antar komunitas
                      otomotif
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Event Sosial</span>
                    <p className="text-sm text-gray-600">
                      Bakti sosial dan kegiatan amal untuk masyarakat
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
