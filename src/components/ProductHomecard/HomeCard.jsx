
import data from '../../data/products.json'; // Correct path to JSON

const HomeCard = () => {
    // Function to safely access data arrays
    const getSafeData = (array) => Array.isArray(array) ? array : [];

    // Check if data exists and is an array
    const topFashion = getSafeData(data?.fashion).slice(0, 5);
    const topShous = getSafeData(data?.shous).slice(0, 5);
    const topWatch = getSafeData(data?.watch).slice(0, 5);
    const topElectronic = getSafeData(data?.electronic).slice(0, 5);
    const topGarden = getSafeData(data?.garden).slice(0, 5);

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
                <h2 className="text-2xl text-center font-bold my-4">Top Shous Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topShous.map(item => (
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
                    {topWatch.map(item => (
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
                <h2 className="text-2xl text-center font-bold my-4">Top Electronic Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topElectronic.map(item => (
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
