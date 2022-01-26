import React from 'react';

function Panels(props) {


    return (

        <div className="panel">
            <div className='panel-wrapper'>
                <div className='panel-header'>
                    <h2> {props.panelHeader} </h2>
                </div>
                <div className='panel-content'>
                    <p><strong> {props.panelTextOne}  </strong></p>
                    <p> {props.panelTextTwo} </p>
                    
                    {/* <p><strong><em>It is not our goal to construct a complex solution, but rather a reliable solution that can grow with our client’s needs. </em></strong>
                        Please <a href="contact-us">contact us</a> to learn more about how Magpie can benefit your company.</p> */}
                </div>
            </div>
        </div>

    );
}

export default Panels;
