import { Button } from "@/components/ui/button"


export default function LanguageSelection() {
    const languages = [
        { name: "हिन्दी", englishName: "Hindi" },
        { name: "ಕನ್ನಡ", englishName: "Kannada" },
        { name: "தமிழ்", englishName: "Tamil" },
        { name: "ગુજરાતી", englishName: "Gujarati" },
        { name: "English", englishName: "English" },
        { name: "മലയാളം", englishName: "Malayalam" },
        { name: "తెలుగు", englishName: "Telugu" },
        { name: "मराठी", englishName: "Marathi" },
        { name: "বাংলা", englishName: "Bangla" },
        { name: "ଓଡ଼ିଆ", englishName: "Odia" },
        { name: "অসমীয়া", englishName: "Assamese" },
    ];

    return (
        <>
            <div className="px-[20%] mt-[80px] py-[5%] lg:h-[100vh] md:h-[100vh] bg-purple-50">
                <div className='text-center mt-5'>
                    <span className='block text-gray-700 text-2xl mb-2'>Explore Course Categories</span>
                    <span>Courses available in 11 languages</span>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {
                        languages.map((items, index) => {
                            return (
                                <Button key={index} variant="outline" className="w-[15rem] h-[3rem]">
                                    <span> {items.name}</span>
                                    <span>{items.englishName}</span>
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
