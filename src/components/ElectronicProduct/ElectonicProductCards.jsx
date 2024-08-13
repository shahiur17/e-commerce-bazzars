import data from '../../data/products.json';

const ElectonicProductCards = () => {
    const getSafeData = (array) => Array.isArray(array) ? array : [];

    const topElectronic = getSafeData(data?.electronics).slice(0, 10); // IDs 1-10

    return (
        <div>
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
        </div>
    );
};

export default ElectonicProductCards;