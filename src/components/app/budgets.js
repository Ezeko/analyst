import React from 'react'


const Budgets = () => {

    return(
        <React.Fragment>
            <div className='container center'>
                    <ul className=''>
                        <li className='collection'>
                            <a  href='/budgets/savings' className='  collection-item'> 
                            <span className='badge' >₦20,000</span>Savings</a>
                        </li>
                        <li className='collection'>
                            <a  href='/budgets/entertainment' className='  collection-item'> 
                            <span className='badge' >₦10,000</span>Entertainment</a>
                        </li>
                        <li className='collection'>
                            <a  href='/budgets/education' className='  collection-item'> 
                            <span className='badge' >₦250,000</span>Education</a>
                        </li>
                        <li className='collection'>
                            <a  href='/budgets/feeding' className='  collection-item'> 
                            <span className='badge' >₦20,000</span>Feeding</a>
                        </li>
                    </ul>
                
            </div>
        </React.Fragment>
    );
}

export default Budgets