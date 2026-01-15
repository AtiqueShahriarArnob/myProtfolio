

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Science (B.Sc.)",
            dept: "Computer Science and Engineering (CSE)",
            institution: "Independent University, Bangladesh (IUB)",
            concentration: "Software Development, Artificial Intelligence",
            year: "2022 - Present",
        },
        {
            id: 2,
            degree: "Higher Secondary Certificate (HSC)",
            dept: "Science",
            institution: "Adamjee Cantonment College",
            year: "2020",
        }
    ];

    return (
        <section name='education' className='w-full bg-[#0a192f] text-gray-300 py-16'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>


                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white uppercase tracking-widest'>
                        Education
                    </p>
                </div>


                <div className='mt-8 grid gap-6'>
                    {educationData.map((item) => (
                        <div
                            key={item.id}
                            className='border border-gray-700 p-6 rounded-lg hover:border-pink-600 transition-colors duration-300 bg-[#112240]/30'
                        >
                            <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
                                <div>
                                    <h3 className='text-2xl font-bold text-white'>{item.degree}</h3>
                                    <p className='text-pink-600 font-semibold text-lg mt-1'>{item.institution}</p>
                                </div>
                                <div className='mt-2 md:mt-0'>
                                    <span className='bg-[#112240] border border-pink-600 text-pink-600 px-4 py-1 rounded-md text-sm font-bold'>
                                        {item.year}
                                    </span>
                                </div>
                            </div>

                            <div className='mt-4 pt-4 border-t border-gray-800'>
                                <p className='text-gray-300 font-medium'>{item.dept}</p>
                                {item.concentration && (
                                    <p className='text-sm text-gray-500 mt-2'>
                                        <span className='text-gray-400 font-semibold'>Concentration:</span> {item.concentration}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;