const EduCard = ({ institution, logo, degree, startDate, endDate }) => {
    return (
        <div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
            <div className='flex items-center gap-3'>
                <div className='flex items-center w-14 h-14 md:w-16 md:h-16'>
                    <img 
                        src={logo}
                        alt={`${institution} logo`}
                        className='h-full w-full object-contain'
                        draggable='false'
                    />
                </div>
                <h3 className='md:hidden block text-lg md:text-xl font-bold'>
                    {institution}
                </h3>
            </div>
            <div className='mt-1'>
                <div>
                    <h3 className='hidden md:block text-lg md:text-xl font-bold'>
                        {institution}
                    </h3>
                    <p>{degree}</p>
                    <p className='text-sm text-sh-white-500'>
                        <span>{startDate}</span> - <span>{endDate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EduCard;
