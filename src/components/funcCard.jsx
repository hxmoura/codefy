import React from 'react'

export default function funcCardItem(props) {
    return (
        <div data-aos="fade-up" className={props.class ? 'card-container ' + props.class : 'card-container'}>
            <img className="func-icon" src={props.icon} alt={props.alt} />
            <div className="func-info-container">
                <h2 className="func-title">{props.title}</h2>
                <p className="func-description">{props.description}</p>
            </div>
        </div>
    )
}