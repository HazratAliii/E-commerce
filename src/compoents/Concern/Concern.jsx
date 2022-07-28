import './Concern.css';

const Concern = () => {
    return (
        <div>
            <div className="c-container">
                <div>
                    <h1>Shop by concern</h1>
                </div>
                <div className="btns">
                    <div className="btn-d1">
                    <button className='concern-btn'>ANTI-AGEING</button> <br />
                        <button className='concern-btn'>BLACKHEADS</button> <br /> 
                    </div>
                    <div className="btn-d2"> 
                        <button className='concern-btn'>OIL CONTROL</button> <br />
                        <button className='concern-btn'>PIGEMENTATION</button> <br />
                    </div>
                    <div className="btn-d3">
                        <button className='concern-btn'>ANTI-REDNESS</button> <br />
                        <button className='concern-btn'> UNEVEN TONE</button> <br />
                    </div>
                    <div className="btn-d4">
                        <button className='concern-btn'>DEHYDRATION</button> <br />
                        <button className='concern-btn'>DULLNESS</button> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concern;
