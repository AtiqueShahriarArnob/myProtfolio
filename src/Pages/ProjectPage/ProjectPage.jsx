import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {

        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error loading projects:", err));
    }, []);


    if (selectedProject) {
        return (
            <div className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[120px] pb-20 px-4'>
                <div className='max-w-[800px] mx-auto'>
                    <button
                        onClick={() => setSelectedProject(null)}
                        className='text-pink-600 font-bold mb-8 hover:underline flex items-center gap-2'
                    >
                        ← Back to All Projects
                    </button>

                    <div className='text-center mb-10'>
                        <h2 className='text-4xl font-bold text-white mb-2 italic uppercase tracking-tight'>
                            {selectedProject.title}
                        </h2>
                        <div className='w-full h-[1px] bg-pink-600 mb-8'></div>
                    </div>


                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className='w-full rounded-lg border-2 border-gray-800 mb-8 shadow-2xl object-cover'
                    />

                    <div className='bg-[#112240] p-8 rounded-lg text-left border border-gray-800'>
                        <p className='mb-4 text-lg'><span className='text-pink-600 font-bold'>Tech Stack:</span> {selectedProject.techStack}</p>
                        <p className='mb-4 text-lg'><span className='text-pink-600 font-bold'>Description:</span> {selectedProject.description}</p>
                        <p className='mb-4 text-lg'><span className='text-pink-600 font-bold'>Challenges:</span> {selectedProject.challenges}</p>
                        <p className='mb-10 text-lg'><span className='text-pink-600 font-bold'>Future Improvements:</span> {selectedProject.future}</p>

                        <div className='flex flex-wrap gap-6 text-center'>
                            <a href={selectedProject.live} target="_blank" rel="noreferrer" className='flex-1 bg-pink-600 px-8 py-3 rounded font-bold text-white hover:bg-transparent border border-pink-600 transition duration-300'>Live Project</a>
                            <a href={selectedProject.github} target="_blank" rel="noreferrer" className='flex-1 border border-gray-500 px-8 py-3 rounded font-bold hover:border-pink-600 hover:text-pink-600 transition duration-300'>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[120px] pb-20 px-4'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='mb-20 text-center'>
                    <h2 className='text-5xl font-bold text-white border-b-4 border-pink-600 inline-block mb-4 uppercase'>
                        Projects
                    </h2>
                    <p className='text-xl text-gray-400'>
                        // Some of my recent works and technical applications
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {projects.map((project) => (
                        <div key={project.id} className='bg-[#112240] rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col hover:border-pink-600/50 transition-all group'>
                            <div className='overflow-hidden h-52'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                            <div className='p-6 flex flex-col flex-grow'>
                                <h3 className='text-xl font-bold text-white mb-6 uppercase tracking-wide'>{project.title}</h3>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className='mt-auto w-full bg-[#1d2d44] hover:bg-pink-600 text-white py-3 rounded-lg transition-all duration-300 font-bold text-xs uppercase tracking-widest'
                                >
                                    View More / Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;