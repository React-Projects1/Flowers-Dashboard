
import './selectCategory.scss';
import arrow2 from '../../assets/icons/arrow2.png'

const SelectCategory = () => {

    return (
        <div class="dropdown" id='selectCategory'>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close='outside'>
                Choose category
                <img src={arrow2} width='24' alt='arrow icon' />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className='dropend'>
                    <button class="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Sales
                        <img src={arrow2} width='24' alt='arrow icon'/>
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button class="dropdown-item">Discount 10%</button></li>
                        <li><button class="dropdown-item">Discount 20%</button></li>
                        <li><button class="dropdown-item">Discount 30%</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button class="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Bouquets
                        <img src={arrow2} width='24' alt='arrow icon'/>
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button class="dropdown-item">Romantic</button></li>
                        <li><button class="dropdown-item">Sympathy</button></li>
                        <li><button class="dropdown-item">Congratulations</button></li>
                    </ul>
                </li>

                <li className='dropend'>
                    <button class="dropdown-item dropdown-toggle" data-bs-toggle='dropdown'>
                        Indoor Plants
                        <img src={arrow2} width='24' alt='arrow icon' />
                    </button>
                    <ul className='dropdown-menu'>
                        <li><button class="dropdown-item">Succulents</button></li>
                        <li><button class="dropdown-item">Low-Light</button></li>
                        <li><button class="dropdown-item">Pet-Friendly</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SelectCategory;
