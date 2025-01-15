
import './selectCategory.scss';
import arrow2 from '../../assets/icons/arrow2.png'

const SelectCategory = () => {

    return (
        <div className="dropdown" id='selectCategory'>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close='outside'>
                Choose category
                <img src={arrow2} width='24' alt='arrow icon' />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Sales
                        <img src={arrow2} width='24' alt='arrow icon'/>
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">Discount 10%</button></li>
                        <li><button className="dropdown-item">Discount 20%</button></li>
                        <li><button className="dropdown-item">Discount 30%</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Bouquets
                        <img src={arrow2} width='24' alt='arrow icon'/>
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">Romantic</button></li>
                        <li><button className="dropdown-item">Sympathy</button></li>
                        <li><button className="dropdown-item">Congratulations</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Indoor Plants
                        <img src={arrow2} width='24' alt='arrow icon' />
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button className="dropdown-item">Succulents</button></li>
                        <li><button className="dropdown-item">Low-Light</button></li>
                        <li><button className="dropdown-item">Pet-Friendly</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SelectCategory;
