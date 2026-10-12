const BookLoading = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <h2 className="text-5xl">Loading Book Details...<span className="loading loading-spinner text-neutral text-6xl"></span></h2>
        </div>
    );
};

export default BookLoading;