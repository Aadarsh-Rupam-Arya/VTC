import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Products.css';

const Products = ({ searchQuery }) => {
    const products = [
       
       
            { id: 1, name: 'Hammer', price: 'Rs. 750', image: require('../images/hammer.jpg') },
            { id: 2, name: 'Pump', price: 'Rs. 375', image: require('../images/pump.jpg') },
            { id: 3, name: 'Screwdriver', price: 'Rs. 600', image: require('../images/screwdriver.jpg') },
            { id: 4, name: 'Wrench', price: 'Rs. 900', image: require('../images/wrench.jpg') },
            { id: 5, name: 'Tape Measure', price: 'Rs. 450', image: require('../images/tape_measure.jpg') },
            { id: 6, name: 'Garden Hoe', price: 'Rs. 1125', image: require('../images/garden_hoe.jpg') },
            { id: 7, name: 'Shovel', price: 'Rs. 1500', image: require('../images/shovel.jpg') },
            { id: 8, name: 'Drill Machine', price: 'Rs. 3750', image: require('../images/drill_machine.jpg') },
            { id: 9, name: 'Lawn Mower', price: 'Rs. 11250', image: require('../images/lawn_mower.jpg') },
            { id: 10, name: 'Plier', price: 'Rs. 525', image: require('../images/plier.jpg') },
            { id: 11, name: 'Electric Saw', price: 'Rs. 5250', image: require('../images/electric_saw.jpg') },
            { id: 12, name: 'Pipe Wrench', price: 'Rs. 975', image: require('../images/pipe_wrench.jpg') },
            { id: 13, name: 'Chisel', price: 'Rs. 375', image: require('../images/chisel.jpg') },
            { id: 14, name: 'Hose Reel', price: 'Rs. 2625', image: require('../images/hose_reel.jpg') },
            { id: 15, name: 'Garden Rake', price: 'Rs. 1350', image: require('../images/garden_rake.jpg') },
            { id: 16, name: 'Wheelbarrow', price: 'Rs. 4875', image: require('../images/wheelbarrow.jpg') },
            { id: 17, name: 'Bolt Cutter', price: 'Rs. 1875', image: require('../images/bolt_cutter.jpg') },
            { id: 18, name: 'Gloves', price: 'Rs. 600', image: require('../images/gloves.jpg') },
            { id: 19, name: 'Paint Brush Set', price: 'Rs. 750', image: require('../images/paint_brush_set.jpg') },
            { id: 20, name: 'Spade', price: 'Rs. 1050', image: require('../images/spade.jpg') },
            { id: 21, name: 'Pruning Shears', price: 'Rs. 675', image: require('../images/pruning_shears.jpg') },
            { id: 22, name: 'Ladder', price: 'Rs. 5625', image: require('../images/ladder.jpg') },
            { id: 23, name: 'Safety Glasses', price: 'Rs. 450', image: require('../images/safety_glasses.jpg') },
            { id: 24, name: 'Level Tool', price: 'Rs. 1125', image: require('../images/level_tool.jpg') },
            { id: 25, name: 'Sandpaper', price: 'Rs. 300', image: require('../images/sandpaper.jpg') },
            { id: 26, name: 'Wheel Grinder', price: 'Rs. 4875', image: require('../images/wheel_grinder.jpg') },
            { id: 27, name: 'Measuring Wheel', price: 'Rs. 3375', image: require('../images/measuring_wheel.jpg') },
            { id: 28, name: 'Wire Cutter', price: 'Rs. 1500', image: require('../images/wire_cutter.jpg') },
            { id: 29, name: 'Air Compressor', price: 'Rs. 15000', image: require('../images/air_compressor.jpg') },
            { id: 30, name: 'Chainsaw', price: 'Rs. 11250', image: require('../images/chainsaw.jpg') },
        
        

       
    ];

  
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-container">
            <h1>Welcome to Vaishnavi Traders</h1>
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Products;
