import Image from "next/image";

const topLogos = [
    { src: "/assets/icons/react.png", alt: "React" },
    { src: "/assets/icons/flutter.png", alt: "Flutter" },
    { src: "/assets/icons/iconic.png", alt: "Ionic" },
    { src: "/assets/icons/ios.png", alt: "iOS" },
    { src: "/assets/icons/swift.png", alt: "Swift" },
    { src: "/assets/icons/kotlin.png", alt: "Kotlin" },
    { src: "/assets/icons/java.png", alt: "Java" },
    { src: "/assets/icons/angular.png", alt: "Angular" },
    { src: "/assets/icons/node.png", alt: "Node.js" },
    { src: "/assets/icons/photoshop.png", alt: "Photoshop" },
    { src: "/assets/icons/illustrator.png", alt: "Illustrator" },
    { src: "/assets/icons/figma.png", alt: "Figma" },
    { src: "/assets/icons/adobexd.png", alt: "Adobe XD" },
];

const bottomLogos = [
    { src: "/assets/icons/dotnet.png", alt: ".NET" },
    { src: "/assets/icons/python.png", alt: "Python" },
    { src: "/assets/icons/mongodb.png", alt: "MongoDB" },
    { src: "/assets/icons/mysql.png", alt: "MySQL" },
    { src: "/assets/icons/postgresql.png", alt: "PostgreSQL" },
    { src: "/assets/icons/microsoftsqlserver.png", alt: "SQL Server" },
    { src: "/assets/icons/oracle.png", alt: "Oracle" },
    { src: "/assets/icons/aws.png", alt: "AWS" },
    { src: "/assets/icons/azure.png", alt: "Azure" },
    { src: "/assets/icons/googlecloud.png", alt: "Google Cloud" },
    { src: "/assets/icons/selenium.png", alt: "Selenium" },
    { src: "/assets/icons/testng.png", alt: "TestNG" },
];


export default function ScrollingLogosSection({ title, description }) {
    return (
        <section className="px-4 bg-[#F2F7FC]">
            <div className="container mx-auto md:py-16 py-4">
                <div className="flex flex-col gap-3 ">
                    <h2 className="mx-auto text-center">
                        {title}
                    </h2>
                    <p className="max-w-[60%] mx-auto text-center text-[18px]">
                        {description}
                    </p>
                </div>
                <div className=" mx-auto lg:mt-8 md:mt-4 sm:mt-4">

                    {/* Row 1 */}
                    <div className="flex overflow-hidden ">
                        <div className="flex gap-3 scroll-ltr">
                            {[...topLogos, ...topLogos].map((logo, idx) => (
                                <div key={idx} className="h-26 w-20 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={70}
                                        height={70}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex overflow-hidden">
                        <div className="flex gap-3 scroll-rtl">
                            {[...bottomLogos, ...bottomLogos].map((logo, idx) => (
                                <div key={idx} className="h-26 w-20 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={70}
                                        height={70}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
