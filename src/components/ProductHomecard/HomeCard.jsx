import data from '../../data/products.json'; // Correct path to JSON

const HomeCard = () => {
    // Function to safely access data arrays
    const getSafeData = (array) => Array.isArray(array) ? array : [];

    // Adjusted data slices based on the IDs provided in the JSON
    const topFashion = getSafeData(data?.fashion).slice(0, 5); // IDs 1-5
    const topShoes = getSafeData(data?.shoes).slice(0, 5);     // IDs 11-15
    const topWatches = getSafeData(data?.watches).slice(0, 5);  // IDs 21-25
    const topElectronics = getSafeData(data?.electronics).slice(0, 5); // IDs 31-35
    const topGarden = getSafeData(data?.home_garden).slice(0, 5); // IDs 41-45

    return (
        <div>
            <section>
                <h2 className="text-2xl text-center font-bold my-4">Top Fashion Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topFashion.map(item => (
                        <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                            <img src={item.image} alt={item.name} className="object-cover h-48 w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">{item.details}</p>
                            <p className="text-lg font-bold mb-4">${item.price}</p>
                            <button className="btn btn-primary">Buy it now!</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center font-bold my-4">Top Shoes Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topShoes.map(item => (
                        <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                            <img src={item.image} alt={item.name} className="object-cover h-48 w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">{item.details}</p>
                            <p className="text-lg font-bold mb-4">${item.price}</p>
                            <button className="btn btn-primary">Buy it now!</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center font-bold my-4">Top Watches Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topWatches.map(item => (
                        <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                            <img src={item.image} alt={item.name} className="object-cover h-48 w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">{item.details}</p>
                            <p className="text-lg font-bold mb-4">${item.price}</p>
                            <button className="btn btn-primary">Buy it now!</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center font-bold my-4">Top Electronics Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topElectronics.map(item => (
                        <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                            <img src={item.image} alt={item.name} className="object-cover h-48 w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">{item.details}</p>
                            <p className="text-lg font-bold mb-4">${item.price}</p>
                            <button className="btn btn-primary">Buy it now!</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-center font-bold my-4">Top Garden Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topGarden.map(item => (
                        <div key={item.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                            <img src={item.image} alt={item.name} className="object-cover h-48 w-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">{item.details}</p>
                            <p className="text-lg font-bold mb-4">${item.price}</p>
                            <button className="btn btn-primary">Buy it now!</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeCard;
