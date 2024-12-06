import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Men's Shoes (653)</h3>
      <ul>
        <li>Basketball</li>
        <li>American Football</li>
        <li>Football</li>
        <li>Training & Gym</li>
        <li>Skateboarding</li>
        <li>Golf</li>
        <li>Tennis</li>
        <li>Athletics</li>
        <li>Walking</li>
      </ul>

      <h4>Sale & Offers</h4>
      <div className="filter-group">
        <input type="checkbox" id="sale" name="sale" />
        <label htmlFor="sale">Sale</label>
      </div>

      <h4>Gender</h4>
      <div className="filter-group">
        <input type="checkbox" id="men" name="men" />
        <label htmlFor="men">Men</label>
      </div>

      <h4>Shop By Price</h4>
      <div className="filter-group">
        <input type="radio" id="under-5000" name="price" />
        <label htmlFor="under-5000">Under ₹5000</label>
        <input type="radio" id="5000-10000" name="price" />
        <label htmlFor="5000-10000">₹5000 - ₹10000</label>
        <input type="radio" id="above-10000" name="price" />
        <label htmlFor="above-10000">Above ₹10000</label>
      </div>

      <h4>Size</h4>
      <div className="filter-group">
        <input type="checkbox" id="size-8" name="size" />
        <label htmlFor="size-8">8</label>
        <input type="checkbox" id="size-9" name="size" />
        <label htmlFor="size-9">9</label>
        <input type="checkbox" id="size-10" name="size" />
        <label htmlFor="size-10">10</label>
      </div>

      <h4>Colour</h4>
      <div className="filter-group">
        <input type="checkbox" id="black" name="colour" />
        <label htmlFor="black">Black</label>
        <input type="checkbox" id="white" name="colour" />
        <label htmlFor="white">White</label>
        <input type="checkbox" id="red" name="colour" />
        <label htmlFor="red">Red</label>
      </div>
    </div>
  );
};

export default Sidebar;
