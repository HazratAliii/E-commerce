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
                        <button>ANTI-AGEING</button> <br />
                        <button>BLACKHEADS</button> <br /> 
                    </div>
                    <div className="btn-d2"> 
                        <button>OIL CONTROL</button> <br />
                        <button>PIGEMENTATION</button> <br />
                    </div>
                    <div className="btn-d3">
                        <button>ANTI-REDNESS</button> <br />
                        <button> UNEVEN TONE</button> <br />
                    </div>
                    <div className="btn-d4">
                        <button>DEHYDRATION</button> <br />
                        <button>DULLNESS</button> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concern;
