import AboutUsInfo from "./AboutInfoBox";

const ADDRESS = "Dybdahls veg 3-5, 7051 Trondheim";
const mapsQuery = encodeURIComponent(`${ADDRESS}, Norway`);
const MAP_ZOOM = 13
const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=${MAP_ZOOM}&output=embed`;

function AboutUs() {
    return (
        <section>

            <AboutUsInfo />

            <div className="mt-20 w-full rounded-[var(--radius-shell)]">
                <h3 className="mb-5 text-center font-['Playfair_Display'] text-3xl text-text">
                    Du finner oss på {ADDRESS}
                </h3>
                <div className="flex justify-center">
                    <div className="w-150 rounded-[var(--radius-card)] border-[var(--border-width)] border-border">
                        <div className="aspect-video">
                            <iframe
                                title="Kart over Frisør'n"
                                src={embedSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-full w-full rounded-[var(--radius-image)]"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
