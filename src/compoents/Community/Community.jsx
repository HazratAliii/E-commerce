import "./Community.css"

const Community = () => {
    return (
        <div>
            <div className="community-wrapper">
                <div className="community-header"> <h1>Join Our Community</h1> </div>
                <div className="community-p">
                    <p>Meet other Facetheorists, learn about product launches and get exclusive subscriber-only discounts.</p>
                </div>
                <div className="community-sb">
                    <input className="community-search" type="text" placeholder="Enter your email address"/>
                    <button className="community-btn">Join</button>
                </div>
            </div>
        </div>
    );
}

export default Community;
